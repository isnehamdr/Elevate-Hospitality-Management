
import { Briefcase, Compass, Cpu, Network, ClipboardCheck, Landmark } from "lucide-react";

const STRENGTHS = [
  { icon: Briefcase, label: "Professional Management" },
  { icon: Compass, label: "Market Knowledge" },
  { icon: Cpu, label: "Technology" },
  { icon: Network, label: "Sales Network" },
  { icon: ClipboardCheck, label: "Operational Discipline" },
  { icon: Landmark, label: "Financial Control" },
];

export default function Commitment() {
  return (
    <section id="commitment" className="bg-[#0f2547] py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left: statement */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium lg:text-lg text-[#b8935a]">Our commitment</p>
            <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
              We Don&apos;t Simply Manage Hotels. We Build Strong Hospitality Businesses.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-white/70">
              Our commitment combines six strengths to deliver measurable, sustainable results for our
              partners.
            </p>
          </div>

          {/* Right: the six strengths */}
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:col-span-7">
            {STRENGTHS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex flex-col gap-4 rounded-xl border border-white/15 bg-white/5 p-4 transition-colors hover:border-[#b8935a] motion-reduce:transition-none sm:p-5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#b8935a]/60">
                  <Icon size={22} className="text-[#b8935a]" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold leading-snug text-white sm:text-base">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing statement */}
        <p className="mt-10 max-w-3xl border-t border-white/15 pt-8 leading-relaxed text-white/70 lg:mt-14">
          We aim to build hotels that succeed in today&apos;s market and are positioned for long-term growth,
          stronger brand value, better profitability and exceptional guest experiences.
        </p>
      </div>
    </section>
  );
}