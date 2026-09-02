// // import React, { useState } from "react";
// // import MarqueeBanner from "./components/Common/MarqueeBanner";
// // import Navbar from "./components/Common/Navbar";
// // import HeroSection from "./components/Home/HeroSection";
// // import ScrollSaleSection from "./components/Home/ScrollSaleSection";
// // import LatestDrops from "./components/Home/LatestDrops";
// // import ZenjiEthos from "./components/Home/ZenjiEthos";
// // import Footer from "./components/Common/Footer";
// // import ShopCollection from "./pages/ShopCollection";

// // function App() {
// //   const [currentPage, setCurrentPage] = useState("home");

// //   return (
// //     <div
// //       style={{
// //         backgroundColor: "#09090b",
// //         color: "#ffffff",
// //         minHeight: "100vh",
// //       }}
// //     >
// //       <MarqueeBanner />
// //       <Navbar onNavigateHome={() => setCurrentPage("home")} />

// //       {currentPage === "home" ? (
// //         <>
// //           <HeroSection />
// //           <ScrollSaleSection />
// //           <LatestDrops onViewAll={() => setCurrentPage("shop")} />
// //           <ZenjiEthos />
// //         </>
// //       ) : (
// //         <ShopCollection onBackHome={() => setCurrentPage("home")} />
// //       )}

// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import MarqueeBanner from "./components/Common/MarqueeBanner";
// import Navbar from "./components/Common/Navbar";
// import HeroSection from "./components/Home/HeroSection";
// import ScrollSaleSection from "./components/Home/ScrollSaleSection";
// import LatestDrops from "./components/Home/LatestDrops";
// import ZenjiEthos from "./components/Home/ZenjiEthos";
// import Footer from "./components/Common/Footer";
// import ShopCollection from "./pages/ShopCollection";

// // Temporary Placeholder Views (Pore real page file ashle swap kore newa jabe)
// const PagePlaceholder = ({ title, message, onBackHome }) => (
//   <div
//     style={{
//       padding: "100px 20px",
//       textAlign: "center",
//       minHeight: "60vh",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//     }}
//   >
//     <h2
//       style={{
//         fontSize: "2.5rem",
//         fontWeight: "900",
//         letterSpacing: "2px",
//         textTransform: "uppercase",
//       }}
//     >
//       {title}
//     </h2>
//     {message && (
//       <p
//         style={{
//           color: "var(--color-primary, #e63946)",
//           fontSize: "1.1rem",
//           marginTop: "15px",
//           fontWeight: "600",
//         }}
//       >
//         {message}
//       </p>
//     )}
//     <button
//       onClick={onBackHome}
//       style={{
//         marginTop: "30px",
//         padding: "12px 30px",
//         backgroundColor: "var(--color-primary, #e63946)",
//         color: "#fff",
//         border: "none",
//         borderRadius: "4px",
//         cursor: "pointer",
//         fontWeight: "700",
//         letterSpacing: "1px",
//       }}
//     >
//       BACK TO HOME
//     </button>
//   </div>
// );

// function App() {
//   const [currentPage, setCurrentPage] = useState("HOME");
//   const [navParams, setNavParams] = useState({});

//   // Unified Navigation Handler
//   const handleNavigate = (pageKey, params = {}) => {
//     setCurrentPage(pageKey.toUpperCase());
//     setNavParams(params);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Render Section/Page Based on State
//   const renderContent = () => {
//     switch (currentPage) {
//       case "HOME":
//         return (
//           <>
//             <HeroSection />
//             <ScrollSaleSection />
//             <LatestDrops onViewAll={() => handleNavigate("COLLECTION")} />
//             <ZenjiEthos />
//           </>
//         );

//       case "DROP":
//         return (
//           <PagePlaceholder
//             title="LATEST DROPS"
//             onBackHome={() => handleNavigate("HOME")}
//           />
//         );

//       case "COLLECTION":
//       case "SHOP":
//         return <ShopCollection onBackHome={() => handleNavigate("HOME")} />;

//       case "LOOKBOOK":
//         return (
//           <PagePlaceholder
//             title="LOOKBOOK 2026"
//             onBackHome={() => handleNavigate("HOME")}
//           />
//         );

