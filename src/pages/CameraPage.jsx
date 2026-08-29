import React, { useEffect } from "react";
import { useCamera } from "../hooks/useCamera";
import { useNavigate } from "react-router-dom";

export default function CameraPage() {
  const navigate = useNavigate();
  const { videoRef, photos, error, isReady, countdown, boothStarted, setBoothStarted, takePhoto, retake } = useCamera();


  useEffect(() => {
    if (boothStarted && isReady) {
      takePhoto();
    }
  }, [boothStarted, isReady]);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Photobooth</h1>
      
      <button onClick={() => setBoothStarted(true)} className="px-6 py-3 bg-black text-white rounded-lg" hidden={boothStarted}>
        Start Booth
      </button>

      <button onClick={() => navigate("/edit")} className="px-6 py-3 bg-black text-white rounded-lg" hidden={photos.length !== 3}>
        Customize
      </button>

      <button onClick={() => retake()} className="px-6 py-3 bg-black text-white rounded-lg" hidden={photos.length == 3 || !boothStarted}>
        Retake
      </button>

      <button onClick={() => takePhoto()} className="px-6 py-3 bg-black text-white rounded-lg" hidden={photos.length == 3 || !boothStarted}>
        Continue
      </button>


      {countdown > 0 ? (
        <div className="text-3xl font-bold text-gray-700">{countdown}</div>
      ) : null}

      {error ? <p className="text-red-500">{error}</p> : null}

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-[320px] rounded-lg bg-black"
      />

      <div className="flex gap-2">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Capture ${index + 1}`}
            className="w-20 h-20 object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
}
