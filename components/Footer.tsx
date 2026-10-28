/**
 * Author: Marc Millare
 * Date: 10-22-2026
 * Description:
 * -This component acts as the footer for the page.
 * -Inputs: There are no inputs for this component.
 * -Output: Footer for the page. It contains address and contact information for the school.
 */

const Footer = () => {
  return (
    <footer className="sticky bottom-0 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col items-center justify-between">
        <h1 className="font-medium text-slate-900">
          New Generation High School
        </h1>
        <div className="flex items-center mt-4 gap-4">
          <p className="text-xs font-light">
            1301 – 16 Avenue NW, Calgary, AB T2M 0L4, Canada
          </p>
          <p className="text-xs font-light">(403) 284-7248</p>
          <p className="text-xs underline text-blue-300">
            support@newgenhs.edu.ca
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
