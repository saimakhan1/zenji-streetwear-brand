// import React from "react";
// import ProductCard from "../components/UI/ProductCard";

// import zp1 from "../assets/products/zp1.png";
// import zp1Back from "../assets/products/zp1-back.png";
// import zp2 from "../assets/products/zp2.png";
// import zp2Back from "../assets/products/zp2-back.png";
// import zp3 from "../assets/products/zp3.png";
// import zp3Back from "../assets/products/zp3-back.png";
// import zp4 from "../assets/products/zp4.png";
// import zp4Back from "../assets/products/zp4-back.png";

// const fullCatalog = [
//   {
//     id: 1,
//     name: "BLUE FLAME GOJO TEE",
//     price: "85",
//     tag: "Heavyweight Cotton",
//     description: "Blue ink-wash Gojo print with back kanji.",
//     image: zp1,
//     backImage: zp1Back,
//   },
//   {
//     id: 2,
//     name: "BUSHIDO SAMURAI TEE",
//     price: "90",
//     tag: "Oversized Fit",
//     description: "Minimalist cream tee with front warrior art.",
//     image: zp2,
//     backImage: zp2Back,
//   },
//   {
//     id: 3,
//     name: "NEZUKO BLOOD DEMON TEE",
//     price: "85",
//     tag: "Limited Drop",
//     description: "Vibrant pink oversized shirt with Japanese ink motif.",
//     image: zp3,
//     backImage: zp3Back,
//   },
//   {
//     id: 4,
//     name: "VOID EXPANSION PURPLE TEE",
//     price: "95",
//     tag: "Premium Drop",
//     description: "Deep purple oversized graphic tee with back artwork.",
//     image: zp4,
//     backImage: zp4Back,
//   },
//   {
//     id: 5,
//     name: "BUSHIDO SAMURAI TEE (ALT)",
//     price: "90",
//     tag: "Oversized Fit",
//     description: "Alternative batch printing with dark samurai aesthetic.",
//     image: zp2,
//     backImage: zp2Back,
//   },
//   {
//     id: 6,
//     name: "BLUE FLAME SPECIAL EDITION",
//     price: "110",
//     tag: "Exclusive",
//     description: "Collector's edition Gojo graphic print.",
//     image: zp1,
//     backImage: zp1Back,
//   },
// ];

// const ShopCollection = ({ onBackHome }) => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#09090b",
//         minHeight: "100vh",
//         padding: "100px 40px",
//       }}
//     >
//       <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
//         <button
//           onClick={onBackHome}
//           style={{
//             background: "none",
//             border: "none",
//             color: "var(--color-primary, #e63946)",
//             fontSize: "0.9rem",
//             fontWeight: "800",
//             cursor: "pointer",
//             marginBottom: "20px",
//           }}
//         >
//           ← BACK TO HOME
//         </button>

//         <h1
//           style={{
//             color: "#ffffff",
//             fontSize: "3rem",
//             fontWeight: "900",
//             marginBottom: "40px",
//           }}
//         >
//           ALL COLLECTIONS ({fullCatalog.length})
//         </h1>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "30px",
//           }}
//         >
//           {fullCatalog.map((p) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopCollection;

import React from "react";
import ProductCard from "../components/UI/ProductCard";

import zp1 from "../assets/products/zp1.png";
import zp1Back from "../assets/products/zp1-back.png";
import zp2 from "../assets/products/zp2.png";
import zp2Back from "../assets/products/zp2-back.png";
import zp3 from "../assets/products/zp3.png";
import zp3Back from "../assets/products/zp3-back.png";
import zp4 from "../assets/products/zp4.png";
import zp4Back from "../assets/products/zp4-back.png";

const fullCatalog = [
  {
    id: 1,
    name: "BLUE FLAME GOJO TEE",
    price: "85",
    tag: "Heavyweight Cotton",
    description: "Blue ink-wash Gojo print with back kanji.",
    image: zp1,
    backImage: zp1Back,
  },
  {
    id: 2,
    name: "BUSHIDO SAMURAI TEE",
    price: "90",
    tag: "Oversized Fit",
    description: "Minimalist cream tee with front warrior art.",
    image: zp2,
    backImage: zp2Back,
  },
  {
    id: 3,
    name: "NEZUKO BLOOD DEMON TEE",
    price: "85",
    tag: "Limited Drop",
    description: "Vibrant pink oversized shirt with Japanese ink motif.",
    image: zp3,
    backImage: zp3Back,
  },
  {
    id: 4,
    name: "VOID EXPANSION PURPLE TEE",
    price: "95",
    tag: "Premium Drop",
    description: "Deep purple oversized graphic tee with back artwork.",
    image: zp4,
    backImage: zp4Back,
  },
  {
    id: 5,
    name: "BUSHIDO SAMURAI TEE (ALT)",
    price: "90",
    tag: "Oversized Fit",
    description: "Alternative batch printing with dark samurai aesthetic.",
    image: zp2,
    backImage: zp2Back,
  },
  {
    id: 6,
    name: "BLUE FLAME SPECIAL EDITION",
    price: "110",
    tag: "Exclusive",
    description: "Collector's edition Gojo graphic print.",
    image: zp1,
    backImage: zp1Back,
  },
];

const ShopCollection = ({ onBackHome }) => {
  return (
    <div
      style={{
        backgroundColor: "#09090b",
        minHeight: "100vh",
        padding: "100px 40px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <button
          onClick={onBackHome}
          style={{
            background: "none",
            border: "none",
            color: "var(--color-primary, #e63946)",
            fontSize: "0.9rem",
            fontWeight: "800",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ← BACK TO HOME
        </button>

        <h1
          style={{
            color: "#ffffff",
            fontSize: "3rem",
            fontWeight: "900",
            marginBottom: "40px",
          }}
        >
          ALL COLLECTIONS ({fullCatalog.length})
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {fullCatalog.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;
