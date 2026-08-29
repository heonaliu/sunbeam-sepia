import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl text-sand text-center leading-relaxed">
        PIXEL
        <br />
        PHOTOBOOTH
      </h1>
      <button onClick={() => navigate("/capture")} className="btn-pixel-rose">
        START
      </button>
    </div>
  );
}
