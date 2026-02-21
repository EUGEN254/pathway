// components/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'signup'
  const navigate = useNavigate();

  const navLinks = [
    { name: "Destinations", path: "/destinations" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <>
      <div className="w-full px-4 sm:px-6 bg-[#faf6f0] lg:px-12 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold tracking-wide">
            <span
              onClick={() => navigate("/")}
              className="text-black cursor-pointer"
            >
              Pathway
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-gray-500 font-medium">
            {navLinks.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="hover:text-orange-500 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => openAuthModal("login")}
              className="text-gray-700 font-medium hover:text-orange-500 transition"
            >
              Log In
            </button>
            <button
              onClick={() => openAuthModal("signup")}
              className="bg-orange-500 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-600 transition duration-300"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Mobile Menu - Slide from right */}
          <div
            className={`
            fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-40
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
            md:hidden
          `}
          >
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="px-6 py-8 border-b border-gray-100">
                <span className="text-xl font-bold">Pathway</span>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-4 py-6">
                <div className="space-y-1">
                  {navLinks.map((item, index) => (
                    <Link
                      to={item.path}
                      key={index}
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition duration-200 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-medium">{item.name}</span>
                      <FiChevronRight className="text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Auth Section */}
              <div className="px-6 py-8 border-t border-gray-100 space-y-3">
                <button
                  className="w-full px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition"
                  onClick={() => {
                    openAuthModal("login");
                    setIsOpen(false);
                  }}
                >
                  Log In
                </button>
                <button
                  className="w-full px-4 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition duration-300 shadow-sm"
                  onClick={() => {
                    openAuthModal("signup");
                    setIsOpen(false);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Backdrop - only shows when menu is open */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultMode={authMode}
      />
    </>
  );
};

export default Navbar;
