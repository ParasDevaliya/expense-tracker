import { useState } from "react";
import API from "@/api/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/forgot-password", { email });
      setMessage(`Reset link generated: <Link to=${res.data.resetURL}`);
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Error sending reset link");
    }
  };

  return (
    <>
      <title>Forgot Password | Expense Tracker</title>
      <div className="flex flex-col justify-center items-center h-screen p-5">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <label htmlFor="email" className="label text-black">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input input-neutral w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
              />
            </div>

            <button type="submit" className="w-full btn btn-neutral mt-5">
              Send Reset Link
            </button>
          </div>
        </form>
        {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
      </div>
    </>
  );
}
