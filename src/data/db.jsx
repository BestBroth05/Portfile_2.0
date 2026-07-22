import mabePage from "../assets/img/Mabe_Page_landscape.png";
import biosensePage from "../assets/img/Biosense_Page_landscape.png";
import pathbusPage from "../assets/img/Pathbus_Page.png";
import reat from "../assets/img/react.svg";
import {
  faMicrochip,
  faMobileScreen,
  faServer,
  faCloud,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

export const datacategorias = [
  {
    img: faMicrochip,
    title: "Integrations & IoT",
    logos: [{ img: reat }, { img: reat }, { img: reat }, { img: reat }],
    descripcion:
      "BLE, MQTT, OTA Updates, GPS Telemetry, Hardware/Device Integrations, Third-party APIs",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
  {
    img: faMobileScreen,
    title: "Frontend & Mobile",
    logos: [{ img: reat }, { img: reat }, { img: reat }],
    descripcion: "Flutter (Web, Android, iOS), Dart, Flutter Pi",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
  {
    img: faServer,
    logos: [{ img: reat }, { img: reat }, { img: reat }, { img: reat }],
    title: "Backend",
    descripcion:
      "Node.js, TypeScript, Express, REST APIs, Swagger/OpenAPI, JWT",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
  {
    img: faCloud,
    logos: [{ img: reat }, { img: reat }, { img: reat }],
    title: "Cloud & DevOps",
    descripcion: "AWS (EC2, S3, IAM, SSM), GitHub Actions, Docker",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
  {
    img: faDatabase,
    logos: [{ img: reat }, { img: reat }, { img: reat }, { img: reat }],
    title: "Databases",
    descripcion:
      "SQL Server, Firebase, Flyway, Relational Modeling, Query Optimization",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
];

export const dataProductos = [
  {
    img: [{ img: mabePage }],
    title: "Mabe",
    precio:
      "Built an AI-powered IoT platform in Flutter (iOS, Android, Raspberry Pi) deployed across 200+ connected units backed by AWS cloud infrastructure. Owned the full stack from embedded systems integration to frontend, collaborating with a 3-person team across hardware and mobile.",
    technologies: "Flutter, AWS, Raspberry Pi, IoT, Embedded Systems",
    website: "https://brayanolivares.com",
    repo: "https://github.com/BestBroth05",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
  {
    img: [{ img: biosensePage }],
    title: "Biosense",
    precio:
      "Led a 3-person team engineering a cross-platform BLE medical app for iOS and Android, validated across 100+ physical devices. Optimized BLE protocol and data validation pipeline, reducing measurement error rates from 15% to near-zero.",
    technologies: "Flutter, BLE, iOS, Android",
    website: "https://github.com/BestBroth05/ble-medical-flutter",
    repo: "https://github.com/BestBroth05/ble-medical-flutter",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
  {
    img: [{ img: pathbusPage }],
    title: "PathBus",
    precio:
      "Sole engineer for an IoT-enabled transit platform across 10+ cities. Built secure embedded device authentication, a full OTA firmware update system (AWS S3, CRC validation, chunked delivery, remote BootStatus control), and GPS telemetry ingestion from field hardware. Automated CI/CD with GitHub Actions for production and test environments.",
    technologies: "IoT, AWS S3, GitHub Actions, GPS Telemetry, OTA Updates",
    website: "https://github.com/BestBroth05/ota-firmware-system",
    repo: "https://github.com/BestBroth05/ota-firmware-system",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
];
