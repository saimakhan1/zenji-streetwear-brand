import React from "react";

const Faq = ({ onBackHome }) => {
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
          marginBottom: "20px",
        }}
      >
        FREQUENTLY ASKED QUESTIONS
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {[
          {
            q: "What is the delivery timeline?",
            a: "Standard delivery takes 2-4 business days inside Dhaka, and 3-6 days outside Dhaka.",
          },
          {
            q: "What is your return policy?",
            a: "We accept exchanges within 7 days of delivery for unwashed and unused items with tags intact.",
          },
          {
            q: "Are the drops restocked?",
            a: "Most of our drops are limited runs and will not be restocked once sold out.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "#18181b",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                color: "#fff",
                marginBottom: "8px",
              }}
            >
              {item.q}
            </h3>
            <p
              style={{
                color: "#a1a1aa",
                fontSize: "0.95rem",
                lineHeight: "1.6",
              }}
            >
              {item.a}
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

export default Faq;
