import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "@/api/api";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await API.post("/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>Login | Expense Tracker</title>
      <div className="flex flex-col justify-center items-center h-screen p-5">
        <h1 className="text-center text-3xl font-medium mb-5">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm flex flex-col gap-6"
        >
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
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex justify-between mt-4">
                <label htmlFor="password" className="label text-black">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium underline text-black"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                className="input input-neutral w-full"
                autoComplete="off"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="******"
              />
            </div>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

            <button
              type="submit"
              className="w-full btn btn-neutral"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="text-center text-sm text-gray-600 mt-3">
              Don't have an account?{" "}
              <Link to="/register" className="text- font-medium">
                Sign up
              </Link>
            </div>

            <div className="relative mt-6 text-center text-sm text-gray-600">
              <div className="flex items-center justify-center before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
                <span className="px-2 bg-primary-100 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <button
              type="button"
              className="w-full btn btn-outline mt-5"
              // onClick={() => signupWithGoogle()}
            >
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
