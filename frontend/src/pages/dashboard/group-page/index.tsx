import { Link } from "react-router-dom";
import DashboardFooter from "@/components/dashboard-components/footer";

export default function GropupPage() {
  return (
    <>
      <div className="min-h-screen bg-base-300">
        <div className="bg-base-200 p-4">
          <div className="flex justify-between items-end">
            <div className="text-[var(--color-text)]">
              <div className="flex gap-3">
                <Link to="/dashboard">
                  {" "}
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <Link to="/dashboard">
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="okIconTitle"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  color="#000000"
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
                    <title id="okIconTitle">Ok</title>{" "}
                    <polyline points="4 13 9 18 20 7"></polyline>{" "}
                  </g>
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-white font-bold text-2xl">Office group</h1>
          </div>
          <div className="mt-2">
            <Link
              to="/addgroup"
              className="btn btn-primary btn-soft mt-3 rounded-full"
            >
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
              Add member
            </Link>
          </div>
        </div>

        <h2 className="mt-2 px-4 text-white">
          You are all settled up in this group
        </h2>

        <div className=" flex gap-3 relative p-4 overflow-x-auto no-scrollbar">
          <button className="btn btn-primary">Settle up</button>
          <button className="btn btn-primary">Charts</button>
          <button className="btn btn-primary">Balances</button>
          <button className="btn btn-primary">Totals</button>
          <button className="btn btn-primary">Convert to usd</button>
          <button className="btn btn-primary">whiteboard</button>
          <button className="btn btn-primary">Export</button>
        </div>

        <div className="mt-5 text-center">
          <h2 className="text-white">You are all settled up</h2>
          <p className="text-gray-300">Tap to show settled expense</p>
        </div>

        <div className="flex justify-end fixed bottom-22 right-3">
          <Link to="/addexpense" className="btn btn-primary mt-5 rounded-full">
            + Add expense
          </Link>
        </div>

        <DashboardFooter />
      </div>
    </>
  );
}
