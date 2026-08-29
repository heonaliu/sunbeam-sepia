import { useNavigate } from "react-router-dom";
import sepiaImg from "../assets/sepia.png";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-ice flex flex-col items-center justify-center gap-6">
      <img
        src={sepiaImg}
        alt="Sepia"
        className="w-64 sm:w-80 md:w-96 mx-auto"
      />
      <button onClick={() => navigate("/capture")} className="btn-pixel-rose">
        START
      </button>
      <p className="text-navy">capture the day, the people, the memories</p>
    </div>
  );
}
