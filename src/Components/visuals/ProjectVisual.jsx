/* eslint-disable react/prop-types */
export function ProjectVisual({ type, title }) {
  if (type === "artifact") {
    return (
      <svg
        className="project-visual"
        viewBox="0 0 640 360"
        role="img"
        aria-label={`${title} architecture illustration`}
      >
        <defs>
          <linearGradient id="artifactBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a1524" />
            <stop offset="100%" stopColor="#2a2040" />
          </linearGradient>
        </defs>
        <rect width="640" height="360" rx="24" fill="url(#artifactBg)" />
        <rect x="40" y="48" width="120" height="56" rx="12" fill="#624da3" />
        <text x="100" y="82" textAnchor="middle" fill="#fff" fontSize="16">
          Client
        </text>
        <rect x="210" y="48" width="140" height="56" rx="12" fill="#3d3164" />
        <text x="280" y="82" textAnchor="middle" fill="#fff" fontSize="16">
          API Gateway
        </text>
        <rect x="400" y="48" width="120" height="56" rx="12" fill="#3d3164" />
        <text x="460" y="82" textAnchor="middle" fill="#fff" fontSize="16">
          Lambda
        </text>
        <rect x="120" y="180" width="160" height="64" rx="12" fill="#31264f" />
        <text x="200" y="218" textAnchor="middle" fill="#fff" fontSize="16">
          S3 Artifacts
        </text>
        <rect x="360" y="180" width="160" height="64" rx="12" fill="#31264f" />
        <text x="440" y="218" textAnchor="middle" fill="#fff" fontSize="16">
          CloudFront
        </text>
        <path
          d="M160 104v40M280 104v40M460 104v76M200 180V144h280"
          stroke="#9b86d8"
          strokeWidth="3"
          fill="none"
        />
        <text x="320" y="300" textAnchor="middle" fill="#cbbcf5" fontSize="18">
          Versioned publish and delivery
        </text>
      </svg>
    );
  }

  if (type === "bluetooth") {
    return (
      <svg
        className="project-visual"
        viewBox="0 0 640 360"
        role="img"
        aria-label={`${title} Bluetooth illustration`}
      >
        <defs>
          <linearGradient id="bleBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#141821" />
            <stop offset="100%" stopColor="#242038" />
          </linearGradient>
        </defs>
        <rect width="640" height="360" rx="24" fill="url(#bleBg)" />
        <rect x="70" y="50" width="160" height="260" rx="28" fill="#1d2330" stroke="#624da3" strokeWidth="4" />
        <rect x="95" y="90" width="110" height="160" rx="12" fill="#10141c" />
        <text x="150" y="130" textAnchor="middle" fill="#9b86d8" fontSize="14">
          Demo Sensor
        </text>
        <text x="150" y="158" textAnchor="middle" fill="#fff" fontSize="18">
          Connected
        </text>
        <text x="150" y="186" textAnchor="middle" fill="#cbbcf5" fontSize="14">
          RSSI -62 dBm
        </text>
        <circle cx="420" cy="120" r="48" fill="#624da3" opacity="0.9" />
        <circle cx="420" cy="120" r="78" fill="none" stroke="#9b86d8" strokeWidth="3" opacity="0.5" />
        <circle cx="420" cy="120" r="108" fill="none" stroke="#9b86d8" strokeWidth="2" opacity="0.3" />
        <text x="420" y="126" textAnchor="middle" fill="#fff" fontSize="16">
          BLE
        </text>
        <rect x="320" y="220" width="200" height="70" rx="14" fill="#2a2140" />
        <text x="420" y="250" textAnchor="middle" fill="#fff" fontSize="15">
          GATT · Heart Rate Demo
        </text>
        <text x="420" y="274" textAnchor="middle" fill="#cbbcf5" fontSize="13">
          notify stream · pkt framing
        </text>
      </svg>
    );
  }

  return (
    <svg
      className="project-visual"
      viewBox="0 0 640 360"
      role="img"
      aria-label={`${title} portfolio illustration`}
    >
      <defs>
        <linearGradient id="portfolioBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#17131f" />
          <stop offset="100%" stopColor="#2c2344" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" rx="24" fill="url(#portfolioBg)" />
      <rect x="70" y="60" width="500" height="240" rx="18" fill="#101018" stroke="#624da3" strokeWidth="3" />
      <rect x="90" y="86" width="180" height="18" rx="9" fill="#624da3" />
      <rect x="90" y="122" width="280" height="12" rx="6" fill="#3d3164" />
      <rect x="90" y="148" width="240" height="12" rx="6" fill="#3d3164" />
      <rect x="90" y="190" width="120" height="36" rx="18" fill="#624da3" />
      <rect x="230" y="190" width="120" height="36" rx="18" fill="#2a2140" stroke="#9b86d8" />
      <text x="320" y="280" textAnchor="middle" fill="#cbbcf5" fontSize="18">
        Dark purple engineering portfolio
      </text>
    </svg>
  );
}
