import React from "react";
import zoneImg from "../../assets/zone.png";

const ZenjiEthos = ({ onReadStory }) => {
  const handleClick = () => {
    if (onReadStory) {
      onReadStory("OUR STORY");
    }
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        margin: "60px 0",
        backgroundColor: "#09090b",
      }}
    >
      {/* 1. Full Image - 100% Opacity & Normal Brightness */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${zoneImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          opacity: 1, // Full opacity without dimming
          zIndex: 1,
        }}
      />

      {/* 2. Light Overlay - Adjusted for subtle text readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(9, 9, 11, 0.55) 0%, rgba(9, 9, 11, 0.25) 50%, rgba(9, 9, 11, 0) 100%)",
          zIndex: 2,
        }}
      />

      {/* 3. Content Area */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <div style={{ maxWidth: "580px" }}>
          <p
            style={{
              color: "var(--color-primary, #e63946)",
              fontSize: "0.85rem",
              fontWeight: "800",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            // THE ZENJI ETHOS
          </p>

          <h3
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: "900",
              textTransform: "uppercase",
              lineHeight: "1.1",
              letterSpacing: "0px",
              color: "#ffffff",
              marginBottom: "20px",
              textShadow: "0 2px 10px rgba(0,0,0,0.8)",
            }}
          >
            CULTURE WRITTEN IN{" "}
            <span style={{ color: "var(--color-primary, #e63946)" }}>
              THREAD.
            </span>
          </h3>

          <p
            style={{
              color: "#ffffff",
              fontSize: "1rem",
              lineHeight: "1.7",
              marginBottom: "30px",
              fontWeight: "500",
              textShadow: "0 2px 8px rgba(0,0,0,0.9)",
            }}
          >
            ZENJI represents the intersection of underground anime aesthetics
            and premium dark streetwear. Built for those who walk their own
            path, every drop is crafted with heavyweight fabrics, modest cuts,
            and timeless Japanese narrative design.
          </p>

          <button
            onClick={handleClick}
            style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "2px solid var(--color-primary, #e63946)",
              padding: "14px 32px",
              fontWeight: "800",
              letterSpacing: "2px",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "var(--color-primary, #e63946)";
              e.target.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#ffffff";
            }}
          >
            READ OUR STORY →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ZenjiEthos;
