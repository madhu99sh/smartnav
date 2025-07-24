"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import HomePage from "../components/Home";

import { useState } from "react";
import Image from "next/image";
import smartNavIcon from "../../public/images/smartNavIcon.png"; // Save your drone image here
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
