import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  token: null,
  isCheckingAuth: true,
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/refresh");
      console.log(res);
      set({ token: res.metadata });
    } catch (error) {
      console.log(error);
      set({ token: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
