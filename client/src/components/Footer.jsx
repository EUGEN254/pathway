// components/Footer.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiSend } from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter signup
      console.log("Newsletter subscribed:", email);
      setSubscribed(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3
              onClick={() => navigate("/")}
              className="text-xl font-bold text-white mb-4 cursor-pointer"
            >
              Pathway
            </h3>
            <p className="text-sm leading-relaxed">
              Discover your next adventure with personalized travel experiences
              that create memories for a lifetime.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-white transition">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Get travel inspiration and exclusive deals in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
                <FiMail className="text-gray-400 ml-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-transparent px-3 py-2 text-sm outline-none text-white placeholder-gray-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                <FiSend />
                Subscribe
              </button>
            </form>

            {/* Success Message */}
            {subscribed && (
              <p className="text-xs text-green-400 mt-2">
                Thanks for subscribing! 🎉
              </p>
            )}

            <p className="text-xs text-gray-500 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pathway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
