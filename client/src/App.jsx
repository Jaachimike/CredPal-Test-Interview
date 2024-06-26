import { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FixedDeposit from "./components/FixedDeposit";
import NDICWriteup from "./components/NDICWriteup";
import FAQ from "./components/FAQ";
import LearnMore from "./components/LearnMore";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FixedDeposit />
      <NDICWriteup />
      <FAQ />
      <LearnMore />
      <Footer />
    </div>
  );
}

export default App;
