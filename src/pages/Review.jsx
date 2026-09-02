import React from "react";

const Review = ({ onBackHome }) => {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 20px" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "900",
          letterSpacing: "2px",
          marginBottom: "10px",
        }}
      >
        CUSTOMER REVIEWS
      </h1>
      <p style={{ color: "#a1a1aa", marginBottom: "30px" }}>
        What our community says about Zenji items.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {[
          {
            name: "Rahim A.",
            rating: "★★★★★",
            text: "The hoodie fit is insane! Ultra heavyweight fabric, super warm.",
          },
          {
            name: "Samiul K.",
            rating: "★★★★★",
            text: "Fast shipping and high quality stitching on the cargo pants.",
          },
          {
            name: "Tanvir H.",
            rating: "★★★★☆",
            text: "Aesthetic packaging and premium feel tees. Loved the drop!",
          },
        ].map((rev, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "#18181b",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.1)",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span style={{ fontWeight: "700" }}>{rev.name}</span>
              <span style={{ color: "#f59e0b" }}>{rev.rating}</span>
            </div>
            <p style={{ color: "#a1a1aa", fontSize: "0.95rem" }}>
              "{rev.text}"
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

export default Review;
