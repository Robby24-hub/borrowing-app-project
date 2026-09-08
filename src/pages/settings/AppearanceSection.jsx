import { useState } from "react";
import SegmentedControl from "./SegmentedControl";

const accentColors = [
  { name: "Ledger", hex: "#1f5c56" },
  { name: "Ochre", hex: "#b8863b" },
  { name: "Moss", hex: "#4b7a51" },
  { name: "Rust", hex: "#b23a2e" },
];

export default function AppearanceSection() {
  const [mode, setMode] = useState("Light");
  const [density, setDensity] = useState("Comfortable");
  const [accent, setAccent] = useState("Ledger");

  return (
    <div>
      <h2 className="font-display text-lg font-medium mb-1">Appearance</h2>
      <p className="text-sm text-ink/50 mb-6">
        Adjust how the app looks and feels.
      </p>

      <div className="flex flex-col gap-6 max-w-md">
        <div className="flex items-center justify-between py-3 border-b border-line">
          <div>
            <p className="text-sm font-medium">Theme</p>
            <p className="text-xs text-ink/50 mt-0.5">Light or dark mode</p>
          </div>
          <SegmentedControl
            options={["Light", "Dark"]}
            value={mode}
            onChange={setMode}
          />
        </div>

        <div className="py-3 border-b border-line">
          <p className="text-sm font-medium mb-0.5">Accent color</p>
          <p className="text-xs text-ink/50 mb-3">
            Used for buttons and highlights
          </p>
          <div className="flex items-center gap-3">
            {accentColors.map((color) => (
              <button
                key={color.name}
                onClick={() => setAccent(color.name)}
                className="flex flex-col items-center gap-1.5 cursor-pointer"
              >
                <span
                  className="w-7 h-7 rounded-full border-2 transition-all"
                  style={{
                    backgroundColor: color.hex,
                    borderColor:
                      accent === color.name ? color.hex : "transparent",
                    boxShadow:
                      accent === color.name
                        ? `0 0 0 2px white, 0 0 0 3.5px ${color.hex}`
                        : "none",
                  }}
                />
                <span className="text-[11px] text-ink/50">{color.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div>
            <p className="text-sm font-medium">Interface spacing</p>
            <p className="text-xs text-ink/50 mt-0.5">
              Compact fits more on screen
            </p>
          </div>
          <SegmentedControl
            options={["Compact", "Comfortable"]}
            value={density}
            onChange={setDensity}
          />
        </div>
      </div>
    </div>
  );
}
