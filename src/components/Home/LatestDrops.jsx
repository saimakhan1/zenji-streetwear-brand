import React from "react";
import ProductCard from "../UI/ProductCard";

import zp1 from "../../assets/products/zp1.png";
import zp1Back from "../../assets/products/zp1-back.png";
import zp2 from "../../assets/products/zp2.png";
import zp2Back from "../../assets/products/zp2-back.png";
import zp3 from "../../assets/products/zp3.png";
import zp3Back from "../../assets/products/zp3-back.png";
import zp4 from "../../assets/products/zp4.png";
import zp4Back from "../../assets/products/zp4-back.png";

const products = [
  {
    id: 1,
    name: "BLUE FLAME GOJO TEE",
    price: "85",
    tag: "Heavyweight Cotton",
    description:
      "Features blue ink-wash Gojo print on front and kanji back art.",
    image: zp1,
    backImage: zp1Back,
  },
  {
    id: 2,
    name: "BUSHIDO SAMURAI TEE",
    price: "90",
    tag: "Oversized Fit",
    description:
      "Minimalist cream tee with front warrior art and back calligraphic stroke.",
    image: zp2,
    backImage: zp2Back,
  },
  {
    id: 3,
    name: "NEZUKO BLOOD DEMON TEE",
    price: "85",
    tag: "Limited Drop",
    description:
      "Vibrant pink oversized shirt with Japanese ink Demon Slayer motif.",
    image: zp3,
    backImage: zp3Back,
  },
  {
    id: 4,
    name: "VOID EXPANSION PURPLE TEE",
    price: "95",
    tag: "Premium Drop",
    description:
      "Deep purple oversized graphic tee showcasing Domain Expansion back artwork.",
    image: zp4,
    backImage: zp4Back,
  },
];

const LatestDrops = ({ onViewAll }) => {
  return (
    <section
      style={{ padding: "80px 40px", maxWidth: "1400px", margin: "0 auto" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "40px",
        }}
      >
        <div>
          <p
            style={{
              color: "var(--color-primary, #e63946)",
              fontSize: "0.85rem",
              fontWeight: "800",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            // NEW ARRIVALS
          </p>
          <h3
            style={{
              fontSize: "2.2rem",
              textTransform: "uppercase",
              fontWeight: "900",
              color: "#ffffff",
              letterSpacing: "1px",
              borderLeft: "4px solid var(--color-primary, #e63946)",
              paddingLeft: "15px",
              margin: 0,
            }}
          >
            LATEST DROPS
          </h3>
        </div>

        <button
          onClick={onViewAll}
          style={{
            background: "transparent",
            color: "#ffffff",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            padding: "10px 24px",
            fontSize: "0.85rem",
            fontWeight: "800",
            letterSpacing: "2px",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "var(--color-primary, #e63946)";
            e.target.style.borderColor = "var(--color-primary, #e63946)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
          }}
        >
          VIEW ALL →
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default LatestDrops;
