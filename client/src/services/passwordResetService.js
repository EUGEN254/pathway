import api from "./api";

export const passwordResetService = {
  async sendResetOtp(email) {
    const response = await api.post(`/api/user/send-reset-otp`, {
      email,
    });
    return response.data;
  },

  async verifyResetOtp(email, otp) {
    const response = await api.post(`/api/user/verify-reset-otp`, {
      email,
      otp,
    });
    return response.data;
  },

  async resetPassword(email, otp, newPassword) {
    const response = await api.post(`/api/user/reset-password`, {
      email,
      otp,
      newPassword,
    });
    return response.data;
  },
};
