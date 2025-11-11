import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "@/api/api";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await API.post("/auth/register", formData);

      // Save token if it exists
      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }

      // Redirect to login
      navigate("/login");
    } catch (err: any) {
      const message =
        err?.response?.data?.message || "Registration failed. Try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>Register | Expense Tracker</title>
      <div className="flex flex-col justify-center items-center min-h-screen p-5 bg-base-300">
        <h1 className="text-center text-3xl font-medium mb-5">Register</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm flex flex-col gap-6"
        >
          <div className="grid gap-6">
            <div className="grid gap-2">
              {/* Username */}
              <label htmlFor="username" className="label text-black">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter your username"
                className="input input-neutral w-full"
              />
            </div>
            <div className="grid gap-2">
              {/* Email */}
              <label htmlFor="email" className="label text-black">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="input input-neutral w-full"
              />
            </div>
            <div className="grid gap-2">
              {/* Mobile */}
              <label htmlFor="mobile" className="label text-black">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                pattern="[0-9]{10}"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                className="input input-neutral w-full"
              />
            </div>
            <div className="grid gap-2">
              {/* Password */}
              <label htmlFor="password" className="label text-black">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="******"
                className="input input-neutral w-full"
              />
            </div>

            {/* Error message */}
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full btn btn-primary"
              disabled={loading}
            >
              {loading ? "Processing..." : "Create Account"}
            </button>

            {/* Login link */}
            <div className="text-center text-sm text-white mt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-white hover:underline">
                Log in
              </Link>
            </div>

            {/* Divider */}
            <div className="relative mt-6 text-center text-sm text-gray-600">
              <div className="flex items-center justify-center before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
                <span className="px-2 bg-primary-100 text-white">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google button */}
            <button type="button" className="w-full btn btn-primary mt-5">
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
