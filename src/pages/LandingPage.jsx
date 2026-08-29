
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Photobooth</h1>
      <button
        onClick={() => navigate("/capture")}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        Start
      </button>
    </div>
  );
}