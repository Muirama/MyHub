import { useState } from "react";
import "../../styles/examples.css";

export default function ToggleSwitch() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className="slider"></span>
    </label>
  );
}
