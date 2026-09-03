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
import Login from "./pages/Login";
import LegalPages from "./components/LegalPages"; // <--- Legal & Support Pages Import

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
            <ZenjiEthos onReadStory={() => handleNavigate("OUR STORY")} />
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

      case "LOGIN":
        return (
          <Login
            onBackHome={() => handleNavigate("HOME")}
            message={navParams.message}
          />
        );

      // Footer Help & Legal Pages Handling
      case "SHIPPING_POLICY":
      case "RETURNS":
      case "SIZE_GUIDE":
      case "TERMS":
      case "PRIVACY":
      case "COOKIES":
      case "REFUND":
        return (
          <LegalPages
            pageKey={currentPage}
            onBackHome={() => handleNavigate("HOME")}
          />
        );

      default:
        return (
          <>
            <HeroSection />
            <ScrollSaleSection />
            <LatestDrops onViewAll={() => handleNavigate("DROP")} />
            <ZenjiEthos
              onReadStory={(page) => handleNavigate(page || "OUR STORY")}
            />
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
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Marquee scroll করার সাথে সাথে উপরে চলে যাবে */}
      <MarqueeBanner />

      {/* Navbar স্ক্রিনের শীর্ষে Sticky অবস্থায় থাকবে */}
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>{renderContent()}</main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
