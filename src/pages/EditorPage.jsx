import { useState } from "react";

const THEMES = [
  { id: "navy", name: "WINTER WONDERLAND", swatch: "bg-navy", border: "border-navy" },
  { id: "rose", name: "BEACH", swatch: "bg-rose", border: "border-rose" },
  { id: "sand", name: "STUDY DATE", swatch: "bg-sand", border: "border-sand" },
  { id: "blue", name: "OCEAN BREEZE", swatch: "bg-blue", border: "border-blue" },
];

export default function EditorPage() {
  const [theme, setTheme] = useState(THEMES[0]);

  return (
    <div className="min-h-screen bg-ice flex flex-col items-center gap-6 py-8">
      <div className={`bg-white shadow-pixel border-4 ${theme.border} w-64 h-[480px]`} />


      <div className="frame-pixel bg-white w-64 min-h-24 p-3 flex flex-wrap gap-2" />

      <div className="frame-pixel bg-white w-64 p-3 flex items-center justify-center gap-3">
        <div className={`w-8 h-8 border-4 border-navy ${theme.swatch}`} />
        <span className="font-pixel text-sm text-navy">{theme.name}</span>
      </div>

      <div className="frame-pixel bg-white w-64 p-3 flex gap-3 justify-center">
        {THEMES.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t)}
            className={`w-10 h-10 border-4 ${t.swatch} ${
              theme.id === t.id ? "border-navy" : "border-ice"
            }`}
          />
        ))}
      </div>

      <button className="btn-pixel-blue">DOWNLOAD</button>
    </div>
  );
}
