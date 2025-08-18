import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const FeaturesSection: React.FC = () => {
  return (
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
  );
};

export default FeaturesSection;