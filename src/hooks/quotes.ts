import { useEffect, useState } from "react";
import {
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    setDoc,
    deleteDoc,
    query,
    where,
    onSnapshot,
} from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";
import { db, auth } from "../libs/firebase"; // adjust path to your Firebase setup

export default function useQuotes() {
    const [user, setUser] = useState<User | null>(null);
    const [quotes, setQuotes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
        });
        return () => unsubscribe();
    }, []);


    // 🔁 Realtime fetch all quotes for current user
    useEffect(() => {
        const fetchQuotes = async () => {
            if (!user) return;

            try {
                const quotesRef = collection(db, "users", user.uid, "quotes");
                const snapshot = await getDocs(quotesRef);

                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setQuotes(data);
            } catch (err) {
                console.error("Error fetching quotes:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchQuotes();
    }, [user]);


    const addOrUpdateQuote = async ({
        quote,
        quoteId,
    }: {
        quote: any;
        quoteId?: string;
    }) => {
        if (!user) throw new Error("User not logged in");
        const userQuotesRef = collection(db, "users", user.uid, "quotes");

        const data = {
            ...quote,
            [quoteId ? "updatedAt" : "createdAt"]: new Date().toISOString(),
        };

        if (quoteId) {
            const quoteRef = doc(userQuotesRef, quoteId);
            await setDoc(quoteRef, data, { merge: true });
        } else {
            await addDoc(userQuotesRef, data);
        }

    };

    const deleteQuote = async (quoteId: string) => {
        if (!user) throw new Error("User ID is required");

        const quoteRef = doc(db, "users", user?.uid, "quotes", quoteId);
        await deleteDoc(quoteRef);
    };

    const fetchQuoteById = async (quoteId: string) => {
        if (!user) throw new Error("User ID is required");

        const quoteRef = doc(db, "users", user.uid, "quotes", quoteId);
        const snapshot = await getDoc(quoteRef); // ✅ await here
        if (snapshot.exists()) {
            return { id: snapshot.id, ...snapshot.data() };
        } else {
            throw new Error("Quote not found");
        }
    };

    return {
        user,
        quotes,
        setQuotes,
        loading,
        addOrUpdateQuote,
        deleteQuote,
        fetchQuoteById,
    };
}
