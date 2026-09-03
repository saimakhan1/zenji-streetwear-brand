import React, { useState } from "react";

const ProductCard = ({ product, onSelectProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(product?.image);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("details"); // 'details' | 'fabric' | 'shipping'
  const [isWishlisted, setIsWishlisted] = useState(false);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  // প্রোডাক্টের অন্যান্য ইমেজ যদি থাকে, না থাকলে ডিফল্ট ইমেজ ব্যবহার করবে
  const galleryImages = [
    product?.image,
    product?.backImage || product?.image,
  ].filter(Boolean);

  const openQuickView = (e) => {
    e.stopPropagation();
    setActiveImage(product.image);
    setIsModalOpen(true);
  };

  const closeQuickView = (e) => {
    if (e) e.stopPropagation();
    setIsModalOpen(false);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <>
      <style>{`
        /* --- CARD STYLES --- */
        .product-card {
          background-color: #121214;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
        }
        .product-card:hover {
          transform: translateY(-8px);
          border-color: #e63946;
          box-shadow: 0 12px 30px rgba(230, 57, 70, 0.15);
        }

        .img-container {
          position: relative;
          height: 360px;
          overflow: hidden;
          background-color: #18181b;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .product-card:hover .product-img {
          transform: scale(1.08);
        }

        .quick-view-btn {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 85%;
          padding: 12px;
          background: #e63946;
          color: #ffffff;
          border: none;
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 2px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(230, 57, 70, 0.5);
          backdrop-filter: blur(4px);
        }
        .product-card:hover .quick-view-btn {
          bottom: 15px;
        }
        .quick-view-btn:hover {
          background-color: #ff4d5a;
          transform: translateX(-50%) scale(1.02);
        }

        /* --- MODERN MODAL STYLES --- */
        .qv-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 20px;
          animation: qvFadeIn 0.25s ease-out;
        }

        .qv-modal {
          background: #0f0f12;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          width: 100%;
          max-width: 960px;
          max-height: 88vh;
          overflow-y: auto;
          padding: 30px;
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 35px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9);
          animation: qvScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Scrollbar for modal */
        .qv-modal::-webkit-scrollbar {
          width: 6px;
        }
        .qv-modal::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
        }

        @media (max-width: 820px) {
          .qv-modal {
            grid-template-columns: 1fr;
            padding: 20px;
          }
        }

        .qv-close-btn {
          position: absolute;
          top: 15px;
          right: 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #a1a1aa;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          z-index: 10;
        }
        .qv-close-btn:hover {
          color: #fff;
          background: #e63946;
          border-color: #e63946;
        }

        /* Size Pill Buttons */
        .size-btn {
          width: 45px;
          height: 45px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #18181b;
          color: #fff;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .size-btn:hover {
          border-color: rgba(255, 255, 255, 0.4);
        }
        .size-btn.active {
          border-color: #e63946;
          background: #e63946;
          color: #fff;
          box-shadow: 0 4px 12px rgba(230, 57, 70, 0.3);
        }

        /* Accordion Item */
        .accordion-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 12px 0;
        }
        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          color: #e4e4e7;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 1px;
        }
        .accordion-content {
          padding-top: 10px;
          color: #93939e;
          font-size: 0.85rem;
          line-height: 1.6;
        }

        @keyframes qvFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes qvScaleUp {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      {/* Main Product Card */}
      <div
        className="product-card"
        onClick={() => onSelectProduct && onSelectProduct(product)}
      >
        <div className="img-container">
          <img src={product.image} alt={product.name} className="product-img" />
          <button className="quick-view-btn" onClick={openQuickView}>
            QUICK VIEW
          </button>
        </div>

        <div style={{ padding: "18px" }}>
          <span
            style={{
              fontSize: "0.7rem",
              color: "#e63946",
              fontWeight: "800",
              letterSpacing: "1.5px",
              display: "block",
              marginBottom: "6px",
              textTransform: "uppercase",
            }}
          >
            {product.tag}
          </span>
          <h4
            style={{
              color: "#fff",
              fontSize: "1.05rem",
              fontWeight: "700",
              margin: "0 0 8px 0",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product.name}
          </h4>
          <p
            style={{
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: "800",
              margin: 0,
            }}
          >
            BDT {product.price}00
          </p>
        </div>
      </div>

      {/* High-End Quick View Pop-up Modal */}
      {isModalOpen && (
        <div className="qv-overlay" onClick={closeQuickView}>
          <div className="qv-modal" onClick={(e) => e.stopPropagation()}>
            <button className="qv-close-btn" onClick={closeQuickView}>
              ✕
            </button>

            {/* LEFT COLUMN: Gallery & Main Image */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "380px",
                  backgroundColor: "#161619",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <img
                  src={activeImage || product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "rgba(34, 197, 94, 0.15)",
                    color: "#4ade80",
                    border: "1px solid rgba(74, 222, 128, 0.3)",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "0.65rem",
                    fontWeight: "800",
                    letterSpacing: "1px",
                  }}
                >
                  ● IN STOCK
                </span>
              </div>

              {/* Thumbnails Angle Switcher */}
              <div style={{ display: "flex", gap: "12px" }}>
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      border:
                        activeImage === img
                          ? "2px solid #e63946"
                          : "1px solid rgba(255,255,255,0.15)",
                      background: "#161619",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <img
                      src={img}
                      alt="thumbnail"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Product Info & Purchase Controls */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: "15px" }}>
                <span
                  style={{
                    color: "#e63946",
                    fontSize: "0.75rem",
                    fontWeight: "800",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {product.tag}
                </span>
                <h2
                  style={{
                    color: "#fff",
                    fontSize: "1.75rem",
                    fontWeight: "800",
                    margin: "6px 0 10px 0",
                    lineHeight: "1.2",
                  }}
                >
                  {product.name}
                </h2>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "1.5rem",
                      fontWeight: "900",
                    }}
                  >
                    BDT {product.price}00
                  </span>
                  <span
                    style={{
                      color: "#a1a1aa",
                      fontSize: "0.9rem",
                      textDecoration: "line-through",
                    }}
                  >
                    BDT {Number(product.price) + 400}00
                  </span>
                </div>
              </div>

              {/* Size Selector */}
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <label
                    style={{
                      color: "#e4e4e7",
                      fontSize: "0.75rem",
                      fontWeight: "800",
                      letterSpacing: "1px",
                    }}
                  >
                    SELECT SIZE
                  </label>
                  <span
                    style={{
                      color: "#e63946",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Size Guide
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? "active" : ""}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div style={{ marginBottom: "25px" }}>
                <label
                  style={{
                    display: "block",
                    color: "#e4e4e7",
                    fontSize: "0.75rem",
                    fontWeight: "800",
                    letterSpacing: "1px",
                    marginBottom: "8px",
                  }}
                >
                  QUANTITY
                </label>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "8px",
                    background: "#161619",
                  }}
                >
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      padding: "10px 16px",
                      background: "none",
                      border: "none",
                      color: "#fff",
                      cursor: "pointer",
                      fontSize: "1.1rem",
                    }}
                  >
                    -
                  </button>
                  <span
                    style={{
                      padding: "0 12px",
                      color: "#fff",
                      fontWeight: "800",
                      fontSize: "0.95rem",
                    }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{
                      padding: "10px 16px",
                      background: "none",
                      border: "none",
                      color: "#fff",
                      cursor: "pointer",
                      fontSize: "1.1rem",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div
                style={{ display: "flex", gap: "12px", marginBottom: "25px" }}
              >
                <button
                  onClick={() =>
                    alert(
                      `Added ${quantity} x ${product.name} (${selectedSize}) to Cart!`,
                    )
                  }
                  style={{
                    flex: 1,
                    padding: "16px",
                    backgroundColor: "#e63946",
                    color: "#fff",
                    border: "none",
                    fontWeight: "800",
                    fontSize: "0.85rem",
                    letterSpacing: "1.5px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(230, 57, 70, 0.4)",
                    transition: "all 0.2s ease",
                  }}
                >
                  ADD TO CART
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  style={{
                    padding: "16px",
                    width: "55px",
                    backgroundColor: isWishlisted ? "#e63946" : "#161619",
                    color: "#fff",
                    border: isWishlisted
                      ? "none"
                      : "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    transition: "all 0.2s ease",
                  }}
                >
                  {isWishlisted ? "♥" : "♡"}
                </button>
              </div>

              {/* Accordion Information Section */}
              <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                {/* Accordion 1: Description */}
                <div className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion("details")}
                  >
                    <span>PRODUCT DESCRIPTION</span>
                    <span>{openAccordion === "details" ? "−" : "+"}</span>
                  </div>
                  {openAccordion === "details" && (
                    <div className="accordion-content">
                      {product.description ||
                        "Crafted with heavy-weight 240 GSM organic cotton. Designed for a signature oversized streetwear silhouette with high-density screen print artwork."}
                    </div>
                  )}
                </div>

                {/* Accordion 2: Fabric & Fit */}
                <div className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion("fabric")}
                  >
                    <span>FABRIC & FIT</span>
                    <span>{openAccordion === "fabric" ? "−" : "+"}</span>
                  </div>
                  {openAccordion === "fabric" && (
                    <div className="accordion-content">
                      • 100% Combed Heavyweight Cotton <br />
                      • Oversized Drop Shoulder Fit <br />• Pre-shrunk fabric to
                      prevent shrinkage
                    </div>
                  )}
                </div>

                {/* Accordion 3: Shipping & Returns */}
                <div className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion("shipping")}
                  >
                    <span>SHIPPING & RETURNS</span>
                    <span>{openAccordion === "shipping" ? "−" : "+"}</span>
                  </div>
                  {openAccordion === "shipping" && (
                    <div className="accordion-content">
                      • Delivery inside Dhaka: 24–48 Hours (80 BDT) <br />
                      • Delivery outside Dhaka: 3–5 Days (150 BDT) <br />• 7-day
                      exchange window for sizing adjustments.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
