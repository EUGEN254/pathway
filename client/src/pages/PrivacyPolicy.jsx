// pages/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-8">Last updated: March 2024</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
              <p className="text-gray-600">
                We collect information you provide directly, such as when you create an account, 
                book a trip, or contact us. This may include your name, email, and payment information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
              <p className="text-gray-600">
                We use your information to process bookings, send updates, and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Information Sharing</h2>
              <p className="text-gray-600">
                We do not sell your personal information. We may share it with travel partners 
                only to fulfill your bookings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Contact Us</h2>
              <p className="text-gray-600">
                For privacy questions, email us at privacy@pathway.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;