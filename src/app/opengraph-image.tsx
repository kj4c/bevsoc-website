import { ImageResponse } from "next/og";

export const alt = "BevSoc UNSW — Beverage Appreciation Society";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6b2d3c 0%, #4a1e2a 100%)",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1.1,
            marginBottom: 30,
          }}
        >
          <span
            style={{
              fontSize: 120,
              fontWeight: 800,
              color: "#faf0e8",
              letterSpacing: 8,
            }}
          >
            BEV SOC
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#faf0e8",
              opacity: 0.9,
            }}
          >
            UNSW Beverage Appreciation Society
          </span>
          <span
            style={{
              fontSize: 24,
              color: "#faf0e8",
              opacity: 0.7,
              marginTop: 16,
            }}
          >
            unswbevsoc.org
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
