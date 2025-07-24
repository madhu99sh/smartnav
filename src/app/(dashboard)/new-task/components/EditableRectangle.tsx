"use client";

import "leaflet-path-transform";
import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L, { LeafletEvent, Polygon, Rectangle, FeatureGroup } from "leaflet";
import "leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-path-drag";
import { useShape } from "../../context/ShapeContext";

declare global {
  interface Window {
    __drawTools?: {
      drawRectangle: () => void;
      drawPolygon: () => void;
      edit: () => void;
      drag: () => void;
      clearAll: () => void;
      save: () => void;
    };
    __leafletMap?: L.Map;
    __activeDrawer?: L.Draw.Polygon | L.Draw.Rectangle | null;
    __drawState?: { hasShape: boolean; shape: GeoJSON.Feature } | null;
  }
}

export default function EditableRectangle() {
  const map = useMap();
  const drawnItemsRef = useRef<FeatureGroup | null>(null);
  const rectDrawerRef = useRef<L.Draw.Rectangle | null>(null);
  const polygonDrawerRef = useRef<L.Draw.Polygon | null>(null);
  const { shapeData } = useShape();

  useEffect(() => {
    if (!map) return;

    const drawnItems = new L.FeatureGroup();
    drawnItemsRef.current = drawnItems;
    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({
      draw: {
        polygon: false,
        rectangle: false,
        polyline: false,
        circle: false,
        marker: false,
        circlemarker: false,
      },
      edit: {
        featureGroup: drawnItems,
        remove: true,
      },
    });

    map.addControl(drawControl);

    map.whenReady(() => {
      try {
        if (!map || !shapeData) return;

        const drawState =
          typeof shapeData === "string" ? JSON.parse(shapeData) : shapeData;

        if (
          drawState &&
          drawState.type === "Feature" &&
          drawState.geometry?.type === "Polygon" &&
          Array.isArray(drawState.geometry.coordinates)
        ) {
          const featureCollection: GeoJSON.FeatureCollection = {
            type: "FeatureCollection",
            features: [drawState],
          };

          const restored = L.geoJSON(featureCollection);

          restored.eachLayer((layer) => drawnItems.addLayer(layer));
        }
      } catch (err) {
        console.error("Error restoring shape:", err);
      }
    });

    polygonDrawerRef.current = new L.Draw.Polygon(map as L.DrawMap, {
      allowIntersection: false,
      showArea: true,
      shapeOptions: {
        color: "#f97316",
        weight: 2,
      },
    });

    rectDrawerRef.current = new L.Draw.Rectangle(map as L.DrawMap, {
      shapeOptions: {
        color: "#0ea5e9",
        weight: 2,
      },
    });

    map.on(
      L.Draw.Event.CREATED,
      function (event: LeafletEvent & { layer: L.Layer }) {
        const layer = event.layer;

        if (
          "dragging" in layer &&
          (layer.dragging as L.Handler | undefined)?.enable
        ) {
          (layer.dragging as L.Handler).enable();
        }

        drawnItems.addLayer(layer);
      }
    );

    map.on(L.Draw.Event.EDITED, (e: L.LeafletEvent) => {
      const editedEvent = e as unknown as L.DrawEvents.Edited;
      editedEvent.layers.eachLayer((layer: L.Layer) => {
        if ("getLatLngs" in layer) {
          console.log(
            "Edited shape:",
            (layer as Polygon | Rectangle).getLatLngs()
          );
        }
      });
    });

    window.__drawTools = {
      drawPolygon: () => {
        if (window.__activeDrawer) {
          window.__activeDrawer.disable();
          window.__activeDrawer = null;
        }

        if (
          drawnItemsRef.current &&
          drawnItemsRef.current.getLayers().length > 0
        ) {
          const confirmed = window.confirm(
            "This will clear existing shapes. Continue?"
          );
          if (!confirmed) return;

          window.__drawState = null;
          drawnItemsRef.current.clearLayers();
        }

        polygonDrawerRef.current?.enable();
        window.__activeDrawer = polygonDrawerRef.current;
      },

      drawRectangle: () => {
        if (window.__activeDrawer) {
          window.__activeDrawer.disable();
          window.__activeDrawer = null;
        }

        if (
          drawnItemsRef.current &&
          drawnItemsRef.current.getLayers().length > 0
        ) {
          const confirmed = window.confirm(
            "This will clear existing shapes. Continue?"
          );
          if (!confirmed) return;

          window.__drawState = null;
          drawnItemsRef.current.clearLayers();
        }

        rectDrawerRef.current?.enable();
        window.__activeDrawer = rectDrawerRef.current;
      },

      save: () => {
        const drawer = window.__activeDrawer;
        if (
          drawer &&
          "_finishShape" in drawer &&
          typeof drawer._finishShape === "function"
        ) {
          drawer._finishShape(); // Finalize unfinished polygon/rectangle
          window.__activeDrawer = null;
          return;
        }

        drawnItems.eachLayer((layer) => {
          if (layer instanceof L.Polygon || layer instanceof L.Rectangle) {
            window.__drawState = {
              hasShape: true,
              shape: layer.toGeoJSON() as GeoJSON.Feature,
            };
          }
        });
      },

      edit: () => {
        new L.EditToolbar.Edit(map as L.DrawMap, {
          featureGroup: drawnItems,
        }).enable();
      },

      drag: () => {
        drawnItems.eachLayer((layer) => {
          if (
            "dragging" in layer &&
            (layer.dragging as L.Handler | undefined)?.enable
          ) {
            (layer.dragging as L.Handler).enable();
          }
        });
      },

      clearAll: () => {
        if (window.__activeDrawer) {
          window.__activeDrawer.disable();
          window.__activeDrawer = null;
        }
        window.__drawState = null;
        drawnItemsRef.current?.clearLayers();
      },
    };

    return () => {
      map.removeControl(drawControl);
      map.removeLayer(drawnItems);
    };
  }, [map, shapeData]);

  return null;
}
