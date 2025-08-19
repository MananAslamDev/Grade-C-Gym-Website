import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactSection: React.FC = () => {
  return (
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
  );
};

export default ContactSection;