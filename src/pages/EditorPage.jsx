import { useRef, useState } from "react";
import { usePhotobooth } from "../context/PhotoboothContext";
import winterBg from "../assets/templates/winter-bg.PNG";
import winterOver from "../assets/templates/winter-over.PNG";
import beachBg from "../assets/templates/beach-bg.PNG";
import beachOver from "../assets/templates/beach-over.PNG";
import studyBg from "../assets/templates/study-bg.PNG";
import studyOver from "../assets/templates/study-over.PNG";
import winterSticker1 from "../assets/stickers/winter/winter-1.PNG";
import winterSticker2 from "../assets/stickers/winter/winter-2.PNG";
import winterSticker3 from "../assets/stickers/winter/winter-3.PNG";
import winterSticker4 from "../assets/stickers/winter/winter-4.PNG";
import beachSticker1 from "../assets/stickers/beach/beach-1.PNG";
import beachSticker2 from "../assets/stickers/beach/beach-2.PNG";
import beachSticker3 from "../assets/stickers/beach/beach-3.PNG";
import beachSticker4 from "../assets/stickers/beach/beach-4.PNG";
import studySticker1 from "../assets/stickers/study/study-1.PNG";
import studySticker2 from "../assets/stickers/study/study-2.PNG";
import studySticker3 from "../assets/stickers/study/study-3.PNG";
import studySticker4 from "../assets/stickers/study/study-4.PNG";

const THEMES = [
  {
    id: "navy",
    name: "WINTER WONDERLAND",
    swatch: "bg-navy",
    border: "border-navy",
    bg: winterBg,
    over: winterOver,
    stickers: [winterSticker1, winterSticker2, winterSticker3, winterSticker4],
  },
  {
    id: "rose",
    name: "BEACH",
    swatch: "bg-rose",
    border: "border-rose",
    bg: beachBg,
    over: beachOver,
    stickers: [beachSticker1, beachSticker2, beachSticker3, beachSticker4],
  },
  {
    id: "sand",
    name: "STUDY DATE",
    swatch: "bg-sand",
    border: "border-sand",
    bg: studyBg,
    over: studyOver,
    stickers: [studySticker1, studySticker2, studySticker3, studySticker4],
  },
  { id: "blue", name: "OCEAN BREEZE", swatch: "bg-blue", border: "border-blue", bg: null, over: null, stickers: [] },
];

const STRIP_BORDER = 4;
const STICKER_SIZE = 48;

export default function EditorPage() {
  const [theme, setTheme] = useState(THEMES[0]);
  const [placedStickers, setPlacedStickers] = useState([]);
  const { photos } = usePhotobooth();
  const stripRef = useRef(null);

  const handleThemeChange = (t) => {
    setTheme(t);
    setPlacedStickers([]);
  };

  const handleStickerDrop = (e) => {
    e.preventDefault();
    const src = e.dataTransfer.getData("text/plain");
    if (!src) return;
    const uid = e.dataTransfer.getData("uid");

    const rect = stripRef.current.getBoundingClientRect();
    const innerWidth = rect.width - STRIP_BORDER * 2;
    const innerHeight = rect.height - STRIP_BORDER * 2;

    let x = e.clientX - rect.left - STRIP_BORDER - STICKER_SIZE / 2;
    let y = e.clientY - rect.top - STRIP_BORDER - STICKER_SIZE / 2;
    x = Math.max(0, Math.min(x, innerWidth - STICKER_SIZE));
    y = Math.max(0, Math.min(y, innerHeight - STICKER_SIZE));

    setPlacedStickers((prev) =>
      uid
        ? prev.map((s) => (s.uid === uid ? { ...s, x, y } : s))
        : [...prev, { uid: crypto.randomUUID(), src, x, y }]
    );
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-ice flex items-center justify-center gap-10 px-8">
      <div
        ref={stripRef}
        className={`relative overflow-hidden shrink-0 shadow-pixel border-4 ${theme.border} bg-white h-[85vh] aspect-[1/3]`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleStickerDrop}
      >
        {theme.bg && (
          <img src={theme.bg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        )}

        <div className="absolute inset-0 flex flex-col justify-center gap-4 p-4">
          {[0, 1, 2].map((index) => (
            <div key={index} className="aspect-[36/26] overflow-hidden">
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

        {placedStickers.map((s) => (
          <img
            key={s.uid}
            src={s.src}
            alt=""
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("text/plain", s.src);
              e.dataTransfer.setData("uid", s.uid);
            }}
            style={{ left: s.x, top: s.y, width: STICKER_SIZE, height: STICKER_SIZE }}
            className="absolute cursor-grab select-none"
          />
        ))}
      </div>

      <div className="flex flex-col gap-4 w-64 shrink-0">
        <div className="frame-pixel bg-white min-h-24 p-3 flex flex-wrap gap-2 justify-center items-center">
          {theme.stickers.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="sticker"
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text/plain", src)}
              className="w-12 h-12 object-contain cursor-grab select-none"
            />
          ))}
        </div>

        <div className="frame-pixel bg-white p-3 flex items-center justify-center gap-3">
          <div className={`w-8 h-8 border-4 border-navy ${theme.swatch}`} />
          <span className="font-pixel text-sm text-navy">{theme.name}</span>
        </div>

        <div className="frame-pixel bg-white p-3 flex gap-3 justify-center">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => handleThemeChange(t)}
              className={`w-10 h-10 border-4 ${t.swatch} ${
                theme.id === t.id ? "border-navy" : "border-ice"
              }`}
            />
          ))}
        </div>

        <button className="btn-pixel-blue">DOWNLOAD</button>
      </div>
    </div>
  );
}
