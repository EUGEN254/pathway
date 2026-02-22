// components/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronRight,
  FiUser,
  FiLogOut,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";
import AuthModal from "./AuthModal";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  
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

  const handleLogout = async () => {
    try {
      await logout();
      setShowUserMenu(false);
    } catch (error) {
      toast.error("Logout failed:", error);
    }
  };

  // Get first letter of name for avatar
  const getUserFirstLetter = () => {
    if (!user?.fullname) return "U";
    return (
      user.fullname.charAt(0).toUpperCase()
    );
  };

  // Reset image states when user changes
  React.useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [user]);

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

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              // User is logged in - Show clickable avatar with chevron
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-1 focus:outline-none hover:opacity-80 transition group"
                >
                  {/* User Avatar - Only first letter in circle */}
                  <div className="relative w-10 h-10">
                    {/* Show initials immediately */}
                    <div className="absolute inset-0 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold text-lg">
                      {getUserFirstLetter()}
                    </div>

                    {/* Show image if available (overlay) */}
                    {user.image && !imageError && (
                      <img
                        src={user.image}
                        alt={user.fullname}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageError(true)}
                        className={`absolute inset-0 w-full h-full rounded-full object-cover  transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                      />
                    )}
                  </div>

                  {/* Chevron down icon - indicates it's clickable */}
                  <FiChevronDown
                    className={`text-gray-600 text-xl transition-transform duration-200 ${showUserMenu ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {showUserMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowUserMenu(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {user.fullname}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>

                      <Link
                        to="/profile"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <FiUser className="text-gray-400" />
                        Your Profile
                      </Link>

                      <Link
                        to="/settings"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <FiSettings className="text-gray-400" />
                        Settings
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                      >
                        <FiLogOut className="text-red-400" />
                        Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              // User is not logged in - Show login/signup buttons
              <>
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
              </>
            )}
          </div>

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

              {/* User Info for Mobile - Show if logged in */}
              {user && (
                <div className="px-6 py-4 border-b border-gray-100 bg-orange-50">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10">
                      {/* First letter circle */}
                      <div className="absolute inset-0 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold text-lg border-2 border-orange-500">
                        {getUserFirstLetter()}
                      </div>

                      {/* Image overlay if available */}
                      {user.image && (
                        <img
                          src={user.image}
                          alt={user.fullname}
                          className="absolute inset-0 w-full h-full rounded-full object-cover"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {user.fullname}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>
              )}

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

              {/* Auth Section for Mobile */}
              <div className="px-6 py-8 border-t border-gray-100 space-y-3">
                {user ? (
                  // Logged in - Show logout button
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition"
                  >
                    <FiLogOut />
                    Sign Out
                  </button>
                ) : (
                  // Not logged in - Show login/signup
                  <>
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
                  </>
                )}
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
