// pages/TermsOfUse.jsx
import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Terms of Use</h1>
          <p className="text-sm text-gray-400 mb-8">Last updated: March 2024</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing Pathway, you agree to these terms. If you don't agree, please don't use our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Booking and Payments</h2>
              <p className="text-gray-600">
                All bookings are subject to availability. Payment is required at time of booking.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Cancellations</h2>
              <p className="text-gray-600">
                Cancellation policies vary by booking. Check your booking details for specific terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. User Accounts</h2>
              <p className="text-gray-600">
                You're responsible for maintaining your account security. Notify us of unauthorized use.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;