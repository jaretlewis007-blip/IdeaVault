"use client";
import { useState } from "react";
import { registerUser, loginUser, logoutUser } from "../../firebase/auth";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🔐 IdeaVault Auth Test</h1>

      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => registerUser(email, password)}>Register</button>
        <button onClick={() => loginUser(email, password)}>Login</button>
        <button onClick={() => logoutUser()}>Logout</button>
      </div>
    </main>
  );
}
