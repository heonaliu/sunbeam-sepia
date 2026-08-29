import { useState } from "react";
import { usePhotobooth } from "../context/PhotoboothContext";
import winterBg from "../assets/templates/winter-bg.PNG";
import winterOver from "../assets/templates/winter-over.PNG";
import beachBg from "../assets/templates/beach-bg.PNG";
import beachOver from "../assets/templates/beach-over.PNG";
import studyBg from "../assets/templates/study-bg.PNG";
import studyOver from "../assets/templates/study-over.PNG";

const THEMES = [
  { id: "navy", name: "WINTER WONDERLAND", swatch: "bg-navy", border: "border-navy", bg: winterBg, over: winterOver },
  { id: "rose", name: "BEACH", swatch: "bg-rose", border: "border-rose", bg: beachBg, over: beachOver },
  { id: "sand", name: "STUDY DATE", swatch: "bg-sand", border: "border-sand", bg: studyBg, over: studyOver },
  { id: "blue", name: "OCEAN BREEZE", swatch: "bg-blue", border: "border-blue", bg: null, over: null },
];

export default function EditorPage() {
  const [theme, setTheme] = useState(THEMES[0]);
  const { photos } = usePhotobooth();

  return (
    <div className="min-h-screen bg-ice flex flex-col items-center gap-6 py-8">
      <div className={`relative overflow-hidden shadow-pixel border-4 ${theme.border} bg-white w-64 aspect-[1/3]`}>
        {theme.bg && (
          <img src={theme.bg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        )}

        <div className="absolute inset-0 flex flex-col gap-4 p-4">
          {[0, 1, 2].map((index) => (
            <div key={index} className="flex-1 overflow-hidden">
              {photos[index] && (
                <img
                  src={photos[index]}
                  alt={`Capture ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          ))}
        </div>

        {theme.over && (
          <img src={theme.over} alt="" className="absolute inset-0 h-full w-full object-cover pointer-events-none" />
        )}
      </div>


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
