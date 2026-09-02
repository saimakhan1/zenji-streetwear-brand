// import React, { useState } from "react";

// const ProductCard = ({ product }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       style={{
//         background: "var(--color-bg-card)",
//         borderRadius: "12px",
//         overflow: "hidden",
//         position: "relative",
//         border: "1px solid rgba(255, 255, 255, 0.08)",
//         transition: "transform 0.3s ease",
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div
//         style={{ position: "relative", height: "360px", overflow: "hidden" }}
//       >
//         <img
//           src={product.image}
//           alt={product.name}
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             transition: "transform 0.5s ease",
//             transform: hovered ? "scale(1.08)" : "scale(1)",
//           }}
//         />

//         {/* Hover Overlay from Bottom */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             right: 0,
//             backgroundColor: "rgba(220, 38, 38, 0.95)",
//             padding: "14px",
//             textAlign: "center",
//             cursor: "pointer",
//             transform: hovered ? "translateY(0)" : "translateY(100%)",
//             transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
//           }}
//           onClick={() => alert(`Navigating to ${product.name} Details`)}
//         >
//           <span
//             style={{
//               color: "#fff",
//               fontWeight: "900",
//               letterSpacing: "2px",
//               fontSize: "0.85rem",
//               textTransform: "uppercase",
//             }}
//           >
//             QUICK REVIEW →
//           </span>
//         </div>
//       </div>

//       <div style={{ padding: "20px" }}>
//         <h4
//           style={{
//             fontSize: "1.05rem",
//             fontWeight: "800",
//             color: "#fff",
//             marginBottom: "8px",
//           }}
//         >
//           {product.name}
//         </h4>
//         <p
//           style={{
//             color: "var(--color-primary)",
//             fontWeight: "800",
//             fontSize: "1.1rem",
//           }}
//         >
//           ${product.price} AUD
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        background: "#121215",
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        transition: "transform 0.3s ease, border-color 0.3s ease",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        borderColor: isHovered
          ? "var(--color-primary, #e63946)"
          : "rgba(255, 255, 255, 0.08)",
        cursor: "pointer",
      }}
    >
      {/* Image Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "380px",
          overflow: "hidden",
        }}
      >
        <img
          src={isHovered ? product.backImage : product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Quick View Bar (Slides Up on Hover) */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(9, 9, 11, 0.9)",
            color: "#ffffff",
            textAlign: "center",
            padding: "12px 0",
            fontWeight: "800",
            fontSize: "0.85rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
            transform: isHovered ? "translateY(0)" : "translateY(100%)",
            transition: "transform 0.3s ease-in-out",
            borderTop: "2px solid var(--color-primary, #e63946)",
          }}
        >
          Quick View
        </div>
      </div>

      {/* Details Container */}
      <div style={{ padding: "18px 16px" }}>
        <h4
          style={{
            color: "#ffffff",
            fontSize: "1.1rem",
            fontWeight: "800",
            marginBottom: "6px",
          }}
        >
          {product.name}
        </h4>
        <p
          style={{
            color: "#a1a1aa",
            fontSize: "0.82rem",
            marginBottom: "12px",
            height: "36px",
            overflow: "hidden",
          }}
        >
          {product.description}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "var(--color-primary, #e63946)",
              fontWeight: "900",
              fontSize: "1.2rem",
            }}
          >
            ${product.price}
          </span>
          <span
            style={{
              color: "#71717a",
              fontSize: "0.75rem",
              textTransform: "uppercase",
            }}
          >
            {product.tag}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
