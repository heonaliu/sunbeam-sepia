import { useNavigate } from "react-router-dom";
import sepiaImg from "../assets/sepia.png";
import mainImg from "../assets/Main.PNG";
import teamStrip from "../team-strip.png";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-ice flex flex-col">
      <div className="flex-1 flex flex-col sm:flex-row items-center gap-10 px-6 sm:px-16">
        <div className="flex flex-col items-center sm:items-start gap-6 w-full sm:w-auto">
          <div className="relative">
            <img
              src={sepiaImg}
              alt="Sepia"
              className="w-[clamp(18rem,50vw,44rem)]"
            />
            <img
              src={mainImg}
              alt=""
              className="sm:hidden absolute -top-3 -right-3 w-16"
            />
          </div>
          <button
            onClick={() => navigate("/capture")}
            className="btn-pixel-rose w-48 sm:w-[clamp(20rem,60vw,50rem)] sm:-ml-40 text-center sm:text-right text-lg sm:text-2xl"
          >
            START
          </button>
        </div>

        <div className="hidden sm:flex flex-1 items-center justify-center">
          <img
            src={mainImg}
            alt="Main"
            className="w-[clamp(16rem,55vw,52rem)]"
          />
        </div>
      </div>

      <p className="text-navy text-center pb-8">made by Heona Liu, Jana Leung, Emma Deeken</p>

      <img
        src={teamStrip}
        alt=""
        className="fixed -bottom-20 left-4 w-28 sm:w-40 rotate-[-15deg] pointer-events-none select-none shadow-pixel"
      />
    </div>
  );
}
