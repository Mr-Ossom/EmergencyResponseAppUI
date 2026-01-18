import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopNavBack = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full z-10 h-14 fixed flex items-center gap-3 px-4 bg-white shadow-sm">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="p-2 flex space-x-2 rounded-full hover:bg-gray-100"
        aria-label="Go back"
      >
        <ArrowLeft size={22} /> Back
      </button>

      {/* Page Title */}
      <h1 className="text-lg font-semibold text-gray-900">
        {title}
      </h1>
    </div>
  );
};

export default TopNavBack;