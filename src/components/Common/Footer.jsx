// import React from "react";

// const Footer = () => {
//   return (
//     <footer
//       style={{
//         backgroundColor: "#09090b",
//         color: "#a1a1aa",
//         borderTop: "1px solid rgba(255,255,255,0.08)",
//         paddingTop: "70px",
//         paddingBottom: "30px",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1400px",
//           margin: "0 auto",
//           padding: "0 40px",
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//           gap: "40px",
//           marginBottom: "50px",
//         }}
//       >
//         {/* Column 1: Brand Info */}
//         <div>
//           <h2
//             style={{
//               color: "#fff",
//               fontSize: "1.8rem",
//               fontWeight: "900",
//               letterSpacing: "2px",
//               marginBottom: "16px",
//             }}
//           >
//             ZENJI<span style={{ color: "var(--color-primary)" }}>.</span>
//           </h2>
//           <p
//             style={{
//               fontSize: "0.88rem",
//               lineHeight: "1.6",
//               marginBottom: "20px",
//             }}
//           >
//             High-end anime-inspired streetwear tailored for modest, modern
//             oversized culture.
//           </p>
//           <div style={{ display: "flex", gap: "15px", color: "#fff" }}>
//             {["INSTAGRAM", "DISCORD", "TWITTER"].map((social) => (
//               <a
//                 key={social}
//                 href="#"
//                 style={{
//                   color: "#a1a1aa",
//                   fontSize: "0.75rem",
//                   fontWeight: "800",
//                   textDecoration: "none",
//                   letterSpacing: "1px",
//                   transition: "color 0.2s",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.target.style.color = "var(--color-primary)")
//                 }
//                 onMouseLeave={(e) => (e.target.style.color = "#a1a1aa")}
//               >
//                 {social}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Column 2: Quick Links */}
//         <div>
//           <h4
//             style={{
//               color: "#fff",
//               fontSize: "0.95rem",
//               fontWeight: "800",
//               letterSpacing: "2px",
//               textTransform: "uppercase",
//               marginBottom: "20px",
//             }}
//           >
//             NAVIGATION
//           </h4>
//           <ul
//             style={{
//               listStyle: "none",
//               padding: 0,
//               margin: 0,
//               display: "flex",
//               flexDirection: "column",
//               gap: "10px",
//             }}
//           >
//             {[
//               "NEW DROPS",
//               "COLLECTIONS",
//               "LOOKBOOK",
//               "OUR STORY",
//               "ARCHIVE",
//             ].map((item) => (
//               <li key={item}>
//                 <a
//                   href="#"
//                   style={{
//                     color: "#a1a1aa",
//                     textDecoration: "none",
//                     fontSize: "0.88rem",
//                     transition: "color 0.2s",
//                   }}
//                   onMouseEnter={(e) => (e.target.style.color = "#fff")}
//                   onMouseLeave={(e) => (e.target.style.color = "#a1a1aa")}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 3: Help & Support */}
//         <div>
//           <h4
//             style={{
//               color: "#fff",
//               fontSize: "0.95rem",
//               fontWeight: "800",
//               letterSpacing: "2px",
//               textTransform: "uppercase",
//               marginBottom: "20px",
//             }}
//           >
//             CUSTOMER HELP
//           </h4>
//           <ul
//             style={{
//               listStyle: "none",
//               padding: 0,
//               margin: 0,
//               display: "flex",
//               flexDirection: "column",
//               gap: "10px",
//             }}
//           >
//             {[
//               "ORDER TRACKING",
//               "SHIPPING POLICY",
//               "RETURNS & EXCHANGES",
//               "SIZE GUIDE",
//               "FAQ & CONTACT",
//             ].map((item) => (
//               <li key={item}>
//                 <a
//                   href="#"
//                   style={{
//                     color: "#a1a1aa",
//                     textDecoration: "none",
//                     fontSize: "0.88rem",
//                     transition: "color 0.2s",
//                   }}
//                   onMouseEnter={(e) => (e.target.style.color = "#fff")}
//                   onMouseLeave={(e) => (e.target.style.color = "#a1a1aa")}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 4: Legal Information */}
//         <div>
//           <h4
//             style={{
//               color: "#fff",
//               fontSize: "0.95rem",
//               fontWeight: "800",
//               letterSpacing: "2px",
//               textTransform: "uppercase",
//               marginBottom: "20px",
//             }}
//           >
//             LEGAL
//           </h4>
//           <ul
//             style={{
//               listStyle: "none",
//               padding: 0,
//               margin: 0,
//               display: "flex",
//               flexDirection: "column",
//               gap: "10px",
//             }}
//           >
//             {[
//               "TERMS OF SERVICE",
//               "PRIVACY POLICY",
//               "COOKIE PREFERENCES",
//               "REFUND POLICY",
//             ].map((item) => (
//               <li key={item}>
//                 <a
//                   href="#"
//                   style={{
//                     color: "#a1a1aa",
//                     textDecoration: "none",
//                     fontSize: "0.88rem",
//                     transition: "color 0.2s",
//                   }}
//                   onMouseEnter={(e) => (e.target.style.color = "#fff")}
//                   onMouseLeave={(e) => (e.target.style.color = "#a1a1aa")}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 5: Newsletter */}
//         <div>
//           <h4
//             style={{
//               color: "#fff",
//               fontSize: "0.95rem",
//               fontWeight: "800",
//               letterSpacing: "2px",
//               textTransform: "uppercase",
//               marginBottom: "20px",
//             }}
//           >
//             JOIN THE CLUB
//           </h4>
//           <p style={{ fontSize: "0.85rem", marginBottom: "15px" }}>
//             Subscribe to get secret drop links before launch.
//           </p>
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             style={{ display: "flex", flexDirection: "column", gap: "10px" }}
//           >
//             <input
//               type="email"
//               placeholder="ENTER YOUR EMAIL"
//               style={{
//                 backgroundColor: "#18181b",
//                 border: "1px solid rgba(255,255,255,0.15)",
//                 padding: "12px 14px",
//                 color: "#fff",
//                 borderRadius: "4px",
//                 outline: "none",
//                 fontSize: "0.85rem",
//               }}
//             />
//             <button
//               type="submit"
//               style={{
//                 backgroundColor: "var(--color-primary)",
//                 color: "#fff",
//                 border: "none",
//                 padding: "12px",
//                 fontWeight: "800",
//                 letterSpacing: "2px",
//                 textTransform: "uppercase",
//                 cursor: "pointer",
//                 borderRadius: "4px",
//                 fontSize: "0.8rem",
//               }}
//             >
//               SUBSCRIBE
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Copyright Line */}
//       <div
//         style={{
//           borderTop: "1px solid rgba(255,255,255,0.05)",
//           paddingTop: "25px",
//           textAlign: "center",
//           fontSize: "0.8rem",
//           color: "#71717a",
//         }}
//       >
//         © {new Date().getFullYear()} ZENJI.SHOP — ALL RIGHTS RESERVED.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

