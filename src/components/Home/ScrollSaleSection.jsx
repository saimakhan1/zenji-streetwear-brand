import React from "react";

// Import local product images from assets
import dropYellow from "../../assets/drop-yellow.jpg";
import dropGreen from "../../assets/drop-green.jpg";
import dropBlue from "../../assets/drop-blue.jpg";
import dropPink from "../../assets/drop-pink.jpg";

const saleItems = [
  {
    id: 1,
    title: "NEON TOKYO OVERSIZED TEE",
    category: "UNISEX STREETWEAR",
    img: dropYellow,
  },
  {
    id: 2,
    title: "CYBER CARGO BAGGY PANTS",
    category: "HEAVYWEIGHT COTTON",
    img: dropGreen,
  },
  {
    id: 3,
    title: "SHINOBI TACTICAL HOODIE",
    category: "LIMITED ARCHIVE DROP",
    img: dropBlue,
  },
  {
    id: 4,
    title: "AKIRA LOOSE FIT COLLECTION",
    category: "EXCLUSIVE JAPANESE EDITION",
    img: dropPink,
  },
];

const ScrollSaleSection = () => {
  return (
    <section
      style={{ padding: "80px 40px", maxWidth: "1400px", margin: "0 auto" }}
    >
      <p
        style={{
          color: "var(--color-primary)",
          fontSize: "0.85rem",
          fontWeight: "800",
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        // ARCHIVE SALE
      </p>
      <h3
        style={{
          fontSize: "2.2rem",
          textTransform: "uppercase",
          fontWeight: "900",
          marginBottom: "40px",
          letterSpacing: "1px",
          borderLeft: "4px solid var(--color-primary)",
          paddingLeft: "15px",
        }}
      >
        SEASONAL LOOKBOOK SALE
      </h3>

      <div className="sticky-stack-container">
        {saleItems.map((item, index) => (
          <div
            key={item.id}
            className="sticky-card"
            style={{
              backgroundColor: `hsl(240, 5%, ${10 + index * 3}%)`,
              top: `${100 + index * 15}px`,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              padding: "30px",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                filter: "brightness(0.75)",
              }}
            />
            {/* Bottom-left aligned content box */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                textAlign: "left",
                background: "rgba(9, 9, 11, 0.85)",
                padding: "20px 30px",
                borderRadius: "8px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                maxWidth: "480px",
              }}
            >
              <p
                style={{
                  color: "var(--color-primary)",
                  fontWeight: "800",
                  letterSpacing: "2px",
                  fontSize: "0.8rem",
                  marginBottom: "4px",
                }}
              >
                {item.category}
              </p>
              <h4
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  letterSpacing: "1px",
                  margin: 0,
                }}
              >
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollSaleSection;
