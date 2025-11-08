import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "@/api/api";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post(`/auth/reset-password/${token}`, { password });
      setMessage("Password reset successful! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <>
      <title>Reset Password | Expense Tracker</title>
      <div className="flex flex-col justify-center items-center h-screen p-5">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input input-neutral w-full"
              />
            </div>
            <button type="submit" className="w-full btn btn-neutral mt-5">
              Reset Password
            </button>
          </div>
        </form>
        {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
      </div>
    </>
  );
}
