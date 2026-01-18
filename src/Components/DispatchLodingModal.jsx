import React from "react";

const DispatchLoadingModal = () => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-72 text-center shadow-xl">
        <div className="w-10 h-10 mx-auto mb-4 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <h2 className="text-lg font-semibold">Connecting to Dispatch</h2>
        <p className="text-sm text-gray-500 mt-2">
          Tracking police unit nearby...
        </p>
      </div>
    </div>
  );
};

export default DispatchLoadingModal;
