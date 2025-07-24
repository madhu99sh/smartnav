// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5fAzYjaU3E0NX1CAop8KXj0unKC-Y27g",
  authDomain: "smart-nav-f12c3.firebaseapp.com",
  projectId: "smart-nav-f12c3",
  storageBucket: "smart-nav-f12c3.firebasestorage.app",
  messagingSenderId: "332693934069",
  appId: "1:332693934069:web:430d1a25e8db5f14655abc",
  measurementId: "G-D6T4ZEQ3GE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth};
