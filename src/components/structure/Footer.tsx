import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-dumbbell text-2xl mr-2 text-red-500"></i>
              <span className="text-xl font-bold">FitZone</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transform your body and mind with our comprehensive fitness
              programs and expert guidance.
            </p>
            <div className="flex space-x-4">
              <i className="fab fa-facebook text-xl hover:text-red-500 transition-colors cursor-pointer"></i>
              <i className="fab fa-instagram text-xl hover:text-red-500 transition-colors cursor-pointer"></i>
              <i className="fab fa-twitter text-xl hover:text-red-500 transition-colors cursor-pointer"></i>
              <i className="fab fa-youtube text-xl hover:text-red-500 transition-colors cursor-pointer"></i>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Classes
                </a>
              </li>
              <li>
                <a
                  href="#membership"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Personal Training</li>
              <li className="text-gray-400">Group Classes</li>
              <li className="text-gray-400">Nutrition Coaching</li>
              <li className="text-gray-400">Fitness Assessment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and offers
            </p>
            <div className="flex">
              <Input
                placeholder="Your email"
                className="border-none bg-gray-800 text-white text-sm mr-2"
              />
              <Button className="bg-red-500 hover:bg-red-600 text-white !rounded-button whitespace-nowrap cursor-pointer">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 FitZone. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;