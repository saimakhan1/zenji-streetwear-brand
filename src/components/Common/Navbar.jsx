import React, { useState, useEffect, useRef } from "react";

const Navbar = ({ onNavigate, currentPage = "HOME" }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  const activeKey = (currentPage || "HOME").toString().toUpperCase().trim();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleLinkClick = (e, pageKey, extraParams = {}) => {
    if (e) e.preventDefault();
    setDropdownOpen(false);
    setMobileMenuOpen(false);
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
    if (searchQuery.trim() && onNavigate) {
      onNavigate("SEARCH", { query: searchQuery });
    }
    setSearchOpen(false);
    setMobileMenuOpen(false);
    setSearchQuery("");
  };

  const menuItems = ["HOME", "DROP", "COLLECTION", "LOOKBOOK", "OUR STORY"];
  const subMenuItems = ["COLLABORATION", "REVIEW", "FAQ"];

  return (
    <>
      <style>{`
        .desktop-nav {
          display: flex;
        }
        .mobile-hamburger {
          display: none;
        }
        .mobile-menu-drawer {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
          .mobile-menu-drawer {
            display: flex !important;
          }
          .nav-header-container {
            padding: 14px 20px !important;
          }
        }
      `}</style>

      <header
        className="glass-nav nav-header-container"
        style={{
          width: "100%",
          padding: "18px 40px",
          position: "sticky",
          top: 0,
          zIndex: 9999,
          overflow: "visible",
          backgroundColor: "rgba(9, 9, 11, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
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
                fontSize: "2.8rem",
                fontWeight: "900",
                letterSpacing: "3px",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              ZENJI
              <span style={{ color: "var(--color-primary, #e63946)" }}>.</span>
            </h1>
          </a>

          {/* Desktop Menu Navigation */}
          <nav
            className="desktop-nav"
            style={{
              gap: "30px",
              alignItems: "center",
              overflow: "visible",
            }}
          >
            {menuItems.map((item) => {
              const isActive = activeKey === item;
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={(e) => handleLinkClick(e, item)}
                  className="nav-link"
                  style={{
                    color: isActive
                      ? "var(--color-primary, #e63946)"
                      : "#f4f4f5",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    transition: "all 0.2s ease",
                    paddingBottom: "4px",
                    borderBottom: isActive
                      ? "2px solid var(--color-primary, #e63946)"
                      : "2px solid transparent",
                  }}
                >
                  {item}
                </a>
              );
            })}

            {/* Dropdown Menu */}
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
                aria-expanded={dropdownOpen}
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  padding: 0,
                  cursor: "pointer",
                  color:
                    dropdownOpen || subMenuItems.includes(activeKey)
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
                  {subMenuItems.map((subItem) => {
                    const isSubActive = activeKey === subItem;
                    return (
                      <a
                        key={subItem}
                        href={`#${subItem.toLowerCase()}`}
                        onClick={(e) => handleLinkClick(e, subItem)}
                        className="dropdown-link"
                        style={{
                          padding: "10px 20px",
                          color: isSubActive
                            ? "var(--color-primary, #e63946)"
                            : "#a1a1aa",
                          textDecoration: "none",
                          fontSize: "0.85rem",
                          fontWeight: "600",
                          transition: "all 0.2s ease",
                          display: "block",
                          backgroundColor: isSubActive
                            ? "rgba(230, 57, 70, 0.1)"
                            : "transparent",
                        }}
                      >
                        {subItem}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Action Controls */}
          <div style={{ display: "flex", gap: "22px", alignItems: "center" }}>
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

            {/* Heart Icon (Wishlist) */}
            <button
              onClick={(e) =>
                handleLinkClick(e, "LOGIN", {
                  message: "Please login to add items to your wishlist",
                })
              }
              style={{
                background: "none",
                border: "none",
                color:
                  activeKey === "WISHLIST"
                    ? "var(--color-primary, #e63946)"
                    : "#fff",
                cursor: "pointer",
                fontSize: "1.2rem",
              }}
              title="Wishlist"
            >
              ♡
            </button>

            {/* Cart Icon */}
            <button
              onClick={(e) =>
                handleLinkClick(e, "LOGIN", {
                  message: "Please login to view your cart",
                })
              }
              style={{
                background: "none",
                border: "none",
                color:
                  activeKey === "CART"
                    ? "var(--color-primary, #e63946)"
                    : "#fff",
                cursor: "pointer",
                fontSize: "1.2rem",
              }}
              title="Cart"
            >
              🛒
            </button>

            {/* Account Icon */}
            <button
              onClick={(e) => handleLinkClick(e, "LOGIN")}
              style={{
                background: "none",
                border: "none",
                color:
                  activeKey === "LOGIN"
                    ? "var(--color-primary, #e63946)"
                    : "#fff",
                cursor: "pointer",
                fontSize: "1.2rem",
              }}
              title="Account"
            >
              👤
            </button>

            {/* Hamburger Toggle Button (Mobile Only) */}
            <button
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "1.5rem",
                cursor: "pointer",
                padding: 0,
                marginLeft: "4px",
              }}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Mobile Slide-down Drawer Menu */}
        {mobileMenuOpen && (
          <div
            className="mobile-menu-drawer"
            style={{
              flexDirection: "column",
              backgroundColor: "#09090b",
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              padding: "20px 30px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.9)",
              gap: "16px",
              zIndex: 9998,
            }}
          >
            {menuItems.map((item) => {
              const isActive = activeKey === item;
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={(e) => handleLinkClick(e, item)}
                  style={{
                    color: isActive
                      ? "var(--color-primary, #e63946)"
                      : "#f4f4f5",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: "700",
                    letterSpacing: "1px",
                  }}
                >
                  {item}
                </a>
              );
            })}

            <div
              style={{
                height: "1px",
                backgroundColor: "rgba(255,255,255,0.1)",
                margin: "5px 0",
              }}
            />

            {subMenuItems.map((subItem) => {
              const isSubActive = activeKey === subItem;
              return (
                <a
                  key={subItem}
                  href={`#${subItem.toLowerCase()}`}
                  onClick={(e) => handleLinkClick(e, subItem)}
                  style={{
                    color: isSubActive
                      ? "var(--color-primary, #e63946)"
                      : "#a1a1aa",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    paddingLeft: "10px",
                  }}
                >
                  {subItem}
                </a>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
