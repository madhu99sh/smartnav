"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../../../../hooks/useAuth";
import useQuotes from "../../../../hooks/quotes";

export type QuoteStatus = "draft" | "pending";

type QuoteData = {
  title: string;
  description: string;
  shape: string;
  status: QuoteStatus;
  createdAt?: string;
};

export default function GetQuoteComponent({
  data,
  quoteId,
}: {
  data?: QuoteData;
  quoteId?: string;
}) {
  const { addOrUpdateQuote } = useQuotes();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [hasShape, setHasShape] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  // Load existing quote data into form
  useEffect(() => {
    if (data) {
      console.log("Preloaded shape:", data);
      setTitle(data.title);
      setDesc(data.description);
      window.__drawState = { shape: JSON.parse(data.shape), hasShape: true };
    } else {
      setTitle("");
      setDesc("");
      window.__drawState = null;
    }
  }, [data]);

  // Polling to check if shape is drawn
  useEffect(() => {
    const interval = setInterval(() => {
      setHasShape(!!window.__drawState?.hasShape);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (status: QuoteStatus) => {
    const shape = window.__drawState?.shape;

    if (!shape || !title.trim()) {
      alert("Please draw a shape and enter a title.");
      return;
    }

    if (!user?.uid) {
      alert("User not authenticated.");
      return;
    }

    try {
      const now = new Date().toISOString();
      await addOrUpdateQuote({
        quote: {
          id: quoteId || "",
          title,
          description: desc,
          shape: JSON.stringify(shape),
          status,
          createdAt: data?.createdAt || now,
          updatedAt: now,
        },
        quoteId,
      });

      alert(
        `Quote ${
          status === "draft" ? "saved as draft" : "submitted"
        } successfully!`
      );

      // Reset form
      setTitle("");
      setDesc("");
      window.__drawState = null;
      router.push("/task-list");
    } catch (err) {
      console.error(err);
      alert("Error saving quote. Try again.");
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{`Create a new Quote ${
        data ? `(${data?.status})` : ""
      }`}</h2>

      <input
        type="text"
        placeholder="Add title"
        className="w-full border-2 border-gray-300 px-3 py-2 rounded mb-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-gray-800 placeholder-gray-500 bg-white"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="w-full border-2 border-gray-300 px-3 py-2 rounded mb-4 resize-none outline-none h-24 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-gray-800 placeholder-gray-500 bg-white"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <div className="flex justify-between gap-2">
        <button
          disabled={!hasShape}
          onClick={() => handleSubmit("draft")}
          className={`flex-1 px-3 py-2 rounded font-bold text-white transition-colors ${
            hasShape
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Draft
        </button>

        <button
          className="flex-1 border-2 border-gray-300 px-3 py-2 rounded font-bold text-gray-700 hover:bg-gray-100 bg-white transition-colors"
          onClick={() => router.push("/task-list")}
        >
          CANCEL
        </button>

        <button
          disabled={!hasShape}
          onClick={() => handleSubmit("pending")}
          className={`flex-1 px-3 py-2 rounded font-bold text-white transition-colors ${
            hasShape
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}
