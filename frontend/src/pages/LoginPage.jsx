import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';


const LoginPage = () => {
 const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch("https://painter-website-1.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } else {
      alert("Invalid password");
    }
  };

  return (
    <>
  
    <div className="max-w-sm mx-auto mt-32 p-6 shadow-lg border rounded">
      <h1 className="text-xl font-bold mb-4">Admin Login</h1>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border mb-4 rounded"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Login
      </button>
    </div>
    <Footer/>
    </>
  );
}

export default LoginPage