import React, { useState, useEffect } from "react";

const heroImages = [
  "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000); // Transitions every 2 seconds now

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "85vh",
        minHeight: "550px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: "60px",
        backgroundColor: "#09090b",
      }}
    >
      {/* Dynamic Background Image Layers */}
      {heroImages.map((img, index) => {
        const isActive = index === currentIndex;
        return (
          <React.Fragment key={img}>
            {/* 1. Blurred Background Layer */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url('${img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(45px) brightness(0.65)",
                transform: "scale(1.1)",
                opacity: isActive ? 1 : 0,
                transition: "opacity 0.6s ease-in-out",
                zIndex: 1,
              }}
            />

            {/* 2. Full-Body Uncropped Model Image Layer */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: isActive ? 1 : 0,
                transition: "opacity 0.6s ease-in-out",
                zIndex: 2,
              }}
            >
              <img
                src={img}
                alt={`ZENJI Model Drop ${index + 1}`}
                style={{
                  height: "100%",
                  width: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                  objectPosition: "center bottom",
                }}
              />
            </div>
          </React.Fragment>
        );
      })}

      {/* 3. Light Gradient Overlay for Readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(9, 9, 11, 0.15) 0%, rgba(9, 9, 11, 0.5) 100%)",
          zIndex: 3,
        }}
      />

      {/* 4. Hero Content Layer */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <p
          style={{
            color: "var(--color-primary)",
            fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
            fontWeight: "800",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "12px",
            textShadow: "0 2px 4px rgba(0,0,0,0.6)",
          }}
        >
          ● THE ORIGIN DROP // LOADING...
        </p>

        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5.2rem)",
            fontWeight: "900",
            textTransform: "uppercase",
            lineHeight: "0.95",
            letterSpacing: "1px",
            color: "#ffffff",
            textShadow: "0 4px 12px rgba(0,0,0,0.5)",
          }}
        >
          WEAR YOUR <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #ffffff",
            }}
          >
            STORY
          </span>
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
