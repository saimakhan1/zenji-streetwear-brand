// import React, { useState, useEffect, useRef } from "react";

// const Navbar = ({ onNavigate }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLinkClick = (e, pageKey) => {
//     e.preventDefault();
//     setDropdownOpen(false);
//     if (onNavigate) {
//       onNavigate(pageKey);
//     }
//   };

//   const handleDropdownToggle = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDropdownOpen((prev) => !prev);
//   };

//   return (
//     <header
//       className="glass-nav"
//       style={{
//         width: "100%",
//         padding: "18px 40px",
//         position: "relative",
//         zIndex: 9999, // Layer height updated so hero section cannot overlap dropdown
//         overflow: "visible", // Ensures menu is not clipped
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           maxWidth: "1400px",
//           margin: "0 auto",
//           position: "relative",
//           overflow: "visible",
//         }}
//       >
//         {/* Brand Logo */}
//         <a
//           href="#home"
//           onClick={(e) => handleLinkClick(e, "HOME")}
//           style={{ textDecoration: "none" }}
//         >
//           <h1
//             style={{
//               color: "#fff",
//               fontSize: "2rem",
//               fontWeight: "900",
//               letterSpacing: "3px",
//               textTransform: "uppercase",
//             }}
//           >
//             ZENJI
//             <span style={{ color: "var(--color-primary, #e63946)" }}>.</span>
//           </h1>
//         </a>

//         {/* Menu Navigation */}
//         <nav
//           style={{
//             display: "flex",
//             gap: "30px",
//             alignItems: "center",
//             overflow: "visible",
//           }}
//         >
//           {["HOME", "DROP", "COLLECTION", "LOOKBOOK", "OUR STORY"].map(
//             (item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
//                 onClick={(e) => handleLinkClick(e, item)}
//                 style={{
//                   color: "#f4f4f5",
//                   textDecoration: "none",
//                   fontSize: "0.9rem",
//                   fontWeight: "700",
//                   letterSpacing: "1px",
//                   transition: "color 0.2s ease",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.target.style.color = "var(--color-primary, #e63946)")
//                 }
//                 onMouseLeave={(e) => (e.target.style.color = "#f4f4f5")}
//               >
//                 {item}
//               </a>
//             ),
//           )}

//           {/* Dropdown Menu (MORE on Click) */}
//           <div
//             ref={dropdownRef}
//             style={{
//               position: "relative",
//               padding: "10px 0",
//               overflow: "visible",
//             }}
//           >
//             <button
//               onClick={handleDropdownToggle}
//               style={{
//                 background: "none",
//                 border: "none",
//                 outline: "none",
//                 padding: 0,
//                 cursor: "pointer",
//                 color: dropdownOpen
//                   ? "var(--color-primary, #e63946)"
//                   : "#f4f4f5",
//                 fontSize: "0.9rem",
//                 fontWeight: "700",
//                 letterSpacing: "1px",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "6px",
//                 transition: "color 0.2s",
//               }}
//             >
//               MORE{" "}
//               <span
//                 style={{
//                   fontSize: "0.6rem",
//                   transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
//                   transition: "transform 0.2s ease",
//                   display: "inline-block",
//                 }}
//               >
//                 ▼
//               </span>
//             </button>

//             {dropdownOpen && (
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "calc(100% + 10px)",
//                   right: 0,
//                   backgroundColor: "#18181b",
//                   border: "1px solid rgba(255,255,255,0.15)",
//                   borderRadius: "8px",
//                   padding: "8px 0",
//                   minWidth: "170px",
//                   boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
//                   display: "flex",
//                   flexDirection: "column",
//                   zIndex: 10000,
//                 }}
//               >
//                 {["COLLABORATION", "REVIEW", "FAQ"].map((subItem) => (
//                   <a
//                     key={subItem}
//                     href={`#${subItem.toLowerCase()}`}
//                     onClick={(e) => handleLinkClick(e, subItem)}
//                     style={{
//                       padding: "10px 20px",
//                       color: "#a1a1aa",
//                       textDecoration: "none",
//                       fontSize: "0.85rem",
//                       fontWeight: "600",
//                       transition: "all 0.2s ease",
//                       display: "block",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.target.style.color = "#ffffff";
//                       e.target.style.backgroundColor =
//                         "var(--color-primary, #e63946)";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.color = "#a1a1aa";
//                       e.target.style.backgroundColor = "transparent";
//                     }}
//                   >
//                     {subItem}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Action Controls / Icons */}
//         <div style={{ display: "flex", gap: "22px", alignItems: "center" }}>
//           <button
//             style={{
//               background: "none",
//               border: "none",
//               color: "#fff",
//               cursor: "pointer",
//               fontSize: "1.2rem",
//             }}
//             title="Search"
//           >
//             🔍
//           </button>
//           <button
//             style={{
//               background: "none",
//               border: "none",
//               color: "#fff",
//               cursor: "pointer",
//               fontSize: "1.2rem",
//             }}
//             title="Wishlist"
//           >
//             ♡
//           </button>
//           <button
//             style={{
//               background: "none",
//               border: "none",
//               color: "#fff",
//               cursor: "pointer",
//               fontSize: "1.2rem",
//             }}
//             title="Account"
//           >
//             👤
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";

