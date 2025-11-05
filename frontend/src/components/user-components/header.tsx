import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm px-4 py-4 flex items-center justify-between">
      <div>
        <h1 className="font-bold text-cyan-800">Expense Tracker</h1>
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
        <Link
          to="/login"
          className="inline-block rounded-sm border bg-[#242424] border-[#242424] px-5 py-1.5 text-sm leading-normal text-[#ffffff] hover:border-[#ffffff]"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="inline-block rounded-sm border bg-[#242424] border-[#242424] px-5 py-1.5 text-sm leading-normal text-[#ffffff] hover:border-[#ffffff]"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
