export function WorkVisual({ type, title }) {
  const labels = {
    devices: ["Flutter", "IoT", "AWS"],
    ble: ["BLE", "Mobile", "GATT"],
    transit: ["APIs", "Cloud", "Data"],
  };

  const chips = labels[type] || ["Software", "Systems", "Cloud"];

  return (
    <svg
      className="work-visual"
      viewBox="0 0 480 220"
      role="img"
      aria-label={`${title} abstract category illustration`}
    >
      <defs>
        <linearGradient id={`work-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1524" />
          <stop offset="100%" stopColor="#2a1f3d" />
        </linearGradient>
      </defs>
      <rect width="480" height="220" rx="18" fill={`url(#work-${type})`} />
      <circle cx="86" cy="110" r="42" fill="#624da3" opacity="0.85" />
      <rect x="150" y="68" width="260" height="16" rx="8" fill="#4a3a74" />
      <rect x="150" y="100" width="210" height="12" rx="6" fill="#3a2f58" />
      <rect x="150" y="128" width="180" height="12" rx="6" fill="#3a2f58" />
      {chips.map((chip, index) => (
        <g key={chip}>
          <rect
            x={150 + index * 90}
            y="160"
            width="80"
            height="28"
            rx="14"
            fill="#2d2444"
            stroke="#7d6ab0"
          />
          <text
            x={190 + index * 90}
            y="179"
            textAnchor="middle"
            fill="#e8e0ff"
            fontSize="12"
          >
            {chip}
          </text>
        </g>
      ))}
    </svg>
  );
}
