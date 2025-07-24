"use client";

import Link from "next/link";
import "@/app/globals.css";
import GetQuoteComponent from "./new-task/components/GetQuoteComponent";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../libs/firebase";
import { ShapeContext } from "./context/ShapeContext";
import useAuth from "../../hooks/useAuth";

// Import QuoteStatus type and use it in QuoteData
import type { QuoteStatus } from "./new-task/components/GetQuoteComponent";
export type QuoteData = {
  id: string;
  shape: string;
  title: string;
  description: string;
  status: QuoteStatus;
  // Add other fields as needed
};
import type { ShapeData } from "./context/ShapeContext";

// Create a separate component for the search params logic
function DashboardContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const quoteId = searchParams.get("id");
  const isNewTask = pathname.includes("/new-task");
  const [formData, setFormData] = useState<QuoteData | null>(null);
  const [shapeData, setShapeData] = useState<ShapeData | null>(null);
  const [loading, setLoading] = useState<boolean>(!!quoteId);

  const { user } = useAuth();

  useEffect(() => {
    if (!quoteId || !user) {
      setFormData(null);
      setShapeData(null);
      setLoading(false);
      return;
    }

    const fetchQuote = async () => {
      try {
        const quoteRef = doc(db, "users", user.uid, "quotes", quoteId);
        const docSnap = await getDoc(quoteRef);
        if (docSnap.exists()) {
          const data = docSnap.data() as QuoteData;
          setFormData(data);
          setShapeData(JSON.parse(data.shape));
        } else {
          console.warn("No quote found for id:", quoteId);
        }
      } catch (err) {
        console.error("Error loading quote:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [quoteId, user]);

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

        <div className="mt-4">
          {isNewTask && (
            <GetQuoteComponent
              data={formData ?? undefined}
              quoteId={quoteId ?? undefined}
            />
          )}
        </div>
      </aside>

      {!loading && shapeData !== null && (
        <ShapeContext.Provider value={{ shapeData, setShapeData }}>
          {children}
        </ShapeContext.Provider>
      )}
    </div>
  );
}

// Main layout component with Suspense wrapper
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <DashboardContent>{children}</DashboardContent>
    </Suspense>
  );
}
