import { useNavigate } from "react-router-dom";
import sepiaImg from "../assets/sepia.png";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-ice flex flex-col">
      <div className="flex-1 flex items-center gap-10 px-16">
        <div className="flex flex-col items-start gap-6">
          <img
            src={sepiaImg}
            alt="Sepia"
            className="w-96 sm:w-[28rem] md:w-[32rem]"
          />
          <button
            onClick={() => navigate("/capture")}
            className="btn-pixel-rose w-[50rem] -ml-40 text-right"
          >
            START
          </button>
        </div>

        <div className="flex-1" />
      </div>

      <p className="text-navy text-center pb-8">made by Heona Liu, Jana Leung, Emma Deeken</p>
    </div>
  );
}
