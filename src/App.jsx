import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingPage from "./pages/SettingPage";
import ProfilePage from "./pages/ProfilePage";
import PersistLogin from "./auths/PersistLogin";
import MainLayout from "./layout/mainLayout";
import AuthLayout from "./layout/authLayout";
const App = () => {
  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/setting" element={<SettingPage />} />
    </Routes>
  );
};

export default App;
