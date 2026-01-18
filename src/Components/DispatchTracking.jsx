import PoliceMap from "./PoliceMap";

const DispatchTracking = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3">
          Police Dispatch Tracking
        </h2>
        <PoliceMap />
      </div>
    </div>
  );
};

export default DispatchTracking;
