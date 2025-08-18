// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

          {/* Mobile Menu */}
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

      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose FitZone
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our comprehensive fitness solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-dumbbell text-2xl text-red-500"></i>
                </div>
                <CardTitle>Modern Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  State-of-the-art fitness equipment for all your workout needs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-users text-2xl text-red-500"></i>
                </div>
                <CardTitle>Expert Trainers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Certified personal trainers to guide your fitness journey
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-clock text-2xl text-red-500"></i>
                </div>
                <CardTitle>Flexible Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Open 24/7 to fit your busy schedule and lifestyle
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-heart text-2xl text-red-500"></i>
                </div>
                <CardTitle>Group Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Variety of group fitness classes for all fitness levels
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Classes
            </h2>
            <p className="text-xl text-gray-600">
              Join our most popular fitness classes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=yoga%20class%20in%20modern%20studio%20with%20people%20practicing%20yoga%20poses%2C%20peaceful%20atmosphere%2C%20natural%20lighting%2C%20clean%20white%20background%2C%20professional%20fitness%20environment&width=400&height=300&seq=class001&orientation=landscape"
                  alt="Yoga Class"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <CardHeader>
                <CardTitle>Yoga Flow</CardTitle>
                <CardDescription>
                  Monday, Wednesday, Friday - 7:00 AM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Improve flexibility and mindfulness with our guided yoga
                  sessions
                </p>
                <p className="text-sm text-gray-500">
                  Instructor: Sarah Johnson
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=high%20intensity%20interval%20training%20HIIT%20class%20with%20people%20exercising%2C%20energetic%20atmosphere%2C%20modern%20gym%20setting%2C%20clean%20white%20background%2C%20professional%20fitness%20environment&width=400&height=300&seq=class002&orientation=landscape"
                  alt="HIIT Class"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <CardHeader>
                <CardTitle>HIIT Training</CardTitle>
                <CardDescription>Tuesday, Thursday - 6:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-intensity workouts for maximum calorie burn and strength
                </p>
                <p className="text-sm text-gray-500">
                  Instructor: Mike Rodriguez
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=strength%20training%20class%20with%20weights%20and%20barbells%2C%20people%20lifting%20weights%2C%20professional%20gym%20environment%2C%20clean%20white%20background%2C%20modern%20fitness%20equipment&width=400&height=300&seq=class003&orientation=landscape"
                  alt="Strength Training"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <CardHeader>
                <CardTitle>Strength Training</CardTitle>
                <CardDescription>
                  Monday, Wednesday, Friday - 5:00 PM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Build muscle and increase strength with our structured
                  programs
                </p>
                <p className="text-sm text-gray-500">Instructor: David Chen</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 !rounded-button whitespace-nowrap cursor-pointer">
              View All Classes
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="membership" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Membership Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Basic</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  $29<span className="text-lg text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Gym access during staffed hours</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Basic equipment usage</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Locker room access</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-times text-red-500 mr-3"></i>
                  <span>Group classes</span>
                </div>
                <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white !rounded-button whitespace-nowrap cursor-pointer">
                  Choose Basic
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-red-500 relative cursor-pointer">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Premium</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  $59<span className="text-lg text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>24/7 gym access</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>All equipment access</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Unlimited group classes</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Personal trainer consultation</span>
                </div>
                <Button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white !rounded-button whitespace-nowrap cursor-pointer">
                  Choose Premium
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Elite</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  $99<span className="text-lg text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>24/7 premium gym access</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Personal training sessions</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Nutrition consultation</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Priority class booking</span>
                </div>
                <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white !rounded-button whitespace-nowrap cursor-pointer">
                  Choose Elite
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Trainers
            </h2>
            <p className="text-xl text-gray-600">
              Expert professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20female%20fitness%20trainer%20smiling%2C%20athletic%20build%2C%20wearing%20gym%20attire%2C%20clean%20white%20background%2C%20professional%20headshot%20style%2C%20confident%20pose&width=300&height=300&seq=trainer001&orientation=squarish"
                    alt="Sarah Johnson"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription className="text-red-500 font-medium">
                  Yoga & Pilates Specialist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  5+ years of experience in yoga and mindfulness training.
                  Certified in Hatha and Vinyasa yoga styles.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20male%20fitness%20trainer%20smiling%2C%20muscular%20build%2C%20wearing%20gym%20attire%2C%20clean%20white%20background%2C%20professional%20headshot%20style%2C%20confident%20pose&width=300&height=300&seq=trainer002&orientation=squarish"
                    alt="Mike Rodriguez"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <CardTitle>Mike Rodriguez</CardTitle>
                <CardDescription className="text-red-500 font-medium">
                  HIIT & Cardio Expert
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Former athlete with 8+ years in high-intensity training.
                  Specializes in weight loss and endurance building.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20male%20fitness%20trainer%20smiling%2C%20strong%20build%2C%20wearing%20gym%20attire%2C%20clean%20white%20background%2C%20professional%20headshot%20style%2C%20confident%20pose&width=300&height=300&seq=trainer003&orientation=squarish"
                    alt="David Chen"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <CardTitle>David Chen</CardTitle>
                <CardDescription className="text-red-500 font-medium">
                  Strength & Conditioning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Powerlifting champion with expertise in strength training and
                  muscle building for all fitness levels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to start your fitness journey? Contact us today!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="border border-gray-300 text-sm"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="border border-gray-300 text-sm"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      className="border border-gray-300 text-sm"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      className="border border-gray-300 text-sm"
                    />
                  </div>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white !rounded-button whitespace-nowrap cursor-pointer">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Visit Our Gym
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-red-500 mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">
                        123 Fitness Street, Health City, HC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-phone text-red-500 mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-envelope text-red-500 mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@fitzone.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-clock text-red-500 mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-gray-600">
                        24/7 for Premium & Elite members
                      </p>
                      <p className="text-gray-600">
                        Mon-Fri: 5AM-11PM (Basic members)
                      </p>
                      <p className="text-gray-600">
                        Sat-Sun: 6AM-10PM (Basic members)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default App;
