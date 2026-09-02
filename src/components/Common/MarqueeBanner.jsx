import React from "react";

const MarqueeBanner = () => {
  const items = [
    "AUSTRALIA-WIDE EXPRESS SHIPPING",
    "THE ORIGIN DROP IS LIVE",
    "LIMITED PIECES - NO RESTOCKS EVER",
    "FREE STICKER PACK WITH ORDERS OVER $150",
    "JAPANESE HEAVYWEIGHT COTTON 300 GSM",
  ];

  return (
    <div
      style={{
        backgroundColor: "var(--color-primary)",
        color: "#ffffff",
        padding: "8px 0",
        overflow: "hidden",
        fontSize: "0.85rem",
        fontWeight: "700",
        letterSpacing: "1.5px",
      }}
    >
      <div className="animate-marquee">
        {[...items, ...items, ...items].map((text, idx) => (
          <span key={idx} style={{ margin: "0 25px" }}>
            ● {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
