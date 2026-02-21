// pages/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">About Us</h1>
          <p className="text-gray-500 mb-8">Your journey begins here</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">Who We Are</h2>
              <p className="text-gray-600">
                Pathway was founded in 2020 with a simple mission: to make travel planning 
                easy and enjoyable for everyone. We believe that every journey should be 
                unforgettable, and we're here to make that happen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
              <p className="text-gray-600">
                To help travelers discover the world with confidence, providing personalized 
                recommendations and seamless booking experiences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Our Values</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Customer first - Your happiness is our priority</li>
                <li>Authentic experiences - Real travel, real memories</li>
                <li>Simple and transparent - No hidden fees</li>
                <li>Sustainable travel - Protecting our planet</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Our Team</h2>
              <p className="text-gray-600">
                We're a group of travel enthusiasts, tech experts, and customer service 
                professionals dedicated to making your travel dreams come true.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;