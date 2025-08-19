import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const MembershipSection: React.FC = () => {
  return (
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
  );
};

export default MembershipSection;