import React, { useState } from "react";

// মার্জিত মেল মডেল ও ফুল-বডি স্ট্রিটওয়্যার আউটফিট ইমেজ
const lookbookData = [
  {
    id: 1,
    title: "URBAN SILHOUETTE VOL. 1",
    subtitle: "LOOK #1",
    image:
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "URBAN SILHOUETTE VOL. 2",
    subtitle: "LOOK #2",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "URBAN SILHOUETTE VOL. 3",
    subtitle: "LOOK #3",
    image:
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "URBAN SILHOUETTE VOL. 4",
    subtitle: "LOOK #4",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "URBAN SILHOUETTE VOL. 5",
    subtitle: "LOOK #5",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "URBAN SILHOUETTE VOL. 6",
    subtitle: "LOOK #6",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
];

const Lookbook = ({ onBackHome }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      {/* CSS Effects for Image Positioning & Hover Animations */}
      <style>{`
        .lookbook-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 480px; /* কার্ডের হাইট বাড়িয়ে ডাইনামিক ফিল্ড নিশ্চিত করা হয়েছে */
          cursor: pointer;
          transition: border-color 0.3s ease, transform 0.3s ease;
          background-color: #18181b;
        }

        .lookbook-item:hover {
          border-color: #e63946;
          transform: translateY(-6px);
        }

        .lookbook-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center; /* ছবি যেন মাথা কেটে না যায় এবং ওপর থেকে পারফেক্টলি সেট হয় */
          display: block;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .lookbook-item:hover .lookbook-img {
          transform: scale(1.06);
        }

        .lookbook-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            transparent 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          transition: background 0.3s ease;
        }

        .lookbook-item:hover .lookbook-overlay {
          background: linear-gradient(
            to top,
            rgba(230, 57, 70, 0.85) 0%,
            rgba(0, 0, 0, 0.3) 60%,
            transparent 100%
          );
        }

        .btn-hover {
          transition: all 0.3s ease;
        }
        .btn-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(230, 57, 70, 0.5);
        }
      `}</style>

      <div
        style={{ maxWidth: "1250px", margin: "0 auto", padding: "60px 20px" }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "900",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            LOOKBOOK 2026<span style={{ color: "#e63946" }}>.</span>
          </h1>
          <p style={{ color: "#a1a1aa", maxWidth: "550px", margin: "0 auto" }}>
            Visual aesthetic catalog for Zenji Streetwear collection. Click on
            any look to view full-size outfit details.
          </p>
        </div>

        {/* Grid Gallery */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {lookbookData.map((item) => (
            <div
              key={item.id}
              className="lookbook-item"
              onClick={() => setSelectedImg(item.image)}
            >
              <img src={item.image} alt={item.title} className="lookbook-img" />
              <div className="lookbook-overlay">
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "#f4f4f5",
                    fontWeight: "700",
                    letterSpacing: "1px",
                  }}
                >
                  {item.subtitle}
                </span>
                <span
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: "800",
                    color: "#fff",
                    marginTop: "4px",
                  }}
                >
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Home Button */}
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button onClick={onBackHome} className="btn-hover" style={btnStyle}>
            BACK TO HOME
          </button>
        </div>
      </div>

      {/* Lightbox / Modal for Full Preview */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            padding: "20px",
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImg}
            alt="Full Look Preview"
            style={{
              maxWidth: "90%",
              maxHeight: "88vh",
              borderRadius: "8px",
              boxShadow: "0 0 35px rgba(230, 57, 70, 0.4)",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </>
  );
};

const btnStyle = {
  padding: "12px 28px",
  backgroundColor: "var(--color-primary, #e63946)",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "700",
  letterSpacing: "1px",
};

export default Lookbook;
