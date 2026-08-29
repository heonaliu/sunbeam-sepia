import React from 'react'
import { useNavigate } from "react-router-dom";

export default function CameraPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Camera Page</h1>
      <p className="text-gray-500">(camera feature goes here)</p>
      <button
        onClick={() => navigate("/edit")}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        Next: Edit
      </button>
    </div>
  );
}