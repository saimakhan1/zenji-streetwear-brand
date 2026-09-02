import React from "react";

const Collaboration = ({ onBackHome }) => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "900",
          letterSpacing: "2px",
          marginBottom: "10px",
        }}
      >
        COLLABORATIONS
      </h1>
      <p style={{ color: "#a1a1aa", marginBottom: "30px" }}>
        Co-created releases with independent artists & designers.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          {
            title: "ZENJI × TOKYO ART LAB",
            desc: "Cyberpunk graphic tees & statement jackets.",
          },
          {
            title: "ZENJI × METRO SOUNDS",
            desc: "Heavyweight hoodies designed with underground DJs.",
          },
        ].map((collab, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "#18181b",
              padding: "30px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              {collab.title}
            </h3>
            <p style={{ color: "#a1a1aa", fontSize: "0.95rem" }}>
              {collab.desc}
            </p>
          </div>
        ))}
      </div>

      <button onClick={onBackHome} style={btnStyle}>
        BACK TO HOME
      </button>
    </div>
  );
};

const btnStyle = {
  marginTop: "40px",
  padding: "12px 28px",
  backgroundColor: "var(--color-primary, #e63946)",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "700",
  letterSpacing: "1px",
};

export default Collaboration;
