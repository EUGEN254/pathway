// components/AuthModal.jsx
import React, { useState, useEffect } from 'react';
import { FiX, FiMail, FiLock, FiUser, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const AuthModal = ({ isOpen, onClose, defaultMode = 'login' }) => {
  const [isLogin, setIsLogin] = useState(defaultMode === 'login');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Update when defaultMode changes
  useEffect(() => {
    setIsLogin(defaultMode === 'login');
  }, [defaultMode]);

  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    console.log('Google login clicked');

  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login with:', { email, password });
    } else {
      console.log('Signup with:', { name, email, password });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full relative animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition"
        >
          <FiX className="text-xl" />
        </button>

        {/* Header */}
        <div className="p-6 pb-2">
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {isLogin 
              ? 'Sign in to continue your journey' 
              : 'Start planning your next adventure'}
          </p>
        </div>

        {/* Google Button - Prominent First */}
        <div className="px-6 py-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl transition-all duration-300 group"
          >
            <FcGoogle className="text-2xl" />
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                required
              />
            </div>

            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {isLogin && (
              <div className="text-right">
                <button type="button" className="text-sm text-orange-500 hover:text-orange-600">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-medium py-3 px-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isLogin ? 'Sign In with Email' : 'Create Account'}
            </button>
          </form>

          {/* Toggle between Login/Signup */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-500">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
            </span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-500 font-medium hover:text-orange-600 hover:underline"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-400 text-center mt-6">
            By continuing, you agree to our{' '}
            <a href="/terms" className="text-orange-500 hover:underline">Terms of Service</a>{' '}
            and{' '}
            <a href="/privacy" className="text-orange-500 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;