import React from "react";

const pageContents = {
  SHIPPING_POLICY: {
    title: "SHIPPING POLICY",
    content:
      "We deliver across Bangladesh within 3-5 business days. Standard shipping fee applies at checkout.",
  },
  RETURNS: {
    title: "RETURNS & EXCHANGES",
    content:
      "You can exchange any unused item within 7 days of delivery. Tags must remain intact.",
  },
  SIZE_GUIDE: {
    title: "SIZE GUIDE",
    content:
      'ZENJI offers an oversized streetwear fit. Check our detailed measurements: M (Chest 44"), L (Chest 46"), XL (Chest 48").',
  },
  TERMS: {
    title: "TERMS OF SERVICE",
    content:
      "By using ZENJI.SHOP, you agree to our terms of service and order guidelines.",
  },
  PRIVACY: {
    title: "PRIVACY POLICY",
    content:
      "We value your privacy. Your personal information is encrypted and never shared with third parties.",
  },
  COOKIES: {
    title: "COOKIE PREFERENCES",
    content:
      "We use essential cookies to enhance your browsing and shopping experience.",
  },
  REFUND: {
    title: "REFUND POLICY",
    content:
      "Refunds are processed within 5-7 working days if an ordered item is out of stock or damaged.",
  },
};

const LegalPages = ({ pageKey, onBack }) => {
  const data = pageContents[pageKey] || {
    title: "INFORMATION",
    content: "Page content coming soon.",
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "120px 20px 80px",
        color: "#fff",
        minHeight: "60vh",
      }}
    >
      <button
        onClick={onBack}
        style={{
          background: "none",
          border: "1px solid #333",
          color: "#aaa",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >
        ← Back to Home
      </button>

      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "900",
          letterSpacing: "2px",
          marginBottom: "20px",
          borderBottom: "1px solid #222",
          paddingBottom: "15px",
        }}
      >
        {data.title}
      </h1>

      <p style={{ color: "#ccc", fontSize: "1.1rem", lineHeight: "1.8" }}>
        {data.content}
      </p>
    </div>
  );
};

export default LegalPages;
