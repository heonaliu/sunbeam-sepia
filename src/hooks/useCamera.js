import { useEffect, useRef, useState } from "react";

export function useCamera() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [countdown, setCountdown] = useState("");
  const [boothStarted, setBoothStarted] = useState(false);
  const [moveOn, setMoveOn] = useState(false);

  const startCamera = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setError("Your browser does not support webcam access.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setIsReady(true);
    } catch (err) {
      setError("Line 31 - Camera permission was denied.");
      console.error(err);
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
    setPhotos((prev) => [...prev, dataUrl]);
  };

  const takeThreePhotos = async () => {
    for (let photoIndex = 0; photoIndex < 3; photoIndex++) {
      for (let second = 5; second > 0; second--) {
        setCountdown(second);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      capturePhoto();
    }
    setCountdown("All done! Please proceed to customize your photos.");
    setMoveOn(true);
  };

  useEffect(() => {
    if (!boothStarted) return;
    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [boothStarted]);

  return { videoRef, photos, error, isReady, countdown, boothStarted, setBoothStarted, moveOn, setMoveOn, takeThreePhotos };
}

export default useCamera;