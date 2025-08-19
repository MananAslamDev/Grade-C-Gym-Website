import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const TrainersSection: React.FC = () => {
  return (
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
  );
};

export default TrainersSection;