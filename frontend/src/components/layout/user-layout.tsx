import { Toaster } from "../ui/sonner";
import Footer from "../user-components/footer";
import Header from "../user-components/header";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}
