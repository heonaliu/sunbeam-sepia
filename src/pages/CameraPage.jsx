import React from "react";
import { useNavigate } from "react-router-dom";

export default function CameraPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-sky flex flex-col items-center justify-center gap-6">
      <div className="frame-pixel p-2">{/* <video> element goes here */}</div>
      <button onClick={() => navigate("/edit")} className="btn-pixel-rose">
        CAPTURE
      </button>
    </div>
  );
}
