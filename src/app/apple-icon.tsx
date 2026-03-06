import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20%",
          background: "#6b2d3c",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#faf0e8",
              letterSpacing: 4,
            }}
          >
            BEV
          </span>
          <span
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#faf0e8",
              letterSpacing: 4,
            }}
          >
            SOC
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
