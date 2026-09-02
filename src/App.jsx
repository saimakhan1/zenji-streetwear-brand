// import React, { useState } from "react";
// import MarqueeBanner from "./components/Common/MarqueeBanner";
// import Navbar from "./components/Common/Navbar";
// import HeroSection from "./components/Home/HeroSection";
// import ScrollSaleSection from "./components/Home/ScrollSaleSection";
// import LatestDrops from "./components/Home/LatestDrops";
// import ZenjiEthos from "./components/Home/ZenjiEthos";
// import Footer from "./components/Common/Footer";

// // Real Page Imports
// import ShopCollection from "./pages/ShopCollection";
// import Drop from "./pages/Drop";
// import Lookbook from "./pages/Lookbook";
// import OurStory from "./pages/OurStory";
// import Collaboration from "./pages/Collaboration";
// import Review from "./pages/Review";
// import Faq from "./pages/Faq";

// function App() {
//   const [currentPage, setCurrentPage] = useState("HOME");
//   const [navParams, setNavParams] = useState({});

//   // Unified Navigation Handler
//   const handleNavigate = (pageKey = "", params = {}) => {
//     // Normalizes strings like "Drop", "drop", "DROP", or "LATEST DROPS"
//     const formattedKey = pageKey.toString().toUpperCase().trim();
//     setCurrentPage(formattedKey);
//     setNavParams(params);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

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

//       // Handles "DROP", "DROPS", or "LATEST DROPS" navigation triggers
//       case "DROP":
//       case "DROPS":
//       case "LATEST DROPS":
//         return <Drop onBackHome={() => handleNavigate("HOME")} />;

//       case "COLLECTION":
//       case "SHOP":
//         return <ShopCollection onBackHome={() => handleNavigate("HOME")} />;

//       case "LOOKBOOK":
//         return <Lookbook onBackHome={() => handleNavigate("HOME")} />;

//       case "OUR STORY":
//       case "OURSTORY":
//         return <OurStory onBackHome={() => handleNavigate("HOME")} />;

//       case "COLLABORATION":
//       case "COLLABORATIONS":
//         return <Collaboration onBackHome={() => handleNavigate("HOME")} />;

//       case "REVIEW":
//       case "REVIEWS":
//         return <Review onBackHome={() => handleNavigate("HOME")} />;

//       case "FAQ":
//       case "FAQS":
//         return <Faq onBackHome={() => handleNavigate("HOME")} />;

//       default:
//         return (
//           <>
//             <HeroSection />
//             <ScrollSaleSection />
//             <LatestDrops onViewAll={() => handleNavigate("DROP")} />
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
import Login from "./pages/Login"; // <--- ১. Login Import যুক্ত করা হয়েছে

function App() {
  const [currentPage, setCurrentPage] = useState("HOME");
  const [navParams, setNavParams] = useState({});

  // Unified Navigation Handler
  const handleNavigate = (pageKey = "", params = {}) => {
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

      // <--- ২. LOGIN Case যুক্ত করা হয়েছে
      case "LOGIN":
        return (
          <Login
            onBackHome={() => handleNavigate("HOME")}
            message={navParams.message}
          />
        );

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
