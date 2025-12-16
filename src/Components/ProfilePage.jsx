// import React from "react";
// import { User, Phone, Mail, Shield, LogOut, Edit } from "lucide-react";

// const ProfilePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white pb-24">
//       {/* Header */}
//       <div className="relative bg-linear-to-r from-blue-600 to-blue-800 h-40 rounded-b-3xl flex items-end justify-center">
//         <div className="absolute -bottom-14 bg-gray-800 w-28 h-28 rounded-full flex items-center justify-center border-4 border-gray-900">
//           <User size={48} className="text-blue-400" />
//         </div>
//       </div>

//       {/* Profile Info */}
//       <div className="mt-20 px-6">
//         <h1 className="text-xl font-semibold text-center">John Doe</h1>
//         <p className="text-gray-400 text-center text-sm">Emergency App User</p>

//         {/* Actions */}
//         <div className="flex justify-center gap-4 mt-4">
//           <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition">
//             <Edit size={16} /> Edit Profile
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 transition">
//             <LogOut size={16} /> Logout
//           </button>
//         </div>

//         {/* Details Card */}
//         <div className="mt-8 bg-gray-800 rounded-2xl p-5 space-y-4 shadow-lg">
//           <div className="flex items-center gap-3">
//             <Phone className="text-blue-400" />
//             <span className="text-gray-300">+233 54 000 0000</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <Mail className="text-blue-400" />
//             <span className="text-gray-300">johndoe@email.com</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <Shield className="text-blue-400" />
//             <span className="text-gray-300">Verified User</span>
//           </div>
//         </div>

//         {/* Safety Section */}
//         <div className="mt-8 bg-gray-800 rounded-2xl p-5">
//           <h2 className="font-semibold mb-3">Safety Settings</h2>
//           <ul className="space-y-3 text-gray-300">
//             <li className="flex justify-between">
//               <span>Emergency Contacts</span>
//               <span className="text-blue-400">Manage</span>
//             </li>
//             <li className="flex justify-between">
//               <span>Location Sharing</span>
//               <span className="text-green-400">Enabled</span>
//             </li>
//             <li className="flex justify-between">
//               <span>Panic Mode</span>
//               <span className="text-green-400">Active</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React, { useEffect, useState } from "react";
import {
  User,
  Phone,
  Mail,
  Shield,
  LogOut,
  Edit,
  Save,
  Sun,
  Moon,
  Camera,
} from "lucide-react";

const ProfilePage = () => {
  // =========================
  // PROFILE STATE (Mock backend)
  // =========================
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
    phone: "+233 54 000 0000",
    verified: true,
    photo: null,
  });

  const [isEditing, setIsEditing] = useState(false);

  // Simulate fetching from backend
  useEffect(() => {
    // fetch('/api/profile')
    //   .then(res => res.json())
    //   .then(data => setProfile(data))
  }, []);

  // =========================
  // HANDLERS
  // =========================
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // POST to backend
    // fetch('/api/profile', { method: 'POST', body: JSON.stringify(profile) })
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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white pb-24 transition-colors">
      {/* Header */}
      <div className="relative bg-linear-to-r from-blue-600 to-blue-800 h-40 rounded-b-3xl flex items-end justify-center">
        <div className="absolute -bottom-16">
          <label className="relative cursor-pointer">
            <div className="bg-gray-800 w-32 h-32 rounded-full flex items-center justify-center border-4 border-gray-900 overflow-hidden">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User size={52} className="text-blue-400" />
              )}
            </div>
            <Camera className="absolute bottom-2 right-2 bg-blue-600 p-1 rounded-full" size={22} />
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
            value={profile.name}
            onChange={handleChange}
            className="w-full text-center text-xl font-semibold bg-transparent border-b border-gray-400 focus:outline-none"
          />
        ) : (
          <h1 className="text-xl font-semibold text-center">{profile.name}</h1>
        )}

        <p className="text-gray-400 text-center text-sm">Emergency App User</p>

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
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-5 space-y-4 shadow-lg">
          <div className="flex items-center gap-3">
            <Phone className="text-blue-400" />
            {isEditing ? (
              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="bg-transparent border-b w-full focus:outline-none"
              />
            ) : (
              <span className="text-gray-600 dark:text-gray-300">{profile.phone}</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-blue-400" />
            {isEditing ? (
              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="bg-transparent border-b w-full focus:outline-none"
              />
            ) : (
              <span className="text-gray-600 dark:text-gray-300">{profile.email}</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Shield className="text-blue-400" />
            <span className="text-gray-600 dark:text-gray-300">
              {profile.verified ? "Verified User" : "Unverified"}
            </span>
          </div>
        </div>

        {/* Safety Settings */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-5">
          <h2 className="font-semibold mb-3">Safety Settings</h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex justify-between">
              <span>Emergency Contacts</span>
              <span className="text-blue-500">Manage</span>
            </li>
            <li className="flex justify-between">
              <span>Location Sharing</span>
              <span className="text-green-500">Enabled</span>
            </li>
            <li className="flex justify-between">
              <span>Panic Mode</span>
              <span className="text-green-500">Active</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
