// import React from "react";
// import MarqueeBanner from "./components/Common/MarqueeBanner";
// import Navbar from "./components/Common/Navbar";
// import HeroSection from "./components/Home/HeroSection";
// import ScrollSaleSection from "./components/Home/ScrollSaleSection";
// import LatestDrops from "./components/Home/LatestDrops";
// import ZenjiEthos from "./components/Home/ZenjiEthos";
// import Footer from "./components/Common/Footer";
// import ShopCollection from "./pages/ShopCollection";

// function App() {
//   return (
//     <div>
//       <MarqueeBanner />
//       <Navbar />
//       <HeroSection />
//       <ScrollSaleSection />
//       <LatestDrops />
//       <ZenjiEthos />
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
import ShopCollection from "./pages/ShopCollection";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div
      style={{
        backgroundColor: "#09090b",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <MarqueeBanner />
      <Navbar onNavigateHome={() => setCurrentPage("home")} />

      {currentPage === "home" ? (
        <>
          <HeroSection />
          <ScrollSaleSection />
          <LatestDrops onViewAll={() => setCurrentPage("shop")} />
          <ZenjiEthos />
        </>
      ) : (
        <ShopCollection onBackHome={() => setCurrentPage("home")} />
      )}

      <Footer />
    </div>
  );
}

export default App;
