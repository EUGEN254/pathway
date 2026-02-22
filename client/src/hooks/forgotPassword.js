import { useRef, useState } from "react";
import { toast } from "sonner"; 
import { passwordResetService } from "../services/passwordResetService";

const useForgetPassword = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login"); 

  const inputRefs = useRef([]);

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e, index) => {
    // Update the OTP state or inputRefs values
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, 6).split("");
    paste.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await passwordResetService.sendResetOtp(email);
      if (data.success) {
        toast.success(data.message);
        setIsEmailSent(true);
      } else toast.error(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const enteredOtp = inputRefs.current.map((e) => e.value).join("");
    setIsLoading(true);
    try {
      const data = await passwordResetService.verifyResetOtp(email, enteredOtp);
      if (data.success) {
        toast.success("OTP Verified");
        setOtp(enteredOtp);
        setIsOtpVerified(true);
      } else toast.error(data.message || "Invalid OTP");
    } catch (error) {
      toast.error(error.response?.data?.message || "OTP verification failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await passwordResetService.resetPassword(
        email,
        otp,
        newPassword,
      );
      if (data.success) {
        toast.success(data.message);
        setAuthMode("login"); // Changed to "login" to match modal
        setShowAuthModal(true);
      } else toast.error(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Reset failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    try {
      const data = await passwordResetService.sendResetOtp(email);
      if (data.success) {
        toast.success("OTP resent successfully");
      } else toast.error(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend OTP");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleInput,
    handleKeyDown,
    handlePaste,
    handleResendOtp,
    handleResetPassword,
    handleSendEmail,
    handleVerifyOtp,
    showAuthModal,
    setShowAuthModal, 
    authMode,
    setAuthMode, 
    isEmailSent,
    isOtpVerified,
    setIsOtpVerified,
    isLoading,
    setEmail,
    email,
    newPassword,
    setNewPassword,
    otp,
    setOtp,
    inputRefs, 
  };
};

export default useForgetPassword;