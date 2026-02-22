// components/AuthModal.jsx
import React, { useState, useEffect } from "react";
import { FiX, FiMail, FiLock, FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ isOpen, onClose, defaultMode = "login" }) => {
  const { login, register, googleLogin, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // Local form state only
  const [isLogin, setIsLogin] = useState(defaultMode === "login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [localLoading, setLocalLoading] = useState(false);

  useEffect(() => {
    setIsLogin(defaultMode === "login");
  }, [defaultMode]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setShowPassword(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleGoogleSuccess = async (credentialResponse) => {
    setLocalLoading(true);
    try {
      // credentialResponse.credential contains the token
      const result = await googleLogin(credentialResponse.credential);
      if (result.success) {
        onClose();
      } else {
        toast.error(result.error || "Google login failed");
      }
    } catch (error) {
      console.error("Google login error:", error);
    } finally {
      setLocalLoading(false);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLocalLoading(true);

    try {
      let result;
      if (isLogin) {
        result = await login({ email, password });
      } else {
        result = await register({
          fullname: name,
          email,
          password,
        });
      }

      if (result.success) {
        onClose();
      }
    } finally {
      setLocalLoading(false);
    }
  };

  const isLoading = localLoading || authLoading;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full relative animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isLoading}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition disabled:opacity-50"
        >
          <FiX className="text-xl" />
        </button>

        {/* Header */}
        <div className="p-6 pb-2">
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? "Welcome back" : "Create an account"}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {isLogin
              ? "Sign in to continue your journey"
              : "Start planning your next adventure"}
          </p>
        </div>

        {/* Google Button - Using the actual GoogleLogin component */}
        <div className="px-6 py-4">
          {/* Google Button with loading state */}
          <div className="w-full relative">
            {isLoading ? (
              // Show loading UI when loading
              <div className="w-full h-12 bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-gray-600">
                  {isLogin ? "Signing in..." : "Creating account..."}
                </span>
              </div>
            ) : (
              <div className="w-full">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  shape="rectangular"
                  size="large"
                  width="100%"
                  theme="outline"
                  text={isLogin ? "signin_with" : "signup_with"}
                  logo_alignment="center"
                />
              </div>
            )}
          </div>

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
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition disabled:bg-gray-50"
                  required={!isLogin}
                  disabled={isLoading}
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
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition disabled:bg-gray-50"
                required
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition disabled:bg-gray-50"
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                disabled={isLoading}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-orange-500 hover:text-orange-600 disabled:opacity-50"
                  disabled={isLoading}
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-500 text-white font-medium py-3 px-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading
                ? "Please wait..."
                : isLogin
                  ? "Sign In"
                  : "Create Account"}
            </button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-500">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
            </span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-500 font-medium hover:text-orange-600 hover:underline disabled:opacity-50"
              disabled={isLoading}
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-400 text-center mt-6">
            By continuing, you agree to our{" "}
            <a href="/terms" className="text-orange-500 hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-orange-500 hover:underline">
              Privacy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
