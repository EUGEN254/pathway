// pages/Careers.jsx
import React from 'react';

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time"
  },
  {
    id: 2,
    title: "Travel Specialist",
    department: "Operations",
    location: "New York",
    type: "Full-time"
  },
  {
    id: 3,
    title: "Customer Support",
    department: "Support",
    location: "Remote",
    type: "Full-time"
  },
  {
    id: 4,
    title: "Marketing Manager",
    department: "Marketing",
    location: "London",
    type: "Full-time"
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Join Our Team</h1>
          <p className="text-gray-500 mb-8">Help us shape the future of travel</p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Why Work With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Remote First</h3>
                <p className="text-sm text-gray-500">Work from anywhere</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Travel Perks</h3>
                <p className="text-sm text-gray-500">Discounts on trips</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Growth</h3>
                <p className="text-sm text-gray-500">Learn and advance</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:border-orange-500 transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-sm text-gray-500">{job.department} • {job.location}</p>
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{job.type}</span>
                  </div>
                  <button className="mt-3 text-orange-500 text-sm hover:underline">
                    Apply Now →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;