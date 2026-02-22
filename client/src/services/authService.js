import api from "./api";

export const authService = {
  // register new user
  async register(userData) {
    try {
      const response = await api.post("/api/user/register", userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Registration failed" };
    }
  },

  //   login user
  async login(credentials) {
    try {
      const response = await api.post("/api/user/login", credentials);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Login failed" };
    }
  },

  //   get user
  async getCurrentUser() {
    try {
      const response = await api.get("/api/user/user-data");
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Failed to get user" };
    }
  },

  async googleLogin(token) {
    try {
      const response = await api.post("/api/user/google-login", { token });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Google login failed" };
    }
  },

  // Logout
  async logout() {
    try {
      const response = await api.post("/api/user/logout");
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Logout failed" };
    }
  },
};
