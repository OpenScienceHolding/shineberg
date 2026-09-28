import { ImageResponse } from "next/og";

export const alt = "Sharon Shineberg - Advisor & companion to ventures from day one";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#F5F0E8",
          color: "#111111",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#727170", marginBottom: 40 }}>
          SHARON SHINEBERG
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          Advisor &amp; companion
        </div>
        <div style={{ fontSize: 76, fontStyle: "italic", lineHeight: 1.1 }}>
          to ventures from day one.
        </div>
        <div style={{ fontSize: 28, color: "#727170", marginTop: 48 }}>shineberg.com</div>
      </div>
    ),
    size
  );
}
