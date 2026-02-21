// components/Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-8">
      <button
        onClick={() => {
          setCurrentPage((p) => Math.max(1, p - 1));
        }}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-lg flex items-center justify-center transition ${
          currentPage === 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        ←
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition ${
            currentPage === i + 1
              ? "bg-orange-500 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-lg flex items-center justify-center transition ${
          currentPage === totalPages
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
