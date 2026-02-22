import React, { useContext, useRef, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import AuthModal from "../components/AuthModal";
import useForgetPassword from "../hooks/forgotPassword";

const ForgotPassword = () => {
  const {
    handleInput,
    setEmail,
    email,
    isOtpVerified,
    setIsOtpVerified,
    newPassword,
    setNewPassword,
    otp,
    setOtp,
    handleKeyDown,
    handlePaste,
    handleResendOtp,
    handleResetPassword,
    handleSendEmail,
    handleVerifyOtp,
    isEmailSent,
    isLoading,
    showAuthModal,
    setShowAuthModal,
    authMode,
    setAuthMode,
    inputRefs,
  } = useForgetPassword();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf6f0] px-4 py-8">
      {/* Header */}
      <div className="absolute top-6 left-6">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors group"
        >
          <div className="p-2 bg-white shadow-md rounded-lg group-hover:bg-orange-50 transition-colors">
            <FaHome className="text-lg text-gray-700 group-hover:text-orange-500" />
          </div>
          <span className="font-medium text-gray-700">Back Home</span>
        </NavLink>
      </div>

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4 shadow-lg">
            <FiLock className="text-2xl text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Reset Password</h1>
          <p className="text-gray-600 mt-3 text-base">
            {isOtpVerified
              ? "Create a new secure password"
              : isEmailSent
                ? "Enter the 6-digit OTP sent to your email"
                : "Enter your registered email address to get started"}
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                isEmailSent
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              1
            </div>
            <div
              className={`w-16 h-1 ${
                isEmailSent ? "bg-orange-500" : "bg-gray-200"
              }`}
            ></div>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                isOtpVerified
                  ? "bg-orange-500 text-white"
                  : isEmailSent
                    ? "bg-gray-100 text-gray-400"
                    : "bg-gray-100 text-gray-300"
              }`}
            >
              2
            </div>
            <div
              className={`w-16 h-1 ${
                isOtpVerified ? "bg-orange-500" : "bg-gray-200"
              }`}
            ></div>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                isOtpVerified
                  ? "bg-gray-100 text-gray-400"
                  : "bg-gray-100 text-gray-300"
              }`}
            >
              3
            </div>
          </div>
        </div>

        {/* Step 1: Email */}
        {!isEmailSent && (
          <form onSubmit={handleSendEmail} className="space-y-6">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FiMail className="text-gray-400 text-lg" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 pr-3 py-3 text-base rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-lg font-medium bg-orange-500 hover:bg-orange-600 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-base shadow-md hover:shadow-lg"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending OTP...
                </>
              ) : (
                "Send OTP"
              )}
            </button>
          </form>
        )}

        {/* Step 2: Verify OTP */}
        {isEmailSent && !isOtpVerified && (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2 text-center">
                Enter the 6-digit code sent to your email
              </label>
              <div className="flex justify-between gap-3" onPaste={handlePaste}>
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      onInput={(e) => handleInput(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-12 h-14 text-center text-2xl font-bold rounded-lg border border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
                    />
                  ))}
              </div>
              <p className="text-sm text-gray-500 text-center mt-3">
                Paste or type the OTP
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-lg font-medium bg-orange-500 hover:bg-orange-600 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-base shadow-md hover:shadow-lg"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Verifying...
                </>
              ) : (
                "Verify OTP"
              )}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={handleResendOtp}
                className="text-base text-orange-500 hover:text-orange-600 hover:underline transition-colors"
              >
                Resend OTP
              </button>
            </div>
          </form>
        )}

        {/* Step 3: New Password */}
        {isOtpVerified && (
          <form onSubmit={handleResetPassword} className="space-y-6">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FiLock className="text-gray-400 text-lg" />
                </div>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                  minLength={6}
                  className="w-full pl-10 pr-3 py-3 text-base rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Password must be at least 6 characters long
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-lg font-medium bg-orange-500 hover:bg-orange-600 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-base shadow-md hover:shadow-lg"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Resetting Password...
                </>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
        )}
      </div>

      {/* Back to login link */}
      <div className="mt-8 text-center">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors group text-base"
        >
          <div className="p-2 bg-white shadow-md rounded-lg group-hover:bg-orange-50 transition-colors">
            <FiArrowLeft className="text-gray-700 group-hover:text-orange-500" />
          </div>
          <span className="font-medium text-gray-700">Back to Login</span>
        </NavLink>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center max-w-md">
        <p className="text-sm text-gray-500">
          Need help? Contact our support team at{" "}
          <a
            href="mailto:support@pathway.com"
            className="text-orange-500 hover:underline"
          >
            support@pathway.com
          </a>
        </p>
      </div>

      {/* Auth Modal - Fixed props */}
      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          defaultMode={authMode}
        />
      )}
    </div>
  );
};

export default ForgotPassword;
