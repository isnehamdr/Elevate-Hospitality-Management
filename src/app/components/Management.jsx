const CYCLE = [
  { title: "Analyze", text: "Evaluate performance and find opportunities." },
  { title: "Strategize", text: "Shape a plan around the property and its market." },
  { title: "Implement", text: "Put corrective actions and new systems in place." },
  { title: "Monitor", text: "Track measurable indicators and report regularly." },
  { title: "Improve", text: "Refine strategy to sustain results." },
];

/* ---- Circle geometry (SVG units) ---- */
const W = 600;
const H = 420;
const CX = 300;
const CY = 225;
const R = 150; // ring radius
const NODE = 32; // node radius
const GAP = 17; // degrees trimmed from each end of an arc so arrows stop before the nodes
const START = -90; // first step at the top

const rad = (deg) => (deg * Math.PI) / 180;
const pt = (deg, r = R) => ({
  x: Math.round((CX + r * Math.cos(rad(deg))) * 100) / 100,
  y: Math.round((CY + r * Math.sin(rad(deg))) * 100) / 100,
});

const STEP_DEG = 360 / CYCLE.length;

const nodes = CYCLE.map((s, i) => {
  const deg = START + i * STEP_DEG;
  const p = pt(deg);
  // Where the title goes: just outside the node, anchored away from the ring
  const lp = pt(deg, R + NODE + 12);
  const c = Math.cos(rad(deg));
  const anchor = c > 0.3 ? "start" : c < -0.3 ? "end" : "middle";
  const dy = Math.sin(rad(deg)) < -0.9 ? 0 : 7; // top label sits above; others align to middle
  return { ...s, n: i + 1, p, lp, anchor, dy };
});

const arcs = CYCLE.map((_, i) => {
  const a1 = pt(START + i * STEP_DEG + GAP);
  const a2 = pt(START + (i + 1) * STEP_DEG - GAP);
  return `M ${a1.x} ${a1.y} A ${R} ${R} 0 0 1 ${a2.x} ${a2.y}`;
});

export default function Management() {
  return (
    <section id="cycle" className="bg-[#0f2547] py-14 sm:py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10 lg:px-8">
        {/* Left, top: heading and text */}
        <div className="lg:col-start-1 lg:row-start-1">
          <p className="text-sm font-medium text-[#b8935a]">Our approach</p>
          <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
            Our management cycle
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-white/70">
            We keep evaluating performance, acting on opportunities and refining strategy to reach
            sustainable results. Every hotel&apos;s plan is customized to its location, market segment,
            facilities, brand, investment structure and competition.
          </p>
        </div>

        {/* Right: the cycle (below the heading on phones and tablets) */}
        <div className="mx-auto w-full max-w-xl lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <marker
                id="cycle-arrow"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#b8935a" />
              </marker>
            </defs>

            {/* Faint full ring so the loop reads as one circle */}
            <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 6" />

            {/* Arrows between steps, clockwise */}
            {arcs.map((d) => (
              <path key={d} d={d} fill="none" stroke="#b8935a" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#cycle-arrow)" />
            ))}

            {/* Centre label */}
            <text x={CX} y={CY - 6} textAnchor="middle" className="font-serif" fill="#ffffff" fontSize="24" fontWeight="700">
              Management
            </text>
            <text x={CX} y={CY + 22} textAnchor="middle" className="font-serif" fill="#b8935a" fontSize="24" fontWeight="700">
              cycle
            </text>

            {/* Steps */}
            {nodes.map((s) => (
              <g key={s.title}>
                <circle cx={s.p.x} cy={s.p.y} r={NODE} fill="#0f2547" stroke="#b8935a" strokeWidth="2.5" />
                <text x={s.p.x} y={s.p.y} textAnchor="middle" dominantBaseline="central" className="font-serif" fill="#b8935a" fontSize="26" fontWeight="700">
                  {s.n}
                </text>
                <text x={s.lp.x} y={s.lp.y + s.dy} textAnchor={s.anchor} fill="#ffffff" fontSize="19" fontWeight="600">
                  {s.title}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Left, bottom: step details */}
        <div className="lg:col-start-1 lg:row-start-2">
          <ol className="border-t border-white/15">
            {CYCLE.map((s, i) => (
              <li key={s.title} className="flex items-start gap-4 border-b border-white/15 py-4 sm:py-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-[#b8935a] font-serif text-lg font-bold text-[#b8935a]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-tight text-white">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm font-medium text-[#b8935a]">
            Then the cycle repeats, starting again at Analyze.
          </p>
        </div>
      </div>
    </section>
  );
}