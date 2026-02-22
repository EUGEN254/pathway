import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "sonner";
import { PageSpinner } from "../components/LoadingSpinner";
import { authService } from "../services/authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const data = await authService.getCurrentUser();
      setUser(data?.user || null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Check if user is logged in on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const register = async (userData) => {
    try {
      const data = await authService.register(userData);
      setUser(data.user);
      toast.success(data.message);
      return { success: true };
    } catch (error) {
      console.log("REGISTER ERROR TOAST TRIGGERED");
      toast.error(error.message || "Registration failed");
      return { success: false, error: error.message };
    }
  };

  const login = async (credentials) => {
    try {
      const data = await authService.login(credentials);
      setUser(data.user);
      toast.success(data.message);
      return { success: true };
    } catch (error) {
      toast.error(error.message || "Login failed");
      return { success: false, error: error.message };
    }
  };

  const googleLogin = async (token) => {
    try {
      const data = await authService.googleLogin(token);
      setUser(data.user);
      toast.success(data.message);
      return { success: true };
    } catch (error) {
      toast.error(error.message || "Google login failed");
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      const data = await authService.logout();
      setUser(null);
      toast.success(data.message);
    } catch (error) {
      toast.error("Logout error:", error);
    }
  };

  const value = {
    user,
    loading,
    register,
    login,
    googleLogin,
    logout,
    checkAuth,
    isAuthenticated: !!user,
  };

  // Return spinner if loading, but AFTER all functions are defined
  if (loading) {
    return <PageSpinner />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
