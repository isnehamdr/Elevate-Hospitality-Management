"use client";

import { useState } from "react";
import { Hotel, Landmark, Building2, RefreshCw, Check } from "lucide-react";

const PARTNERS = [
  {
    tab: "Hotel Owners",
    icon: Hotel,
    text: "Professional management designed to improve performance, profitability and asset value.",
    list: ["Hotel Owners", "Resort Owners", "Boutique Hotel Owners", "Independent Hotel Operators", "Owners seeking professional hotel management"],
  },
  {
    tab: "Investors",
    icon: Landmark,
    text: "A structured hospitality management approach focused on sustainable returns and long-term value creation.",
    list: ["Hospitality Investors", "Hospitality Investment Groups"],
  },
  {
    tab: "Developers",
    icon: Building2,
    text: "End-to-end pre-opening and operational support, from project preparation through market launch and ongoing management.",
    list: ["Hotel Developers", "Property Developers"],
  },
  {
    tab: "Underperforming Hotels",
    icon: RefreshCw,
    text: "A practical turnaround strategy focused on revenue growth, cost control, operational improvement and market repositioning.",
    list: ["Reposition a brand", "Re-flag an operational hotel", "Turn around an underperforming business"],
  },
];

export default function Partners() {
  const [active, setActive] = useState(0);
  const current = PARTNERS[active];
  const Icon = current.icon;

  // Arrow keys, Home and End move between tabs (standard tab behaviour)
  const onKeyDown = (e) => {
    const last = PARTNERS.length - 1;
    let next = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`partner-tab-${next}`)?.focus();
  };

  return (
    <section id="partners" className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[#b8935a]">Partnership opportunities</p>
          <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#0f2547] md:text-4xl">
            Who we work with
          </h2>
        </div>

        {/* Tabs: 2x2 on phones, one row from tablets up */}
        <div
          role="tablist"
          aria-label="Who we work with"
          onKeyDown={onKeyDown}
          className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-2 sm:mt-10 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center"
        >
          {PARTNERS.map((p, i) => {
            const selected = i === active;
            return (
              <button
                key={p.tab}
                id={`partner-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls="partner-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`rounded border px-4 py-3 text-sm font-semibold leading-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8935a] motion-reduce:transition-none sm:px-5 ${
                  selected
                    ? "border-[#0f2547] bg-[#0f2547] text-white"
                    : "border-slate-200 bg-white text-[#0f2547] hover:border-[#b8935a]"
                }`}
              >
                {p.tab}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          id="partner-panel"
          role="tabpanel"
          aria-labelledby={`partner-tab-${active}`}
          className="mx-auto mt-5 grid max-w-4xl gap-6 rounded-xl bg-white p-6 shadow-sm sm:mt-6 sm:p-8 md:grid-cols-[1fr_auto] md:gap-10"
        >
          <div>
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#0f2547]">
              <Icon size={24} className="text-[#b8935a]" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-[#0f2547]">For {current.tab}</h3>
            <p className="mt-2 leading-relaxed text-slate-600">{current.text}</p>
          </div>

          <ul className="space-y-2.5 border-t border-slate-100 pt-5 text-sm text-slate-700 md:min-w-[15rem] md:max-w-xs md:border-l md:border-t-0 md:pl-8 md:pt-0">
            {current.list.map((item) => (
              <li key={item} className="flex gap-2.5">
                <Check size={15} className="mt-0.5 shrink-0 text-[#b8935a]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
          Planning a new hotel, opening a resort, improving a property, repositioning a brand or re-flagging
          an operating hotel? We provide one integrated management solution.
        </p>
      </div>
    </section>
  );
}