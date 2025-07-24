'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from "next/dynamic";


const EditableRectangle = dynamic(() => import("./EditableRectangle"), {
    ssr: false,
});

export default function MapComponent() {
  return (
    <MapContainer
      center={[37.7749, -122.4194]}
      zoom={13}
      scrollWheelZoom
      className="h-full w-full rounded"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <EditableRectangle />
    </MapContainer>
  );
}