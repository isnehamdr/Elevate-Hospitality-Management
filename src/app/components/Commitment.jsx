const STRENGTHS = [
  "Professional Management",
  "Market Knowledge",
  "Technology",
  "Sales Network",
  "Operational Discipline",
  "Financial Control",
];

export default function Commitment() {
  return (
    <section id="commitment" className="bg-[#0f2547] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-[#b8935a]">Our commitment</p>

        <h2 className="mx-auto mt-2 max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          We Don&apos;t Simply Manage Hotels. We Build Strong Hospitality Businesses.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/70">
          Our commitment combines six strengths to deliver measurable, sustainable results for our partners:
        </p>

        {/* The six strengths, joined by "+". The plus sits after each item, so when the row wraps
            on small screens a line ends with "+" instead of starting with one. */}
        <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-3 lg:mt-10 lg:max-w-5xl">
          {STRENGTHS.map((s, i) => (
            <li key={s} className="flex items-center gap-3">
              <span className="rounded border border-[#b8935a] px-3.5 py-2 text-sm font-medium text-white sm:px-4">
                {s}
              </span>
              {i < STRENGTHS.length - 1 && (
                <span aria-hidden="true" className="text-xl font-bold leading-none text-[#b8935a]">
                  +
                </span>
              )}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base lg:mt-10">
          We aim to build hotels that succeed in today&apos;s market and are positioned for long-term growth,
          stronger brand value, better profitability and exceptional guest experiences.
        </p>
      </div>
    </section>
  );
}