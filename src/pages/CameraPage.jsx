import React, { useEffect } from "react";
import { useCamera } from "../hooks/useCamera";
import { useNavigate } from "react-router-dom";

export default function CameraPage() {
  const navigate = useNavigate();
  const { videoRef, photos, error, isReady, countdown, boothStarted, setBoothStarted, moveOn, setMoveOn, takeThreePhotos } = useCamera();


  useEffect(() => {
    if (boothStarted && isReady) {
      takeThreePhotos();
    }
  }, [boothStarted, isReady]);

  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl text-sand text-center leading-relaxed">SEPIA</h1>

      <button onClick={() => setBoothStarted(true)} className="btn-pixel-rose" hidden={boothStarted}>
        START
      </button>

      <button onClick={() => navigate("/edit")} className="btn-pixel-blue" hidden={!moveOn}>
        CUSTOMIZE
      </button>


      {countdown > 0 ? (
        <div className="text-3xl font-pixel text-sand">{countdown}</div>
      ) : null}

      {error ? <p className="font-pixel text-sm text-rose">{error}</p> : null}

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-[320px] frame-pixel"
      />

      <div className="flex gap-2">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Capture ${index + 1}`}
            className="w-20 h-20 object-cover frame-pixel"
          />
        ))}
      </div>
    </div>
  );
}
