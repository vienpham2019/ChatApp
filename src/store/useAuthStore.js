import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  token: null,
  verifyRefreshTokenLoading: false,
  isSignUpLoading: false,
  verifyRefreshToken: async () => {
    try {
      set({ verifyRefreshTokenLoading: true });
      const res = await axiosInstance.get("/auth/refresh");
      console.log(res);
      set({ token: res.metadata });
    } catch (error) {
      console.log(error);
      set({ token: null });
    } finally {
      set({ verifyRefreshTokenLoading: false });
    }
  },
  login: async () => {
    try {
      set({ isSignUpLoading: true });
      const res = await axiosInstance.post("/auth/logIn");
      set({ token: res.metadata });
    } catch (error) {
      set({ token: null });
    } finally {
      set({ isSignUpLoading: false });
    }
  },
}));
