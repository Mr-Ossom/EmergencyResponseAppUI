import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signup from "../Images/signup.jpg";
import { useUserStore } from "../Store/userStore";

const SignUp = ({ setIsSignedUp }) => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user info in global store
    setUser({ name: form.name, email: form.email });

    // Mark as signed up
    setIsSignedUp();

    // Navigate to Home
    navigate("/home", { replace: true });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${signup})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <h1 className="text-3xl font-bold text-white mb-7">Welcome To QuickResQ</h1>
    
      <form
        onSubmit={handleSubmit}
        className="bg-black/50 p-6 rounded-xl shadow-lg w-80 space-y-4"
      >
        <h1 className="text-3xl text-white text-center font-semibold">Sign Up</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 rounded border border-white placeholder:text-gray-200"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 rounded border border-white placeholder:text-gray-200"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 rounded border border-white placeholder:text-gray-200"
          required
        />

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded text-lg"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
