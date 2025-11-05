import UserLayout from "@/components/layout/user-layout";
import { DialogBox } from "./form";

export default function HomePage() {
  return (
    <UserLayout>
      <div className="py-10 px-5">
        <DialogBox
          btnText="Add Expance"
          title="Add Expense"
          description="Create expense entry"
        />
      </div>
    </UserLayout>
  );
}
