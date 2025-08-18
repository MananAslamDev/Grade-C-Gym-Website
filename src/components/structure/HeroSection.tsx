import React from "react";
import { Button } from "../ui/button";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <img
        src="/my-gym-background.jpg"
        alt="Gym Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0"></div>
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Transform Your <span className="text-red-500">Body</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Join FitZone and discover the strongest version of yourself with our
          expert trainers and state-of-the-art equipment
        </p>
        <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
          Start Your Journey
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;