// Social Media Icons (Inline SVGs)
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.32 1.55-1.36 2.55-.06 1.25.64 2.47 1.74 3.02 1.01.52 2.27.47 3.23-.13.88-.54 1.42-1.51 1.45-2.54.04-4.86.02-9.71.02-14.58z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Custom Brand Styling Definition
const socialLinks = [
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    url: "https://instagram.com",
    background:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
    color: "#ffffff",
  },
  {
    name: "TikTok",
    icon: <TikTokIcon />,
    url: "https://tiktok.com",
    background: "#ffffff",
    color: "#000000",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    url: "https://facebook.com",
    background: "#1877F2",
    color: "#ffffff",
  },
];

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#09090b",
        color: "#a1a1aa",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingTop: "70px",
        paddingBottom: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          marginBottom: "50px",
        }}
      >
        {/* Column 1: Brand Info & Themed Social Buttons */}
        <div>
          <h2
            style={{
              color: "#fff",
              fontSize: "1.8rem",
              fontWeight: "900",
              letterSpacing: "2px",
              marginBottom: "16px",
            }}
          >
            ZENJI
            <span style={{ color: "var(--color-primary, #e63946)" }}>.</span>
          </h2>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: "1.6",
              marginBottom: "24px",
            }}
          >
            High-end anime-inspired streetwear tailored for modest, modern
            oversized culture.
          </p>

          {/* Styled Social Badges */}
          <div style={{ display: "flex", gap: "12px" }}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                title={social.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "42px",
                  height: "42px",
                  borderRadius: "8px",
                  background: social.background,
                  color: social.color,
                  border: "none",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  textDecoration: "none",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 15px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.3)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4
            style={{
              color: "#fff",
              fontSize: "0.95rem",
              fontWeight: "800",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            NAVIGATION
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              "NEW DROPS",
              "COLLECTIONS",
              "LOOKBOOK",
              "OUR STORY",
              "ARCHIVE",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  style={{
                    color: "#a1a1aa",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "#a1a1aa")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Help & Support */}
        <div>
          <h4
            style={{
              color: "#fff",
              fontSize: "0.95rem",
              fontWeight: "800",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            CUSTOMER HELP
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              "ORDER TRACKING",
              "SHIPPING POLICY",
              "RETURNS & EXCHANGES",
              "SIZE GUIDE",
              "FAQ & CONTACT",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  style={{
                    color: "#a1a1aa",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "#a1a1aa")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Legal Information */}
        <div>
          <h4
            style={{
              color: "#fff",
              fontSize: "0.95rem",
              fontWeight: "800",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            LEGAL
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              "TERMS OF SERVICE",
              "PRIVACY POLICY",
              "COOKIE PREFERENCES",
              "REFUND POLICY",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  style={{
                    color: "#a1a1aa",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "#a1a1aa")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Newsletter */}
        <div>
          <h4
            style={{
              color: "#fff",
              fontSize: "0.95rem",
              fontWeight: "800",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            JOIN THE CLUB
          </h4>
          <p style={{ fontSize: "0.85rem", marginBottom: "15px" }}>
            Subscribe to get secret drop links before launch.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              style={{
                backgroundColor: "#18181b",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "12px 14px",
                color: "#fff",
                borderRadius: "4px",
                outline: "none",
                fontSize: "0.85rem",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "var(--color-primary, #e63946)",
                color: "#fff",
                border: "none",
                padding: "12px",
                fontWeight: "800",
                letterSpacing: "2px",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "4px",
                fontSize: "0.8rem",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Line */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "25px",
          textAlign: "center",
          fontSize: "0.8rem",
          color: "#71717a",
        }}
      >
        © {new Date().getFullYear()} ZENJI.SHOP — ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
