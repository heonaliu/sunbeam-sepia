import React from "react";

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-ice flex flex-col items-center gap-6 py-8">
      <div className="frame-pixel bg-white p-4">{/* strip canvas */}</div>
      <div className="flex gap-2 bg-sand border-4 border-navy p-3">
        {/* sticker tray items */}
      </div>
      <button className="btn-pixel-blue">DOWNLOAD</button>
    </div>
  );
}
