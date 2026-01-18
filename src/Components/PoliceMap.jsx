import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import { User, Car, Shield } from "lucide-react";

const PoliceMap = () => {
  const [userLocation, setUserLocation] = useState([5.6037, -0.187]);
  const [dispatchLocation, setDispatchLocation] = useState([5.6037, -0.187]);

  const policeStations = [
    { id: 1, name: "Central Police Station", lat: 5.6037, lng: -0.187 },
    { id: 2, name: "East Legon Police Station", lat: 5.638, lng: -0.172 },
    { id: 3, name: "Osu Police Station", lat: 5.556, lng: -0.195 },
  ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = [pos.coords.latitude, pos.coords.longitude];
        setUserLocation(loc);
        setDispatchLocation(loc);
      },
      () => {}
    );
  }, []);

  // Simulate police dispatch movement
  useEffect(() => {
    const interval = setInterval(() => {
      setDispatchLocation((prev) => [prev[0] + 0.0003, prev[1] + 0.0003]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Helper to create a React-based marker icon
  const createIcon = (reactElement, size = 32, color = "#2563eb") => {
    return new L.DivIcon({
      html: ReactDOMServer.renderToString(
        React.cloneElement(reactElement, { size: size, color: color })
      ),
      className: "", // remove default styles
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    });
  };

  return (
    <div className="h-[70vh] w-full rounded-2xl overflow-hidden shadow-lg">
      <MapContainer center={userLocation} zoom={13} className="h-full w-full">
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* User Location */}
        <Marker
          position={userLocation}
          icon={createIcon(<User />, 32, "#10b981")}
        >
          <Popup>You are here</Popup>
        </Marker>

        {/* Police Dispatch */}
        <Marker
          position={dispatchLocation}
          icon={createIcon(`${<Car />}`, 36, "#3b82f6")}
        >
          <Popup>Police Dispatch En Route 🚓</Popup>
        </Marker>

        {/* Police Stations */}
        {policeStations.map((station) => (
          <Marker
            key={station.id}
            position={[station.lat, station.lng]}
            icon={createIcon(`${<Shield />}`, 32, "#ef4444")}
          >
            <Popup>
              <strong>{station.name}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default PoliceMap;
