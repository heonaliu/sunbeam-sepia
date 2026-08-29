import { useNavigate } from "react-router-dom";
import sepiaImg from "../assets/sepia.png";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-ice flex flex-col">
      <div className="flex-1 flex flex-col sm:flex-row items-center gap-10 px-6 sm:px-16">
        <div className="flex flex-col items-center sm:items-start gap-6 w-full sm:w-auto">
          <img
            src={sepiaImg}
            alt="Sepia"
            className="w-[clamp(14rem,35vw,32rem)]"
          />
          <button
            onClick={() => navigate("/capture")}
            className="btn-pixel-rose w-48 sm:w-[clamp(20rem,60vw,50rem)] sm:-ml-40 text-center sm:text-right text-lg sm:text-2xl"
          >
            START
          </button>
        </div>

        <div className="hidden sm:block flex-1" />
      </div>

      <p className="text-navy text-center pb-8">made by Heona Liu, Jana Leung, Emma Deeken</p>
    </div>
  );
}
