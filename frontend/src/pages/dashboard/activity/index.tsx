import DashboardFooter from "@/components/dashboard-components/footer";
import DashboardHeder from "@/components/dashboard-components/header";
import { Link } from "react-router-dom";

export default function Activity() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <DashboardHeder />
        <div className="flex-grow relative p-4 pb-20 bg-base-300">
          <div className="flex  flex-col justify-between text-[var(--color-text)]">
            <div>
              <div className="flex justify-between">
                <h1>Activity</h1>
              </div>

              <div className="flex gap-3 mt-5 items-center">
                <div className="relative">
                  <img
                    src="./public/activity.svg"
                    className="w-18 h-18"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="./public/profile.svg"
                    className="rounded-full w-10 h-15 absolute left-10"
                    alt=""
                  />
                </div>
                <div className=" w-full flex flex-col">
                  <h2>
                    <strong>You</strong> added <strong>"Test"</strong> in{" "}
                    <strong>"Test"</strong>.
                  </h2>
                  <span>You do not own anything</span>
                  <small className="text-muted">Today 2:15 PM</small>
                </div>
              </div>
              <div className="flex gap-3 mt-5 items-center">
                <div className="relative">
                  <img src="./public/group.svg" className="w-18 h-18" alt="" />
                </div>
                <div>
                  <img
                    src="./public/profile.svg"
                    className="rounded-full w-10 h-15 absolute left-10"
                    alt=""
                  />
                </div>
                <div className=" w-full flex flex-col">
                  <h2>
                    <strong>You</strong> create group <strong>"Test"</strong>.
                  </h2>
                  <small className="text-muted">Today 2:15 PM</small>
                </div>
              </div>
            </div>
            <div className="flex justify-end absolute bottom-21 right-3">
              <Link
                to="/addexpense"
                className="btn btn-primary mt-5 rounded-full"
              >
                + Add expense
              </Link>
            </div>
          </div>
        </div>{" "}
        {/* bottom padding prevents overlap */}
        <DashboardFooter />
      </div>
    </>
  );
}
