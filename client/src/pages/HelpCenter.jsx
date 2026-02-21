// pages/HelpCenter.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiHelpCircle, FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-light text-gray-900 mb-4">Help Center</h1>
          <p className="text-gray-500">How can we help you today?</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Options */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FiMail className="text-3xl text-orange-500 mb-4" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-gray-500 mb-4">Get a response within 24 hours</p>
            <a href="mailto:support@pathway.com" className="text-orange-500 text-sm hover:underline">
              support@pathway.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FiPhone className="text-3xl text-orange-500 mb-4" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-gray-500 mb-4">Mon-Fri, 9am-6pm</p>
            <a href="tel:+1234567890" className="text-orange-500 text-sm hover:underline">
              +1 (234) 567-890
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FiMessageCircle className="text-3xl text-orange-500 mb-4" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-gray-500 mb-4">Chat with our support team</p>
            <button className="text-orange-500 text-sm hover:underline">
              Start Chat
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-light mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg">
                <h4 className="font-medium mb-2">How do I book a trip?</h4>
                <p className="text-sm text-gray-500">
                  Simply search for your destination, select dates, and follow the booking process.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;