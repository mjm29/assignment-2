/**
 * Author: Marc Millare
 * Date: 10-22-2026
 * Description:
 * -This component acts as the header for the page.
 * -Inputs: There are no inputs for this component.
 * -Output: Header for the page containing 3 links to each of the major sections.
 */
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-1 bg-white border-b border-slate-200">
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
