import React from "react";
import { House, Users, Lightbulb, CircleUser } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navClass = (path) =>
    `flex flex-col items-center transition ${
      isActive(path) ? "text-blue-500" : "text-white"
    }`;

  return (
    <section className="w-screen fixed bottom-0 h-16 px-4 bg-gray-800 flex justify-around items-center">
      
      <button onClick={() => navigate("/home")} className={navClass("/")}>
        <House />
        <p className="text-xs">Home</p>
      </button>

      <button onClick={() => navigate("/contacts")} className={navClass("/contacts")}>
        <Users />
        <p className="text-xs">Contacts</p>
      </button>

      <button onClick={() => navigate("/tips")} className={navClass("/tips")}>
        <Lightbulb />
        <p className="text-xs">Safety Tips</p>
      </button>

      <button onClick={() => navigate("/profile")} className={navClass("/profile")}>
        <CircleUser />
        <p className="text-xs">Profile</p>
      </button>

    </section>
  );
};

export default BottomNav;
