import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-bold text-slate-900">
          New Generation High School
        </h1>
        <div className="flex gap-4">
          <Link href={"#overview"}>Overview</Link>
          <Link href={"#students"}>Students</Link>
          <Link href={"#add"}>Add Student</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
