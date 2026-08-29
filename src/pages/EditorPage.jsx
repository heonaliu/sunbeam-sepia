import { useState } from "react";

const TEMPLATES = [
  { id: "navy", swatch: "bg-navy", border: "border-navy" },
  { id: "rose", swatch: "bg-rose", border: "border-rose" },
  { id: "sand", swatch: "bg-sand", border: "border-sand" },
  { id: "blue", swatch: "bg-blue", border: "border-blue" },
];

export default function EditorPage() {
  const [template, setTemplate] = useState(TEMPLATES[0]);

  return (
    <div className="min-h-screen bg-ice flex flex-col items-center gap-6 py-8">
      <div className={`bg-white shadow-pixel border-4 ${template.border} w-64 h-[480px]`} />


      <div className="frame-pixel bg-white w-64 min-h-24 p-3 flex flex-wrap gap-2" />


      <div className="frame-pixel bg-white w-64 p-3 flex gap-3 justify-center">
        {TEMPLATES.map((t) => (
          <button
            key={t.id}
            onClick={() => setTemplate(t)}
            className={`w-10 h-10 border-4 ${t.swatch} ${
              template.id === t.id ? "border-navy" : "border-ice"
            }`}
          />
        ))}
      </div>

      <button className="btn-pixel-blue">DOWNLOAD</button>
    </div>
  );
}
