export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-sm px-4 py-4 flex items-center justify-center mt-4">
      {/* add ayanamic year */}
      <p className="text-sm text-[#684958]">
        Copyrights &copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.
      </p>
    </footer>
  );
}
