import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { errorToast, successToast } from "../util/constomToast";

export const useAuthStore = create((set) => ({
  token: null,
  verifyRefreshTokenLoading: false,
  isSignUpLoading: false,
  isLoginLoading: false,
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
      set({ isLoginLoading: true });
      const res = await axiosInstance.post("/auth/logIn");
      set({ token: res.metadata });
    } catch (error) {
      set({ token: null });
    } finally {
      set({ isLoginLoading: false });
    }
  },
  signUp: async ({ payload, navigate }) => {
    try {
      set({ isSignUpLoading: true });
      const res = await axiosInstance.post("/auth/signUp", payload);
      successToast({ title: "SignUp", message: res.data.message });
      navigate("/login");
    } catch (error) {
      errorToast({ title: "SignUp", message: error.response.data.message });
    } finally {
      set({ isSignUpLoading: false });
    }
  },
}));
