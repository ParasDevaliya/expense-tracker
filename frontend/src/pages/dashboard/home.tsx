import DashboardFooter from "@/components/dashboard-components/footer";
import DashboardHeder from "@/components/dashboard-components/header";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeder />
      <div className="flex-grow relative p-4 pb-20 bg-base-300">
        <div className="flex  flex-col justify-between ">
          <div>
            <div className="flex justify-between">
              <h1 className="text-white">You are all settled up!</h1>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      height="25px"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M18.48 18.5368H21M4.68 12L3 12.044M4.68 12C4.68 13.3255 5.75451 14.4 7.08 14.4C8.40548 14.4 9.48 13.3255 9.48 12C9.48 10.6745 8.40548 9.6 7.08 9.6C5.75451 9.6 4.68 10.6745 4.68 12ZM10.169 12.0441H21M12.801 5.55124L3 5.55124M21 5.55124H18.48M3 18.5368H12.801M17.88 18.6C17.88 19.9255 16.8055 21 15.48 21C14.1545 21 13.08 19.9255 13.08 18.6C13.08 17.2745 14.1545 16.2 15.48 16.2C16.8055 16.2 17.88 17.2745 17.88 18.6ZM17.88 5.4C17.88 6.72548 16.8055 7.8 15.48 7.8C14.1545 7.8 13.08 6.72548 13.08 5.4C13.08 4.07452 14.1545 3 15.48 3C16.8055 3 17.88 4.07452 17.88 5.4Z"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        defaultChecked
                      />
                      <span className="label-text">All groups</span>
                    </label>
                  </li>
                  <li>
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                      />
                      <span className="label-text">Outstanding balances</span>
                    </label>
                  </li>
                  <li>
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                      />
                      <span className="label-text">Groups you owe</span>
                    </label>
                  </li>
                  <li>
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                      />
                      <span className="label-text">Groups that owe you</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <Link to="/grouppage">
              {" "}
              <div className="flex gap-3 mt-5">
                <div>
                  <img src="./public/bg.svg" className="w-18 h-18" alt="" />
                </div>
                <div>
                  <h2 className="text-white">Office expense</h2>
                  <p className="text-white">settled up</p>
                </div>
              </div>
            </Link>
            <Link to="/grouppage">
              {" "}
              <div className="flex gap-3 mt-3">
                <div>
                  <img src="./public/file.svg" className="w-18 h-18" alt="" />
                </div>
                <div>
                  <h2 className="text-white">No-group expense</h2>
                  <p className="text-white">no expense</p>
                </div>
              </div>
            </Link>

            <div className="flex justify-center">
              <Link to="/addgroup" className="btn btn-primary btn-soft mt-3">
                <svg
                  fill="#000000"
                  height="18px"
                  width="18px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 328.5 328.5"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <polygon points="96.333,150.918 96.333,135.918 55.667,135.918 55.667,95.251 40.667,95.251 40.667,135.918 0,135.918 0,150.918 40.667,150.918 40.667,191.583 55.667,191.583 55.667,150.918 "></polygon>{" "}
                        <path d="M259.383,185.941H145.858c-38.111,0-69.117,31.006-69.117,69.117v39.928H328.5v-39.928 C328.5,216.948,297.494,185.941,259.383,185.941z M313.5,279.987H91.741v-24.928c0-29.84,24.276-54.117,54.117-54.117h113.524 c29.84,0,54.117,24.277,54.117,54.117L313.5,279.987L313.5,279.987z"></path>{" "}
                        <path d="M202.621,178.84c40.066,0,72.662-32.597,72.662-72.663s-32.596-72.663-72.662-72.663s-72.663,32.596-72.663,72.663 S162.555,178.84,202.621,178.84z M202.621,48.515c31.795,0,57.662,25.867,57.662,57.663s-25.867,57.663-57.662,57.663 c-31.796,0-57.663-25.868-57.663-57.663S170.825,48.515,202.621,48.515z"></path>{" "}
                      </g>{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g>{" "}
                    </g>{" "}
                  </g>
                </svg>{" "}
                Start a new group
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-end fixed bottom-22 right-3">
          <Link to="/addexpense" className="btn btn-primary mt-5 rounded-full">
            + Add expense
          </Link>
        </div>
      </div>{" "}
      {/* bottom padding prevents overlap */}
      <DashboardFooter />
    </div>
  );
}
