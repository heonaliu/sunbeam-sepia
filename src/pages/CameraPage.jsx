import React, { useEffect } from "react";
import { useCamera } from "../hooks/useCamera";
import { useNavigate } from "react-router-dom";
import { usePhotobooth } from "../context/PhotoboothContext";
import sepiaImg from "../assets/sepia.png";
import beach1 from "../assets/stickers/beach/beach-1.PNG";
import beach2 from "../assets/stickers/beach/beach-2.PNG";
import beach3 from "../assets/stickers/beach/beach-3.PNG";
import beach4 from "../assets/stickers/beach/beach-4.PNG";

export default function CameraPage() {
  const navigate = useNavigate();
  const { videoRef, photos, error, isReady, countdown, boothStarted, setBoothStarted, takePhoto, retake, cdOnRef } = useCamera();
  const { setPhotos: setSharedPhotos } = usePhotobooth();

  useEffect(() => {
    if (boothStarted && isReady) {
      takePhoto();
    }
  }, [boothStarted, isReady]);

  const stickerStyles = [
    "absolute left-3 top-3 w-16 md:w-20 rotate-[-10deg]",
    "absolute right-3 top-3 w-16 md:w-20 rotate-[8deg]",
    "absolute left-3 bottom-3 w-16 md:w-20 rotate-[10deg]",
    "absolute right-3 bottom-3 w-16 md:w-20 rotate-[-8deg]",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-navy px-4 py-6">
      <img src={beach1} alt="beach sticker" className="pointer-events-none absolute left-3 top-3 w-16 rotate-[-10deg] md:w-20" />
      <img src={beach2} alt="beach sticker" className="pointer-events-none absolute right-3 top-3 w-16 rotate-[8deg] md:w-20" />
      <img src={beach3} alt="beach sticker" className="pointer-events-none absolute left-3 top-[58%] w-16 rotate-[10deg] md:w-20" />
      <img src={beach4} alt="beach sticker" className="pointer-events-none absolute right-3 top-[58%] w-16 rotate-[-8deg] md:w-20" />

      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <img src={sepiaImg} alt="Sepia" className="w-64" />

          <button onClick={() => setBoothStarted(true)} className="btn-pixel-rose" hidden={boothStarted}>
            CAPTURE
          </button>

          <div className="flex gap-4">

            <button onClick={() => { setSharedPhotos(photos); navigate("/edit"); }} className="px-6 py-3 bg-black text-white rounded-lg" hidden={photos.length !== 3}>
              Customize
            </button>

            <button onClick={() => retake()} className="px-6 py-3 bg-black text-white rounded-lg" hidden={!boothStarted || cdOnRef.current}>
              Retake
            </button>

            <button onClick={() => takePhoto()} className="px-6 py-3 bg-black text-white rounded-lg" hidden={photos.length == 3 || !boothStarted || cdOnRef.current}>
              Continue
            </button>

          </div>

          {countdown > 0 ? (
            <div className="text-3xl font-pixel text-sand">{countdown}</div>
          ) : null}

          {error ? <p className="font-pixel text-sm text-rose">{error}</p> : null}

          {boothStarted && (
            <div className="flex items-start justify-center gap-4">
              <div
                className="relative frame-pixel overflow-hidden"
                style={{ width: "540px", maxWidth: "70vw", aspectRatio: "36 / 26" }}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  style={{ display: "block", transform: "scaleX(-1)" }}
                />
              </div>

              {photos.length > 0 && (
                <div className="flex flex-col gap-2">
                  {photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Capture ${index + 1}`}
                      className="h-20 w-20 object-cover frame-pixel"
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
