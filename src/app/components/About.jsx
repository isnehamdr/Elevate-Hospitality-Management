// import Image from "next/image";
// import {
//   Check, Eye, Target, Briefcase, Handshake, MapPin,
//   BedDouble, Banknote, Gauge, TrendingUp, Percent, Star, Wallet, Globe, Users,
// } from "lucide-react";

// const MISSION = [
//   "Deliver outstanding guest experiences",
//   "Generate sustainable returns for owners",
//   "Improve efficiency and profitability",
//   "Build strong, competitive brands",
//   "Develop skilled hospitality professionals",
//   "Advance Nepal's tourism industry",
// ];

// const KPIS = [
//   { icon: BedDouble, label: "Occupancy" },
//   { icon: Banknote, label: "ADR" },
//   { icon: Gauge, label: "RevPAR" },
//   { icon: TrendingUp, label: "Revenue Growth" },
//   { icon: Percent, label: "GOP" },
//   { icon: Star, label: "Guest Satisfaction" },
//   { icon: Wallet, label: "Cost Control" },
//   { icon: Globe, label: "Online Reputation" },
//   { icon: Users, label: "Team Performance" },
// ];

// const STATS = [
//   { icon: Briefcase, value: "9", label: "Core services" },
//   { icon: Handshake, value: "10", label: "Sales channels" },
//   { icon: MapPin, value: "4", label: "Destinations" },
// ];

// export default function About() {
//   return (
//     <section id="about" className="bg-slate-50 py-14 sm:py-16 lg:py-20">
//       <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
//         {/* Left: text, vision, mission */}
//         <div>
//           <p className="text-sm font-medium lg:text-lg text-[#b8935a]">About us</p>
//           <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#0f2547] md:text-4xl">
//             More than a management company
//           </h2>

//           <p className="mt-5 leading-relaxed text-slate-600">
//             We actively pursue hotel and resort opportunities: new developments, redevelopment,
//             repositioning of underperforming properties and reflagging of operating hotels. Our team
//             works with owners, investors, developers and promoters across branding, sales, revenue,
//             operations, HR, F&amp;B, digital marketing and financial control.
//           </p>
//           <p className="mt-4 leading-relaxed text-slate-600">
//             We build long-term partnerships through a collaborative, transparent and results-driven
//             approach, to get the most from every property while creating sustainable value for owners
//             and investors.
//           </p>

//           <div className="mt-8 grid gap-4 sm:grid-cols-2">
//             <div className="rounded-lg border-l-4 border-[#b8935a] bg-white p-5 shadow-sm">
//               <div className="flex items-center gap-2.5">
//                 <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0f2547]">
//                   <Eye size={18} className="text-[#b8935a]" aria-hidden="true" />
//                 </span>
//                 <h3 className="font-serif text-lg font-bold text-[#0f2547]">Our Vision</h3>
//               </div>
//               <p className="mt-3 text-sm leading-relaxed text-slate-600">
//                 To become a trusted and leading hospitality management company in Nepal and South Asia,
//                 known for professional management, innovative strategies and operational excellence.
//               </p>
//             </div>

//             <div className="rounded-lg border-l-4 border-[#0f2547] bg-white p-5 shadow-sm">
//               <div className="flex items-center gap-2.5">
//                 <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0f2547]">
//                   <Target size={18} className="text-[#b8935a]" aria-hidden="true" />
//                 </span>
//                 <h3 className="font-serif text-lg font-bold text-[#0f2547]">Our Mission</h3>
//               </div>
//               <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
//                 {MISSION.map((m) => (
//                   <li key={m} className="flex gap-2">
//                     <Check size={14} className="mt-1 shrink-0 text-[#b8935a]" aria-hidden="true" />
//                     {m}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Right: image + KPI card */}
//         <div className="flex flex-col gap-6">
//           <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl ">
//             <Image
//               src="/images/about.jpg"
//               alt="Hotel team and operations managed by Elevate Hospitality Management"
//               fill
//               sizes="(min-width: 1024px) 50vw, 100vw"
//               className="object-cover"
//             />
//           </div>

//           <div className="rounded-xl bg-white p-6 shadow-sm sm:p-7">
//             <h3 className="font-serif text-2xl font-bold text-[#0f2547]">How we measure success</h3>
//             <p className="mt-2 text-sm text-slate-600">
//               Our philosophy is based on measurable performance, not just keeping up day-to-day operations.
//             </p>

