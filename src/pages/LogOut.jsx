// src/components/Logout.jsx
import React from "react";
import { useAuth } from "../AuthContext";

export default function Logout() {
  const { logOut } = useAuth();

  async function handleLogout() {
    try {
      await logOut();
      alert("Logged out!");
    } catch (err) {
      alert(err.message);
    }
  }

  return <button onClick={handleLogout}>Log Out</button>;
}
