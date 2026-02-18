import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
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
              fontSize: 16,
              fontWeight: 800,
              color: "#faf0e8",
              letterSpacing: 2,
            }}
          >
            BEV
          </span>
          <span
            style={{
              fontSize: 16,
              fontWeight: 800,
              color: "#faf0e8",
              letterSpacing: 2,
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
