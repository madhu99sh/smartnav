// src/app/(dashboard)/layout.tsx
"use client";
import Link from "next/link";
import "@/app/globals.css";
import GetQuoteComponent from "./new-task/components/GetQuoteComponent";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../libs/firebase";
import { ShapeContext, ShapeData } from "./context/ShapeContext";
import useAuth from "../../hooks/useAuth";
import { QuoteData } from "@/hooks/quotes";
import { QuoteStatus } from "./new-task/components/GetQuoteComponent";

// Separate component that uses useSearchParams
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
    if (!quoteId) {
      setFormData(null);
      setLoading(false);
      return;
    }

    const fetchQuote = async () => {
      if (!user) return;
      try {
        const quoteRef = doc(db, "users", user.uid, "quotes", quoteId);
        const docSnap = await getDoc(quoteRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data) {
            const quoteData: QuoteData = {
              id: quoteId,
              shape: data.shape,
              title: data.title,
              description: data.description,
              status: data.status,
              createdAt: data.createdAt,
              updatedAt: data.updatedAt ?? "",
              ...data,
            };
            setFormData(quoteData);
            setShapeData(quoteData.shape);
          }
        }
      } catch (err) {
        console.error("Error loading quote:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [quoteId, user]); // ✅ Added 'user' to dependency array

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
          {isNewTask && (
            <GetQuoteComponent
              data={
                formData
                  ? {
                      ...formData,
                      status: formData.status as QuoteStatus,
                    }
                  : undefined
              }
              quoteId={quoteId ?? undefined}
            />
          )}
        </div>
      </aside>
      <main className="flex-1 flex flex-col bg-gray-100 overflow-hidden">
        {!loading && (
          <ShapeContext.Provider value={{ shapeData, setShapeData }}>
            {children}
          </ShapeContext.Provider>
        )}
      </main>
    </div>
  );
}

// Loading fallback component
function DashboardLoading() {
  return (
    <div className="flex h-screen">
      <aside className="hidden lg:flex w-80 p-4 border-r bg-white">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col bg-gray-100">
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
        </div>
      </main>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardContent>{children}</DashboardContent>
    </Suspense>
  );
}
