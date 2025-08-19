import React from "react";
import Header from "./components/structure/Header";
import HeroSection from "./components/structure/HeroSection";
import FeaturesSection from "./components/structure/FeaturesSection";
import ClassesSection from "./components/structure/ClassesSection";
import MembershipSection from "./components/structure/MembershipSection";
import TrainersSection from "./components/structure/TrainersSection";
import ContactSection from "./components/structure/ContactSection";
import Footer from "./components/structure/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ClassesSection />
      <MembershipSection />
      <TrainersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;