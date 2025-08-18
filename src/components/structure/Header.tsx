import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <i className="fas fa-dumbbell text-2xl mr-2 text-red-500"></i>
            <span className="text-xl font-bold">FitZone</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="#classes"
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              Classes
            </a>
            <a
              href="#membership"
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              Membership
            </a>
            <a
              href="#trainers"
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              Trainers
            </a>
            <a
              href="#contact"
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>

          <button onClick={toggleMenu} className="md:hidden cursor-pointer">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 py-4">
            <a
              href="#home"
              className="block px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Home
            </a>
            <a
              href="#classes"
              className="block px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Classes
            </a>
            <a
              href="#membership"
              className="block px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Membership
            </a>
            <a
              href="#trainers"
              className="block px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Trainers
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;