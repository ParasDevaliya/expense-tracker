import UserLayout from "@/components/layout/user-layout";
import { DialogBox } from "./form";

export default function HomePage() {
  return (
    <>
      <title>Expense Tracker</title>
      <UserLayout>
        {/* <div className="py-10 px-5">
          <DialogBox
          btnText="Add Expence"
          title="Add Expense"
          description="Create expense entry"
          />
          </div>{" "} */}
        <div className="min-h-screen flex flex-col gap-5 items-center justify-center bg-brand ">
          <h1 className="text-white">home page</h1>
          <button className="btn btn-soft btn-primary">Primary</button>
        </div>
      </UserLayout>
    </>
  );
}
