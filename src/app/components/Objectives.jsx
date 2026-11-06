const AIMS = [
  "Maximize hotel revenue and profitability",
  "Establish professional and systematic hotel operations",
  "Develop strong sales and marketing strategies",
  "Improve guest satisfaction and service standards",
  "Build skilled, motivated, service-oriented hospitality teams",
  "Strengthen hotel brands and market presence",
  "Improve online visibility and reputation",
  "Implement effective revenue and cost-control systems",
];

const OUTCOME = "Create sustainable value for hotel owners and investors";

export default function Objectives() {
  return (
    <section id="objectives" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-0">
        {/* Heading: stays in view beside the list on large screens */}
        <div className="lg:col-span-6">
          <div className="lg:sticky lg:top-28">
            <p className="text-lg font-medium text-[#b8935a] tracking-wide uppercase">Strategic objectives</p>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#0f2547] sm:text-4xl xl:text-5xl max-w-xl mt-6 ">
              What every property we manage works toward
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate-600 text-lg">
              Eight aims shape how we run a hotel day to day. All of them serve one result.
            </p>
          </div>
        </div>

        {/* Ruled list, no cards */}
        <div className="lg:col-span-6">
          <ul className="border-t border-slate-200">
            {AIMS.map((aim) => (
              <li
                key={aim}
                className="group flex items-center gap-4 border-b border-slate-200 py-4 sm:gap-5 sm:py-5"
              >
                <span
                  aria-hidden="true"
                  className="h-0.5 w-4 shrink-0 bg-[#b8935a] transition-all duration-300 group-hover:w-8 motion-reduce:transition-none"
                />
                <span className="font-serif text-lg leading-snug text-[#0f2547] sm:text-xl">
                  {aim}
                </span>
              </li>
            ))}
          </ul>

          {/* The result the eight aims lead to */}
          <div className="mt-6 flex items-start gap-4 bg-[#0f2547] p-5 sm:items-center sm:gap-5 sm:p-7">
            <span aria-hidden="true" className="mt-3 h-0.5 w-8 shrink-0 bg-[#b8935a] sm:mt-0 sm:w-10" />
            <p className="font-serif text-lg leading-snug text-white sm:text-xl lg:text-2xl">
              {OUTCOME}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}