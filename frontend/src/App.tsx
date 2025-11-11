import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/auth/login";
import HomePage from "./pages/user/home";
import RegisterPage from "./pages/auth/register";
import ForgotPassword from "./pages/auth/forgotpassword";
import ResetPassword from "./pages/auth/resetpassword";
import Dashboard from "./pages/dashboard/home";
import AddExpense from "./pages/dashboard/addexpense";
import AddGroup from "./pages/dashboard/addgroup";
import AddFriend from "./pages/dashboard/addfriend";
import Activity from "./pages/dashboard/activity";
import Profile from "./pages/dashboard/profile";
import GropupPage from "./pages/dashboard/group-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addexpense" element={<AddExpense />} />
          <Route path="/addgroup" element={<AddGroup />} />
          <Route path="/addfriends" element={<AddFriend />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/grouppage" element={<GropupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
