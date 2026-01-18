import React from 'react'
import Home from './Components/Home'
import PolicePage from './Components/PolicePage'
import { HashRouter, Route, Routes } from 'react-router-dom'
import AmbulancePage from './Components/AmbulancePage'
import FireFightersPage from './Components/FireFightersPage'
import RelativePage from './Components/RelativePage'
import Contacts from './Components/Contacts'
import TipsPage from './Components/TipsPage'
import ProfilePage from './Components/ProfilePage'
import SignUp from './Components/SignUp'
import "./leafletFix";
import DispatchTracking from './Components/DispatchTracking'

const App = () => {
  const [isSignedUp, setIsSignedUp] = React.useState(false);
  
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={isSignedUp ? <Navigate to="/home" /> : <SignUp setIsSignedUp={setIsSignedUp} />} />
      <Route path='/home' element={<Home />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/tips' element={<TipsPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/police' element={<PolicePage />} />
      <Route path='/ambulance' element={<AmbulancePage />} />
      <Route path='/firefighters' element={<FireFightersPage />} />
      <Route path='/relative' element={<RelativePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dispatch-tracking" element={<DispatchTracking />} />
    </Routes>
      
    </HashRouter>
  );
}

export default App


// import React from "react";
// import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
// import SignUp from "./Components/SignUp";
// import Home from "./Components/Home";
// import PolicePage from "./Components/PolicePage";
// import AmbulancePage from "./Components/AmbulancePage";
// import FireFightersPage from "./Components/FireFightersPage";
// import RelativePage from "./Components/RelativePage";
// import Contacts from "./Components/Contacts";
// import TipsPage from "./Components/TipsPage";
// import ProfilePage from "./Components/ProfilePage";

// const App = () => {
//   // ✅ Initialize signed-up state from localStorage
//   const [isSignedUp, setIsSignedUp] = React.useState(
//     localStorage.getItem("isSignedUp") === "true"
//   );

//   // ✅ Function to handle signup and save to localStorage
//   const handleSignUp = () => {
//     localStorage.setItem("isSignedUp", "true");
//     setIsSignedUp(true);
//   };

//   return (
//     <HashRouter>
//       <Routes>
//         {/* Root route: redirect to home if signed up, otherwise show signup */}
//         <Route
//           path="/"
//           element={
//             isSignedUp ? <Navigate to="/home" replace /> : <SignUp setIsSignedUp={handleSignUp} />
//           }
//         />

//         {/* SignUp page route */}
//         <Route
//           path="/signup"
//           element={<SignUp setIsSignedUp={handleSignUp} />}
//         />

//         {/* Protected routes: only accessible if signed up */}
//         <Route
//           path="/home"
//           element={isSignedUp ? <Home /> : <Navigate to="/signup" replace />}
//         />
//         <Route
//           path="/contacts"
//           element={isSignedUp ? <Contacts /> : <Navigate to="/signup" replace />}
//         />
//         <Route
//           path="/tips"
//           element={isSignedUp ? <TipsPage /> : <Navigate to="/signup" replace />}
//         />
//         <Route
//           path="/profile"
//           element={isSignedUp ? <ProfilePage /> : <Navigate to="/signup" replace />}
//         />
//         <Route
//           path="/police"
//           element={isSignedUp ? <PolicePage /> : <Navigate to="/signup" replace />}
//         />
//         <Route
//           path="/ambulance"
//           element={isSignedUp ? <AmbulancePage /> : <Navigate to="/signup" replace />}
//         />
//         <Route
//           path="/firefighters"
//           element={isSignedUp ? <FireFightersPage /> : <Navigate to="/signup" replace />}
//         />
//         <Route
//           path="/relative"
//           element={isSignedUp ? <RelativePage /> : <Navigate to="/signup" replace />}
//         />
//       </Routes>
//     </HashRouter>
//   );
// };

// export default App;


// import React from "react";
// import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
// import SignUp from "./Components/SignUp";
// import Home from "./Components/Home";
// import ProfilePage from "./Components/ProfilePage";

// const App = () => {
//   const [isSignedUp, setIsSignedUp] = React.useState(false);

//   const handleSignUp = () => setIsSignedUp(true);

//   return (
//     <HashRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={isSignedUp ? <Navigate to="/home" /> : <SignUp setIsSignedUp={handleSignUp} />}
//         />
//         <Route path="/home" element={isSignedUp ? <Home /> : <Navigate to="/" />} />
//         <Route path="/profile" element={isSignedUp ? <ProfilePage /> : <Navigate to="/" />} />
//       </Routes>
//     </HashRouter>
//   );
// };

// export default App;


// import React from "react";
// import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
// import SignUp from "./Components/SignUp";
// import Home from "./Components/Home";
// import ProfilePage from "./Components/ProfilePage";
// import PolicePage from "./Components/PolicePage";
// import AmbulancePage from "./Components/AmbulancePage";
// import FireFightersPage from "./Components/FireFightersPage";
// import RelativePage from "./Components/RelativePage";
// import Contacts from "./Components/Contacts";
// import TipsPage from "./Components/TipsPage";

// const App = () => {
//   const [isSignedUp, setIsSignedUp] = React.useState(
//     localStorage.getItem("isSignedUp") === "true"
//   );

//   const handleSignUp = () => {
//     localStorage.setItem("isSignedUp", "true");
//     setIsSignedUp(true);
//   };

//   return (
//     <HashRouter>
//       <Routes>
//         {/* SignUp Page */}
//         <Route
//           path="/"
//           element={
//             isSignedUp ? <Navigate to="/home" replace /> : <SignUp setIsSignedUp={handleSignUp} />
//           }
//         />
//         <Route path="/signup" element={<SignUp setIsSignedUp={handleSignUp} />} />

//         {/* Protected Pages */}
//         <Route path="/home" element={isSignedUp ? <Home /> : <Navigate to="/" replace />} />
//         <Route path="/profile" element={isSignedUp ? <ProfilePage /> : <Navigate to="/" replace />} />
//         <Route path="/police" element={isSignedUp ? <PolicePage /> : <Navigate to="/" replace />} />
//         <Route path="/ambulance" element={isSignedUp ? <AmbulancePage /> : <Navigate to="/" replace />} />
//         <Route path="/firefighters" element={isSignedUp ? <FireFightersPage /> : <Navigate to="/" replace />} />
//         <Route path="/relative" element={isSignedUp ? <RelativePage /> : <Navigate to="/" replace />} />
//         <Route path="/contacts" element={isSignedUp ? <Contacts /> : <Navigate to="/" replace />} />
//         <Route path="/tips" element={isSignedUp ? <TipsPage /> : <Navigate to="/" replace />} />
//       </Routes>
//     </HashRouter>
//   );
// };

// export default App;

// import React from "react";
// import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
// import SignUp from "./Components/SignUp";
// import Home from "./Components/Home";
// import ProfilePage from "./Components/ProfilePage";
// import PolicePage from "./Components/PolicePage";
// import AmbulancePage from "./Components/AmbulancePage";
// import FireFightersPage from "./Components/FireFightersPage";
// import RelativePage from "./Components/RelativePage";
// import Contacts from "./Components/Contacts";
// import TipsPage from "./Components/TipsPage";

// const App = () => {
//   // ✅ Persisted signup state
//   const [isSignedUp, setIsSignedUp] = React.useState(
//     localStorage.getItem("isSignedUp") === "true"
//   );

//   // ✅ Function to update state and persist
//   const handleSignUp = () => {
//     localStorage.setItem("isSignedUp", "true");
//     setIsSignedUp(true);
//   };

//   return (
//     <HashRouter>
//       <Routes>
//         {/* Root */}
//         <Route
//           path="/"
//           element={
//             isSignedUp ? <Navigate to="/home" replace /> : <SignUp setIsSignedUp={handleSignUp} />
//           }
//         />

//         {/* Protected pages */}
//         <Route path="/home" element={isSignedUp ? <Home /> : <Navigate to="/" replace />} />
//         <Route path="/profile" element={isSignedUp ? <ProfilePage /> : <Navigate to="/" replace />} />
//         <Route path="/police" element={isSignedUp ? <PolicePage /> : <Navigate to="/" replace />} />
//         <Route path="/ambulance" element={isSignedUp ? <AmbulancePage /> : <Navigate to="/" replace />} />
//         <Route path="/firefighters" element={isSignedUp ? <FireFightersPage /> : <Navigate to="/" replace />} />
//         <Route path="/relative" element={isSignedUp ? <RelativePage /> : <Navigate to="/" replace />} />
//         <Route path="/contacts" element={isSignedUp ? <Contacts /> : <Navigate to="/" replace />} />
//         <Route path="/tips" element={isSignedUp ? <TipsPage /> : <Navigate to="/" replace />} />

//         {/* Optional fallback */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </HashRouter>
//   );
// };

// export default App;