//             <ul className="mt-5 flex flex-wrap gap-2">
//               {KPIS.map(({ icon: Icon, label }) => (
//                 <li
//                   key={label}
//                   className="inline-flex items-center gap-2 rounded-full border border-[#b8935a] px-3.5 py-2 text-sm font-medium text-[#0f2547]"
//                 >
//                   <Icon size={15} className="text-[#b8935a]" aria-hidden="true" />
//                   {label}
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-7 grid grid-cols-3 gap-2 text-center sm:gap-3">
//               {STATS.map(({ icon: Icon, value, label }) => (
//                 <div key={label} className="rounded-lg bg-[#0f2547] px-1 py-4 sm:px-2">
//                   <Icon size={18} className="mx-auto text-[#b8935a]" aria-hidden="true" />
//                   <div className="mt-1 font-serif text-2xl font-bold text-[#b8935a] sm:text-3xl">{value}</div>
//                   <div className="text-xs text-white/80">{label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// const STATS = [
//   { value: "9", label: "Core services" },
//   { value: "10", label: "Sales channels" },
//   { value: "4", label: "Destinations" },
// ];

// export default function About() {
//   return (
//     <section id="about" className="bg-slate-50 py-14 sm:py-16 lg:py-20">
//       <div className=" grid  items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-24">
//         {/* Text */}
//         <div>
//           <p className="text-lg font-medium text-[#b8935a] sm:text-2xl ">About us</p>
//           <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0f2547] md:text-4xl lg:mt-4">
//             More than a management company
//           </h2>
//           <p className="mt-5 max-w-xl leading-relaxed text-slate-600 text-lg">
//             We develop, manage and improve hotels and resorts across Nepal, working with owners,
//             investors and developers on new projects, redevelopment and turnarounds. Our results-driven,
//             transparent approach creates sustainable value for every property we manage.
//           </p>
//           <Link
//             href="/about"
//             className="mt-7 inline-flex items-center gap-2 font-semibold text-[#0f2547] transition-colors hover:text-[#b8935a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8935a]"
//           >
//             Read more about us <ArrowRight size={16} aria-hidden="true" />
//           </Link>
//         </div>

//         {/* Image with stats */}
//         <div>
//           <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-[#0f2547] to-[#1d3d6e]">
//             <Image
//               src="/images/about.jpg"
//               alt="Hotel team and operations managed by Elevate Hospitality Management"
//               fill
//               sizes="(min-width: 1024px) 50vw, 100vw"
//               className="object-cover"
//             />
//           </div>
//           <dl className="grid grid-cols-3 rounded-b-xl bg-[#0f2547] py-5 text-center">
//             {STATS.map((s) => (
//               <div key={s.label} className="px-2">
//                 <dt className="sr-only">{s.label}</dt>
//                 <dd className="font-serif text-2xl font-bold text-[#b8935a] sm:text-3xl">{s.value}</dd>
//                 <p className="text-xs text-white/80 sm:text-sm" aria-hidden="true">{s.label}</p>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "9", label: "Core services" },
  { value: "10", label: "Sales channels" },
  { value: "4", label: "Destinations" },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 xl:gap-16">
        {/* Text */}
        <div>
          <p className="text-sm font-medium text-[#b8935a] sm:text-xl lg:text-lg">About us</p>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#0f2547] md:text-4xl lg:mt-3">
            More than a management company
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            We develop, manage and improve hotels and resorts across Nepal, working with owners,
            investors and developers on new projects, redevelopment and turnarounds. Our results-driven,
            transparent approach creates sustainable value for every property we manage.
          </p>
          {/* <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 text-lg font-semibold text-[#0f2547] transition-colors  hover:text-[#b8935a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8935a]"
          >
            Read more about us <ArrowRight size={16} aria-hidden="true" />
          </Link> */}
        </div>

        {/* Image with stats */}
        <div>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-[#0f2547] to-[#1d3d6e]">
            <Image
              src="/images/about.jpg"
              alt="Hotel team and operations managed by Elevate Hospitality Management"
              fill
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <dl className="grid grid-cols-3 rounded-b-xl bg-[#0f2547] py-5 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="px-2">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-2xl font-bold text-[#b8935a] sm:text-3xl">{s.value}</dd>
                <p className="text-xs text-white/80 sm:text-sm" aria-hidden="true">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}