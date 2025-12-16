import React from "react";
import { useNavigate } from "react-router-dom";

const TopNav = ({ pageName }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white flex items-center px-4 h-16 shadow-md z-50">
      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)} // go back
        className="text-white text-2xl mr-4 active:scale-90 transition"
      >
        ←
      </button>

      {/* Page Name */}
      <h1 className="text-lg font-semibold">{pageName}</h1>
    </nav>
  );
};

export default TopNav;
