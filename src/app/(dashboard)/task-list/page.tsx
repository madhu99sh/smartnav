"use client";
import { useRouter } from "next/navigation";
import useAuth from "../../../hooks/useAuth";

import dynamic from "next/dynamic";
import useQuotes from "../../../hooks/quotes";

const QuoteMapPreview = dynamic(() => import("./comonents/QuoteMapPreview"), {
  ssr: false,
});

export default function MyQuotesPage() {
  const { quotes, setQuotes, deleteQuote } = useQuotes();
  // const [quotes, setQuotes] = useState<any[]>([]);
  const { user } = useAuth();

  const router = useRouter();

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this quote?"
    );
    if (!confirmed) return;
    try {
      await deleteQuote(id);
      setQuotes((prev) => prev.filter((q) => q.id !== id)); // ✅ Local update
    } catch (err) {
      console.error(err);
      alert("Error deleting quote. Try again.");
    }
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl text-black font-semibold">
            Hi {user?.displayName}
          </h2>
          <p className="text-gray-600">Please find your quotes below</p>
        </div>
        <button
          onClick={() => router.push("/new-task")}
          className="bg-orange-500 text-white font-bold px-4 py-2 rounded hover:bg-orange-60cre0"
        >
          + New Task
        </button>
      </div>

      {quotes.length === 0 ? (
        <div className="flex flex-1 items-center justify-center text-gray-500 text-lg font-semibold h-64">
          No quotes found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((quote) => (
            <div
              key={quote.id}
              className="bg-white rounded shadow border overflow-hidden"
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{quote.title}</h3>
                  {quote.status && (
                    <span
                      className={`text-sm font-medium ${
                        quote.status === "draft"
                          ? "text-gray-500"
                          : quote.status === "pending"
                          ? "text-orange-600"
                          : "text-green-600"
                      }`}
                    >
                      {quote.status === "pending"
                        ? "Quote Requested"
                        : quote.status}
                    </span>
                  )}
                </div>
                <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-gray-600">
                  <QuoteMapPreview
                    shape={quote.shape}
                    onDelete={() => handleDelete(quote.id)}
                    onView={() => router.push(`/new-task?id=${quote.id}`)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
