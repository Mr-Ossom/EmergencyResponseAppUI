import React, { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Shield,
  LogOut,
  Edit,
  Save,
  Camera,
} from "lucide-react";
import BottomNav from "./NavBar/BottomNav";
import { useUserStore } from "../Store/userStore";
import TopNavBack from "./NavBar/TopNavBack";

const ProfilePage = () => {
  const user = useUserStore((state) => state.user);

  const [profile, setProfile] = useState({
    phone: "+233 54 000 0000",
    photo: null,
    verified: true,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 pb-24 transition-colors">
      <TopNavBack />
      {/* Header */}
      <div className="relative  bg-linear-to-r from-blue-500 to-blue-700 h-60 rounded-b-3xl flex items-end justify-center">
        <div className="absolute -bottom-16">
          <label className="relative cursor-pointer">
            <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center border-4 border-white overflow-hidden shadow-lg">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User size={52} className="text-blue-500" />
              )}
            </div>
            <Camera
              className="absolute bottom-2 right-2 bg-blue-600 text-white p-1 rounded-full"
              size={22}
            />
            <input type="file" className="hidden" onChange={handlePhotoUpload} />
          </label>
        </div>
      </div>

      {/* Content */}
      <div className="mt-24 px-6">
        {/* Name */}
        {isEditing ? (
          <input
            name="name"
            value={user.name}
            disabled
            className="w-full text-center text-xl font-semibold bg-transparent border-b border-gray-300 focus:outline-none"
          />
        ) : (
          <h1 className="text-xl font-semibold text-center">{user.name}</h1>
        )}

        <p className="text-gray-500 text-center text-sm">Emergency App User</p>

        {/* Actions */}
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white"
            >
              <Edit size={16} /> Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 transition text-white"
            >
              <Save size={16} /> Save
            </button>
          )}

          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 transition text-white">
            <LogOut size={16} /> Logout
          </button>
        </div>

        {/* Details */}
        <div className="mt-8 bg-white rounded-2xl p-5 space-y-4 shadow-lg">
          <div className="flex items-center gap-3">
            <Phone className="text-blue-500" />
            {isEditing ? (
              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-300 w-full focus:outline-none"
              />
            ) : (
              <span className="text-gray-700">{profile.phone}</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-blue-500" />
            <span className="text-gray-700">{user.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <Shield className="text-blue-500" />
            <span className="text-gray-700">
              {profile.verified ? "Verified User" : "Unverified"}
            </span>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default ProfilePage;
