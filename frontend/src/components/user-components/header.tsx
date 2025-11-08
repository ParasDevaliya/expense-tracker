import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded user:", decoded);
        setUser(decoded);
        setIsLoggedIn(true);
      } catch (err) {
        console.error("Invalid token:", err);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="w-full bg-white shadow-sm px-4 py-4 flex items-center justify-between">
      <div>
        <h1 className="font-bold text-[#684958]">Expense Tracker</h1>
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Expense</Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-3">
        {isLoggedIn ? (
          <>
            <div className="flex items-center gap-3">
              {/* <p>Welcome {user?.username}</p> */}
              <button
                onClick={handleLogout}
              className="inline-block rounded-sm border bg-[#684958] border-[#684958] px-5 py-1.5 text-sm leading-normal text-white hover:border-[#946a7b] hover:bg-[#946a7b]"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="inline-block rounded-sm border bg-[#684958] border-[#684958] px-5 py-1.5 text-sm leading-normal text-white hover:border-[#946a7b] hover:bg-[#946a7b]"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="inline-block rounded-sm border bg-[#684958] border-[#684958] px-5 py-1.5 text-sm leading-normal text-white hover:border-[#946a7b] hover:bg-[#946a7b]"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
