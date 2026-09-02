import React, { useState } from "react";

// ৩টি প্রোডাক্টের জন্যই সিঙ্গেল মডেল বা সিঙ্গেল ಕ್ലോথিং সেট-এর হাই-কোয়ালিটি ইমেজ
const dropsData = [
  {
    id: "drop-01",
    title: "CYBER HOODIE v2",
    release: "LIVE NOW",
    price: "BDT 3,850",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    desc: "480 GSM French Terry Cotton. Custom oversized fit with high-density puff print back graphic.",
  },
  {
    id: "drop-02",
    title: "ACID WASH OVERSIZED TEE",
    release: "LIVE NOW",
    price: "BDT 1,650",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    desc: "240 GSM Premium Organic Cotton. Hand-dyed vintage acid wash texture with dropped shoulders.",
  },
  {
    id: "drop-03",
    title: "TACTICAL CARGO PANTS",
    release: "LIMITED RESTOCK",
    price: "BDT 2,950",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    desc: "Heavyweight ripstop fabric, 3D utility cargo pockets, and adjustable ankle cinch straps.",
  },
];

const Drop = ({ onBackHome, onNavigate }) => {
  const [clickedId, setClickedId] = useState(null);

  const handleBuyNow = (dropItem) => {
    // বাটন ক্লিক এনিমেশনের জন্য আইডি সেট
    setClickedId(dropItem.id);

    setTimeout(() => {
      setClickedId(null);
      if (onNavigate) {
        onNavigate("LOGIN", {
          message: `Please log in to purchase ${dropItem.title}`,
        });
      }
    }, 300);
  };

  return (
    <>
      {/* Dynamic CSS for smooth hover animations and ripple effects */}
      <style>{`
        .drop-card {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                      box-shadow 0.4s ease, 
                      border-color 0.4s ease;
        }
        .drop-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(230, 57, 70, 0.15), 0 0 20px rgba(255, 255, 255, 0.05);
          border-color: rgba(230, 57, 70, 0.5) !important;
        }

        .card-img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .drop-card:hover .card-img {
          transform: scale(1.08);
        }

        .buy-now-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .buy-now-btn:hover {
          background-color: #e63946 !important;
          color: #fff !important;
          box-shadow: 0 0 15px rgba(230, 57, 70, 0.6);
          letter-spacing: 2px !important;
        }
        .buy-now-btn:active, .buy-now-btn.btn-clicked {
          transform: scale(0.95);
        }

        .badge-glow {
          animation: pulse-glow 2s infinite;
        }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(230, 57, 70, 0); }
          100% { box-shadow: 0 0 0 0 rgba(230, 57, 70, 0); }
        }

        .back-btn {
          transition: all 0.3s ease;
        }
        .back-btn:hover {
          border-color: #e63946 !important;
          color: #e63946 !important;
          background-color: rgba(230, 57, 70, 0.05);
          transform: scale(1.05);
        }
      `}</style>

      <div
        style={{ maxWidth: "1300px", margin: "0 auto", padding: "60px 20px" }}
      >
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span
            style={{
              color: "#e63946",
              fontSize: "0.85rem",
              fontWeight: "800",
              letterSpacing: "3px",
            }}
          >
            EXCLUSIVES
          </span>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "900",
              letterSpacing: "2px",
              marginTop: "10px",
            }}
          >
            CURRENT DROPS<span style={{ color: "#e63946" }}>.</span>
          </h1>
          <p
            style={{
              color: "#a1a1aa",
              maxWidth: "600px",
              margin: "10px auto 0",
            }}
          >
            Strictly limited batches. Once sold out, these silhouettes will not
            be recreated.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {dropsData.map((item) => (
            <div
              key={item.id}
              className="drop-card"
              style={{
                backgroundColor: "#18181b",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "380px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <span
                  className="badge-glow"
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    backgroundColor: "#e63946",
                    color: "#fff",
                    padding: "4px 12px",
                    fontSize: "0.75rem",
                    fontWeight: "800",
                    borderRadius: "20px",
                    letterSpacing: "1px",
                  }}
                >
                  {item.release}
                </span>
              </div>

              <div style={{ padding: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "800",
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "900",
                      color: "#e63946",
                    }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  style={{
                    color: "#a1a1aa",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                  }}
                >
                  {item.desc}
                </p>
                <button
                  onClick={() => handleBuyNow(item)}
                  className={`buy-now-btn ${
                    clickedId === item.id ? "btn-clicked" : ""
                  }`}
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#fff",
                    color: "#000",
                    border: "none",
                    fontWeight: "800",
                    letterSpacing: "1px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button
            onClick={onBackHome}
            className="back-btn"
            style={btnSecondary}
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </>
  );
};

const btnSecondary = {
  padding: "12px 30px",
  backgroundColor: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "700",
  letterSpacing: "1px",
};

export default Drop;
