import React from "react";
import Navbar from "./Navbar";
import {
  FaPlay,
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdOutlineFlight, MdOutlineDirectionsBoat } from "react-icons/md";
import assets from "../assets/assets";

const Header = () => {
  return (
    <div className="min-h-screen bg-[#faf6f0] rounded-b-4xl">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-[2.5rem] sm:text-[3.2rem] lg:text-[3.8rem] font-light tracking-tight leading-[1.1] text-[#1a1a1a]">
              New way to <br />
              plan your next <br />
              dream trip
            </h1>

            <p className="mt-8 text-[#4a4a4a] text-base sm:text-lg max-w-xl leading-relaxed">
              Create a fully customized day-by-day itinerary for free. Imagine
              checking one place for your travel details and getting updates
              throughout your trip.
            </p>

            {/* SEARCH BOX - Redesigned */}
            <div className="mt-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-3">
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                {/* Location Input */}
                <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-xl">
                  <FaMapMarkerAlt className="text-[#c0a080] text-lg" />
                  <input
                    type="text"
                    placeholder="Where to go?"
                    className="w-full bg-transparent outline-none text-[#2a2a2a] placeholder:text-gray-400 text-sm sm:text-base"
                  />
                </div>

                {/* Date Input */}
                <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-xl">
                  <FaCalendarAlt className="text-[#c0a080] text-lg" />
                  <input
                    type="text"
                    placeholder="When?"
                    className="w-full bg-transparent outline-none text-[#2a2a2a] placeholder:text-gray-400 text-sm sm:text-base"
                  />
                </div>

                <button className="bg-[#1a1a1a] text-white px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-[#333] transition-all duration-300 justify-center sm:w-auto text-sm sm:text-base font-medium">
                  <FaSearch className="text-sm" />
                  Search
                </button>
              </div>
            </div>

            {/* Trust Indicator */}
            <p className="mt-6 text-xs text-gray-400 tracking-wide">
              10,000+ travelers planning their trips this week
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center min-h-[400px] sm:min-h-[500px]">
            {/* World Map - More subtle */}
            <img
              src={assets.worldmap}
              alt=""
              className="absolute w-[400px] sm:w-[500px] opacity-22 z-0"
            />

            {/* Circle with Tourist */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-[#f6cea4] to-[#e6b seventeenth] rounded-full overflow-hidden z-10 shadow-2xl">
              <img
                src={assets.touristimage}
                alt="Traveler exploring"
                className="w-full h-full object-cover object-bottom scale-100"
              />
            </div>

            {/* Decorative Elements - Carefully placed */}
            <div className="absolute top-12 right-12 sm:top-16 sm:right-20">
              <MdOutlineFlight className="text-4xl sm:text-5xl text-[#a0a0a0] opacity-22 rotate-45" />
            </div>

            <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-12">
              <MdOutlineDirectionsBoat className="text-4xl sm:text-5xl text-[#a0a0a0] opacity-22" />
            </div>

            <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-16">
              <div className="bg-[#1a1a1a] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:bg-[#333] transition-all duration-300 hover:scale-105">
                <FaPlay className="text-white text-sm sm:text-base ml-1" />
              </div>
            </div>

            {/* Small accent circle */}
            <div className="absolute top-20 left-12 w-2 h-2 bg-orange-300 rounded-full opacity-50"></div>
            <div className="absolute bottom-24 right-20 w-3 h-3 bg-amber-400 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>

      {/* FEATURE SECTION - Minimal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Feature 1 */}
          <div className="text-center md:text-left">
            <p className="text-3xl font-light text-[#1a1a1a] mb-3">01</p>
            <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">
              Find authentic experiences
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Follow your curiosity and explore more of the world.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center md:text-left">
            <p className="text-3xl font-light text-[#1a1a1a] mb-3">02</p>
            <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">
              Book with flexibility
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Plan on the go and discover the world your way.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center md:text-left">
            <p className="text-3xl font-light text-[#1a1a1a] mb-3">03</p>
            <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">
              Explore possibilities
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Enjoy personalized itineraries with 60,000+ tours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
