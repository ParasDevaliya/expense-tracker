import DashboardFooter from "@/components/dashboard-components/footer";
import DashboardHeder from "@/components/dashboard-components/header";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeder />
      <div className="flex-grow p-4 pb-20">
        <div className="flex h-full flex-col justify-between">
          <h1>Main UI</h1>
          <h2>main</h2>
        </div>
      </div>{" "}
      {/* bottom padding prevents overlap */}
      <DashboardFooter />
    </div>
  );
}
