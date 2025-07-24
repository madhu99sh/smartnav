"use client";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function QuoteMapPreview({ shape, onDelete, onView }: { shape: any, onDelete?: () => void, onView?: () => void }) {
  const parsed = typeof shape === "string" ? JSON.parse(shape) : shape;

  // Convert GeoJSON coordinates to Leaflet LatLng format
  const coordinates = parsed?.geometry?.coordinates?.[0]?.map(
    ([lng, lat]: [number, number]) => [lat, lng]
  ) || [];

  return (
    <div className="relative group w-full h-40">
      <MapContainer
        bounds={coordinates}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        zoomControl={false}
        attributionControl={false}
        className="h-40 w-full z-0"
        style={{ pointerEvents: "none", borderRadius: "0.25rem" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {coordinates.length > 0 && <Polygon positions={coordinates} pathOptions={{ color: "#f97316" }} />}
      </MapContainer>
      {(onDelete || onView) && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10">
          {onDelete && (
            <button
              onClick={e => { e.stopPropagation(); onDelete(); }}
              className="mx-1 px-2 py-1 rounded bg-red-500 text-white text-xs font-bold hover:bg-red-600 shadow"
            >
              DELETE
            </button>
          )}
          {onView && (
            <button
              onClick={e => { e.stopPropagation(); onView(); }}
              className="mx-1 px-2 py-1 rounded bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 shadow"
            >
              VIEW
            </button>
          )}
        </div>
      )}
    </div>
  );
}
