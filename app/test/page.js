"use client";
import { useEffect } from "react";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function TestPage() {
  useEffect(() => {
    const test = async () => {
      try {
        await addDoc(collection(db, "testCollection"), {
          message: "🔥 Firestore is connected successfully!",
          createdAt: new Date().toISOString(),
        });
        console.log("✅ Firestore write successful!");
      } catch (error) {
        console.error("❌ Firestore test failed:", error);
      }
    };
    test();
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Testing Firebase Connection...</h1>
      <p>Check Firestore → “testCollection” for a new document.</p>
    </main>
  );
}
