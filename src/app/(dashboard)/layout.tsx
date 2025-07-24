// src/app/(dashboard)/layout.tsx
"use client";

import Link from "next/link";
import "@/app/globals.css";
import GetQuoteComponent from "./new-task/components/GetQuoteComponent";
import { usePathname, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../libs/firebase";
import { ShapeContext } from "./context/ShapeContext";
import useAuth from "../../hooks/useAuth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // ✅ current route
  const searchParams = useSearchParams();
  const quoteId = searchParams.get("id");
  const isNewTask = pathname.includes("/new-task");
  const [formData, setFormData] = useState<any | null>(null);
  const [shapeData, setShapeData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(!!quoteId); // true if quoteId exists

  const { user } = useAuth();
  useEffect(() => {
    if (!quoteId) {
      setFormData(null);
      return;
    }

    const fetchQuote = async () => {
      if (!user) return;
      try {
        const quoteRef = doc(db, "users", user.uid, "quotes", quoteId);
        const docSnap = await getDoc(quoteRef);
        if (docSnap.exists()) {
          const data: any = docSnap.data();
          setFormData(data);
          setShapeData(data.shape); // ✅ store for GetQuoteComponent
        }
      } catch (err) {
        console.error("Error loading quote:", err);
      } finally {
        setLoading(false); // ✅ ready to render children
      }
    };

    fetchQuote();
  }, [quoteId]);

  const linkClasses = (isActive: boolean) =>
    `flex items-center gap-2 font-semibold px-4 py-2 mb-2 rounded 
     ${
       isActive
         ? "bg-orange-100 text-orange-600"
         : "text-gray-700 hover:bg-gray-100"
     }`;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-80 p-4 border-r bg-white flex-col justify-between h-screen">
        {/* Top navigation */}
        <div>
          <Link href="/" className={linkClasses(pathname === "/")}>
            Dashboard
          </Link>
          <Link
            href="/task-list"
            className={linkClasses(pathname === "/task-list")}
          >
            My Quotes
          </Link>
        </div>

        {/* Bottom only on /new-task */}
        <div className="mt-4">
          {isNewTask && <GetQuoteComponent data={formData} quoteId={quoteId} />}
        </div>
      </aside>

      <main className="flex-1 flex flex-col bg-gray-100 overflow-hidden">
        {!loading && (
          <ShapeContext.Provider value={{ shapeData, setShapeData }}>
            {!loading ? children : null}
          </ShapeContext.Provider>
        )}
      </main>
    </div>
  );
}
