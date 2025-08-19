import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const ClassesSection: React.FC = () => {
  return (
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
  );
};

export default ClassesSection;