const Navbar = ({ onNavigate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (e, pageKey, extraParams = {}) => {
    if (e) e.preventDefault();
    setDropdownOpen(false);
    if (onNavigate) {
      onNavigate(pageKey, extraParams);
    }
  };

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchOpen(false);
  };

  return (
    <header
      className="glass-nav"
      style={{
        width: "100%",
        padding: "18px 40px",
        position: "relative",
        zIndex: 9999,
        overflow: "visible",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "HOME")}
          style={{ textDecoration: "none" }}
        >
          <h1
            style={{
              color: "#fff",
              fontSize: "2rem",
              fontWeight: "900",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            ZENJI
            <span style={{ color: "var(--color-primary, #e63946)" }}>.</span>
          </h1>
        </a>

        {/* Menu Navigation */}
        <nav
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            overflow: "visible",
          }}
        >
          {["HOME", "DROP", "COLLECTION", "LOOKBOOK", "OUR STORY"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => handleLinkClick(e, item)}
                style={{
                  color: "#f4f4f5",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "var(--color-primary, #e63946)")
                }
                onMouseLeave={(e) => (e.target.style.color = "#f4f4f5")}
              >
                {item}
              </a>
            ),
          )}

          {/* Dropdown Menu (MORE on Click) */}
          <div
            ref={dropdownRef}
            style={{
              position: "relative",
              padding: "10px 0",
              overflow: "visible",
            }}
          >
            <button
              onClick={handleDropdownToggle}
              style={{
                background: "none",
                border: "none",
                outline: "none",
                padding: 0,
                cursor: "pointer",
                color: dropdownOpen
                  ? "var(--color-primary, #e63946)"
                  : "#f4f4f5",
                fontSize: "0.9rem",
                fontWeight: "700",
                letterSpacing: "1px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.2s",
              }}
            >
              MORE{" "}
              <span
                style={{
                  fontSize: "0.6rem",
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                }}
              >
                ▼
              </span>
            </button>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  right: 0,
                  backgroundColor: "#18181b",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "8px",
                  padding: "8px 0",
                  minWidth: "170px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
                  display: "flex",
                  flexDirection: "column",
                  zIndex: 10000,
                }}
              >
                {["COLLABORATION", "REVIEW", "FAQ"].map((subItem) => (
                  <a
                    key={subItem}
                    href={`#${subItem.toLowerCase()}`}
                    onClick={(e) => handleLinkClick(e, subItem)}
                    style={{
                      padding: "10px 20px",
                      color: "#a1a1aa",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      transition: "all 0.2s ease",
                      display: "block",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#ffffff";
                      e.target.style.backgroundColor =
                        "var(--color-primary, #e63946)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#a1a1aa";
                      e.target.style.backgroundColor = "transparent";
                    }}
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Action Controls / Icons */}
        <div style={{ display: "flex", gap: "22px", alignItems: "center" }}>
          {/* Search Icon & Toggle */}
          <button
            onClick={() => setSearchOpen((prev) => !prev)}
            style={{
              background: "none",
              border: "none",
              color: searchOpen ? "var(--color-primary, #e63946)" : "#fff",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
            title="Search"
          >
            🔍
          </button>

          {/* Wishlist Icon (Redirects to Login with message) */}
          <button
            onClick={(e) =>
              handleLinkClick(e, "LOGIN", {
                message: "Please login to make it favorite",
              })
            }
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
            title="Wishlist"
          >
            ♡
          </button>

          {/* Cart Icon (Redirects to Login with message) */}
          <button
            onClick={(e) =>
              handleLinkClick(e, "LOGIN", {
                message: "Please login to view your cart",
              })
            }
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
            title="Cart"
          >
            🛒
          </button>

          {/* User Icon (Redirects to Login) */}
          <button
            onClick={(e) => handleLinkClick(e, "LOGIN")}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
            title="Account"
          >
            👤
          </button>
        </div>
      </div>

      {/* Expandable Search Input Bar */}
      {searchOpen && (
        <div
          style={{
            maxWidth: "1400px",
            margin: "15px auto 0 auto",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <form
            onSubmit={handleSearchSubmit}
            style={{
              display: "flex",
              width: "100%",
              maxWidth: "350px",
              backgroundColor: "#18181b",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "20px",
              padding: "4px 12px",
            }}
          >
            <input
              type="text"
              placeholder="Search products..."
              autoFocus
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                width: "100%",
                padding: "6px",
                fontSize: "0.85rem",
              }}
            />
            <button
              type="submit"
              style={{
                background: "none",
                border: "none",
                color: "#a1a1aa",
                cursor: "pointer",
                padding: "0 4px",
              }}
            >
              ➔
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;
