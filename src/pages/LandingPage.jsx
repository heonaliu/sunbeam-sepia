import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl text-sand text-center leading-relaxed">
        SEPIA
      </h1>
      <button onClick={() => navigate("/capture")} className="btn-pixel-rose">
        START
      </button>
      <p className="text-sand">capture the day, the people, the memories</p>
    </div>
  );
}
