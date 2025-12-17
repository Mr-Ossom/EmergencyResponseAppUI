import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setIsSignedUp }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: send form to backend
    // If successful:
    if (setIsSignedUp) setIsSignedUp(true); // update parent state
    navigate("/home"); // redirect to Home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-80 space-y-4">
        <h1 className="text-xl font-semibold text-center text-gray-900 ">
          Sign Up
        </h1>

        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full p-2 rounded border border-gray-300" required />
        
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 rounded border border-gray-300" required />

        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full p-2 rounded border border-gray-300" required />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
