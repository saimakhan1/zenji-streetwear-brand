import React from "react";

const OurStory = ({ onBackHome }) => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 20px",
        textAlign: "left",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "900",
          letterSpacing: "2px",
          marginBottom: "15px",
        }}
      >
        OUR STORY
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          color: "#a1a1aa",
          lineHeight: "1.8",
          marginBottom: "20px",
        }}
      >
        Zenji was founded on the principle of raw urban authenticity combined
        with premium minimalism. What started as a small underground streetwear
        experiment has evolved into a global movement.
      </p>
      <p
        style={{
          fontSize: "1rem",
          color: "#71717a",
          lineHeight: "1.8",
          marginBottom: "30px",
        }}
      >
        Every drop is designed with high-density fabrics, custom silhouettes,
        and uncompromising attention to detail. We do not follow trends; we set
        the culture.
      </p>

      <button onClick={onBackHome} style={btnStyle}>
        BACK TO HOME
      </button>
    </div>
  );
};

const btnStyle = {
  marginTop: "20px",
  padding: "12px 28px",
  backgroundColor: "var(--color-primary, #e63946)",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "700",
  letterSpacing: "1px",
};

export default OurStory;