//       case "OUR STORY":
//         return (
//           <PagePlaceholder
//             title="OUR STORY"
//             onBackHome={() => handleNavigate("HOME")}
//           />
//         );

//       case "COLLABORATION":
//         return (
//           <PagePlaceholder
//             title="COLLABORATIONS"
//             onBackHome={() => handleNavigate("HOME")}
//           />
//         );

//       case "REVIEW":
//         return (
//           <PagePlaceholder
//             title="CUSTOMER REVIEWS"
//             onBackHome={() => handleNavigate("HOME")}
//           />
//         );

//       case "FAQ":
//         return (
//           <PagePlaceholder
//             title="FREQUENTLY ASKED QUESTIONS"
//             onBackHome={() => handleNavigate("HOME")}
//           />
//         );

//       case "LOGIN":
//         return (
//           <PagePlaceholder
//             title="LOGIN"
//             message={navParams.message}
//             onBackHome={() => handleNavigate("HOME")}
//           />
//         );

//       default:
//         return (
//           <>
//             <HeroSection />
//             <ScrollSaleSection />
//             <LatestDrops onViewAll={() => handleNavigate("COLLECTION")} />
//             <ZenjiEthos />
//           </>
//         );
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "#09090b",
//         color: "#ffffff",
//         minHeight: "100vh",
//       }}
//     >
//       <MarqueeBanner />
//       <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

//       <main>{renderContent()}</main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import MarqueeBanner from "./components/Common/MarqueeBanner";
import Navbar from "./components/Common/Navbar";
import HeroSection from "./components/Home/HeroSection";
import ScrollSaleSection from "./components/Home/ScrollSaleSection";
import LatestDrops from "./components/Home/LatestDrops";
import ZenjiEthos from "./components/Home/ZenjiEthos";
import Footer from "./components/Common/Footer";

// Real Page Imports
import ShopCollection from "./pages/ShopCollection";
import Drop from "./pages/Drop";
import Lookbook from "./pages/Lookbook";
import OurStory from "./pages/OurStory";
import Collaboration from "./pages/Collaboration";
import Review from "./pages/Review";
import Faq from "./pages/Faq";

function App() {
  const [currentPage, setCurrentPage] = useState("HOME");
  const [navParams, setNavParams] = useState({});

  // Unified Navigation Handler
  const handleNavigate = (pageKey = "", params = {}) => {
    // Normalizes strings like "Drop", "drop", "DROP", or "LATEST DROPS"
    const formattedKey = pageKey.toString().toUpperCase().trim();
    setCurrentPage(formattedKey);
    setNavParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContent = () => {
    switch (currentPage) {
      case "HOME":
        return (
          <>
            <HeroSection />
            <ScrollSaleSection />
            <LatestDrops onViewAll={() => handleNavigate("COLLECTION")} />
            <ZenjiEthos />
          </>
        );

      // Handles "DROP", "DROPS", or "LATEST DROPS" navigation triggers
      case "DROP":
      case "DROPS":
      case "LATEST DROPS":
        return <Drop onBackHome={() => handleNavigate("HOME")} />;

      case "COLLECTION":
      case "SHOP":
        return <ShopCollection onBackHome={() => handleNavigate("HOME")} />;

      case "LOOKBOOK":
        return <Lookbook onBackHome={() => handleNavigate("HOME")} />;

      case "OUR STORY":
      case "OURSTORY":
        return <OurStory onBackHome={() => handleNavigate("HOME")} />;

      case "COLLABORATION":
      case "COLLABORATIONS":
        return <Collaboration onBackHome={() => handleNavigate("HOME")} />;

      case "REVIEW":
      case "REVIEWS":
        return <Review onBackHome={() => handleNavigate("HOME")} />;

      case "FAQ":
      case "FAQS":
        return <Faq onBackHome={() => handleNavigate("HOME")} />;

      default:
        return (
          <>
            <HeroSection />
            <ScrollSaleSection />
            <LatestDrops onViewAll={() => handleNavigate("DROP")} />
            <ZenjiEthos />
          </>
        );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#09090b",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <MarqueeBanner />
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      <main>{renderContent()}</main>

      <Footer />
    </div>
  );
}

export default App;
