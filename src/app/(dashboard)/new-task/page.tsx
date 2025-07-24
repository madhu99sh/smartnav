"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import dynamic from "next/dynamic";
import { BiSearch } from "react-icons/bi";
import useAuth from "../../../hooks/useAuth";
import {
  FaSquare,
  FaTrash,
  FaTimes,
  FaDrawPolygon,
  FaSave,
} from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import { useShape } from "../context/ShapeContext";

const MapComponent = dynamic(() => import("./components/MapComponent"), {
  ssr: false,
});

export default function NewTaskPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useAuth();
  const { setShapeData } = useShape();

  const handleClose = () => {
    setShapeData(null); // ✅ Clear it before routing
    router.push("/task-list");
  };

  const handleSearch = async () => {
    console.log("handleSearch");
    if (!searchQuery) return;

    console.log(`handleSearch=${searchQuery}`);
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        searchQuery
      )}`
    );
    const results = await response.json();

    console.log(`results=${results}`);
    if (results?.length > 0) {
      const { lat, lon } = results[0];
      window.__leafletMap?.setView([parseFloat(lat), parseFloat(lon)], 14); // ✅ Move map
    } else {
      alert("Location not found.");
    }
  };

  return (
    <>
      {/* Top right Close button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => handleClose()}
          className="text-gray-500 hover:text-red-600 text-xl"
        >
          <FaTimes />
        </button>
      </div>

      {/* Page layout */}
      <div className="p-6 flex flex-col flex-1 h-[calc(100vh-64px)]">
        <h2 className="text-2xl font-semibold">Hi {user?.displayName}</h2>
        <p className="text-gray-600 mb-4">
          Please continue by selecting{" "}
          <span className="font-bold">an area</span> on map
        </p>

        {/* Search + Toolbar */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="flex items-center border rounded px-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="p-2 outline-none w-40 sm:w-60"
            />
            <button onClick={handleSearch}>
              <BiSearch className="text-xl text-gray-500" />
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => window.__drawTools?.drawRectangle()}
              className="p-2 border rounded hover:bg-gray-200"
            >
              <FaSquare />
            </button>
            <button
              onClick={() => window.__drawTools?.drawPolygon()}
              className="p-2 border rounded hover:bg-gray-200"
            >
              <FaDrawPolygon />
            </button>
            <button
              onClick={() => window.__drawTools?.save()}
              className="p-2 border rounded hover:bg-gray-200"
            >
              <FaSave />
            </button>
            {/* <button  onClick={() => window.__drawTools?.drag()} className="p-2 border rounded hover:bg-gray-200">
              <FaMousePointer/>
            </button> */}
            {/* <button onClick={() => window.__drawTools?.edit()}  className="p-2 border rounded hover:bg-gray-200">
              <FaEdit />
            </button> */}
            <button
              onClick={() => window.__drawTools?.clearAll()}
              className="p-2 border rounded hover:bg-gray-200"
            >
              <FaTrash />
            </button>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="flex-1 border-t overflow-hidden shadow-lg rounded">
          <MapComponent />
        </div>
      </div>
    </>
  );
}
