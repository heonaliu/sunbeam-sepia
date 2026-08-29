import { useEffect, useRef, useState } from "react";


export function useCamera() {
 const videoRef = useRef(null);
 const streamRef = useRef(null);
 const cdOnRef = useRef(false);
 const [photos, setPhotos] = useState([]);
 const [error, setError] = useState("");
 const [isReady, setIsReady] = useState(false);
 const [countdown, setCountdown] = useState("");
 const [boothStarted, setBoothStarted] = useState(false);




 const startCamera = async () => {
   if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
     setError("Your browser does not support webcam access.");
     return;
   }


   try {
     const stream = await navigator.mediaDevices.getUserMedia({
       video: { 
        facingMode: "user",
        width: { ideal: 1260 },
        height: { ideal: 910 }
      },
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
   canvas.width = 720;
   canvas.height = 520;


   const ctx = canvas.getContext("2d");
   if (!ctx) return;


   ctx.drawImage(video, 0, 0, canvas.width, canvas.height);


   const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
   setPhotos((prev) => [...prev, dataUrl]);


 };


 const takePhoto = async () => {
   cdOnRef.current = true;
     for (let second = 5; second > 0; second--) {
       setCountdown(second);
       await new Promise((resolve) => setTimeout(resolve, 1000));
     }
     capturePhoto();
     setCountdown("");
     cdOnRef.current = false;
 };


 const retake = () => {
   setPhotos((prev) => prev.slice(0, -1));
   takePhoto();
 }




 useEffect(() => {
   if (!boothStarted) return;
   startCamera();


   return () => {
     if (streamRef.current) {
       streamRef.current.getTracks().forEach((track) => track.stop());
     }
   };
 }, [boothStarted]);


 return { videoRef, photos, error, isReady, countdown, boothStarted, setBoothStarted, takePhoto, retake, cdOnRef };
}

export default useCamera;