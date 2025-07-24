"use client";

import "leaflet-path-transform"; // Enables rotation

import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-draw"; // make sure this is installed
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import 'leaflet-path-drag';
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
        __activeDrawer?: any;
        __drawState?: any
    }
}

export default function EditableRectangle() {
    const map = useMap();
    const drawnItemsRef = useRef<L.FeatureGroup | null>(null);
    const rectDrawerRef = useRef<L.Draw.Rectangle | null>(null);
    const polygonDrawerRef = useRef<L.Draw.Polygon | null>(null);
    const { shapeData,setShapeData } = useShape();
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
                remove: true, // ✅ still allows deleting shapes
            },
        });
        map.addControl(drawControl);

        map.whenReady(() => {
            try {


                if (!map || !shapeData) return;

                const drawState = typeof shapeData === "string" ? JSON.parse(shapeData) : shapeData;


                if (
                    drawState &&
                    drawState.type === "Feature" &&
                    drawState.geometry?.type === "Polygon" &&
                    Array.isArray(drawState.geometry.coordinates)
                ) {
                    const featureCollection = {
                        type: "FeatureCollection",
                        features: [drawState],
                    };

                    const restored = L.geoJSON(featureCollection as any, {
                        onEachFeature: (_, layer) => {
                            if ((layer as any).dragging?.enable) {
                                (layer as any).dragging.enable();
                            }
                        },
                    });
                    

                    restored.eachLayer((layer: any) => drawnItems.addLayer(layer));
                }
            } catch (err) {
                console.error("Error restoring shape:", err);
            }
        });



        // Setup drawers
        polygonDrawerRef.current = new L.Draw.Polygon(map as any, {
            allowIntersection: false,
            showArea: true,
            shapeOptions: {
                color: "#f97316",
                weight: 2,
            },
        });

        rectDrawerRef.current = new L.Draw.Rectangle(map as any, {
            shapeOptions: {
                color: "#0ea5e9", // blue-500
                weight: 2,
            },
        });

        // Handle shape created
        map.on(L.Draw.Event.CREATED, function (event: any) {
            const layer = event.layer;

            // Enable drag on new shapes
            if (layer.dragging) {
                layer.dragging.enable();
            }


            drawnItems.addLayer(layer);
        });

        map.on(L.Draw.Event.EDITED, (e: any) => {
            e.layers.eachLayer((layer: any) => {
                console.log("Edited shape:", layer.getLatLngs());
            });
        });

        // Register global draw tool actions
        window.__drawTools = {
            drawPolygon: () => {
                if (window.__activeDrawer) {
                    window.__activeDrawer.disable();
                    window.__activeDrawer = null;
                }
                // If there are existing shapes, confirm before clearing
                if (drawnItemsRef.current && drawnItemsRef.current.getLayers().length > 0) {
                    const confirmed = window.confirm("This will clear existing shapes. Continue?");
                    if (!confirmed) return;
                    window.__drawState = null
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
                // If there are existing shapes, confirm before clearing
                if (drawnItemsRef.current && drawnItemsRef.current.getLayers().length > 0) {
                    const confirmed = window.confirm("This will clear existing shapes. Continue?");
                    if (!confirmed) return;
                    window.__drawState = null
                    drawnItemsRef.current.clearLayers();
                }
                rectDrawerRef.current?.enable();
                window.__activeDrawer = rectDrawerRef.current;
            },
            save: () => {
                const drawer = window.__activeDrawer;
                if (drawer && drawer._finishShape) {
                    drawer._finishShape(); // Finalize unfinished polygon/rectangle
                    window.__activeDrawer = null;
                    return;
                }

                drawnItems.eachLayer((layer: any) => {
                    if (layer instanceof L.Polygon || layer instanceof L.Rectangle) {
                        window.__drawState = { hasShape: true, shape: layer.toGeoJSON() };
                    }
                });
            },
            edit: () => {
                new L.EditToolbar.Edit(map as any, {
                    featureGroup: drawnItems,
                }).enable();
            },
            drag: () => {
                drawnItems.eachLayer((layer: any) => {
                    if (layer.dragging) {
                        layer.dragging.enable();
                    }
                });
            },
            clearAll: () => {
                if (window.__activeDrawer) {
                    window.__activeDrawer.disable();
                    window.__activeDrawer = null;
                }
                window.__drawState = null
                drawnItemsRef.current?.clearLayers(); // ✅ Clears drawn shapes
            },
        };

        return () => {
            map.removeControl(drawControl);
            map.removeLayer(drawnItems);
        };
    }, [map,shapeData]);

    return null;
}
