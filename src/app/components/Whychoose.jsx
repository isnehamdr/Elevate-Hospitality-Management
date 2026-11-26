// import {
//   Briefcase, Network, TrendingUp, ShieldCheck, Wallet,
//   Laptop, GraduationCap, FileText, KeyRound,
// } from "lucide-react";

// const REASONS = [
//   {
//     icon: Briefcase,
//     title: "Professional Hospitality Management",
//     text: "Experienced management systems designed around professional hotel standards.",
//   },
//   {
//     icon: Network,
//     title: "Strong Sales & Marketing Network",
//     text: "Access to corporate, travel trade, group, MICE and digital business opportunities.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Revenue-Focused Strategy",
//     text: "Data-driven pricing, distribution, forecasting and revenue optimization.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Operational Excellence",
//     text: "Systematic processes, SOPs, quality controls and performance monitoring.",
//   },
//   {
//     icon: Wallet,
//     title: "Practical Cost Control",
//     text: "Efficient purchasing, inventory, manpower and departmental cost management.",
//   },
//   {
//     icon: Laptop,
//     title: "Digital Expertise",
//     text: "Modern digital marketing, social media, online reputation and distribution strategies.",
//   },
//   {
//     icon: GraduationCap,
//     title: "Human Capital Development",
//     text: "Recruitment, training, performance management and team development.",
//   },
//   {
//     icon: FileText,
//     title: "Transparent Reporting",
//     text: "Regular performance reporting and measurable business indicators.",
//   },
//   {
//     icon: KeyRound,
//     title: "Owner-Focused Management",
//     text: "Management decisions aligned with the commercial objectives and long-term interests of owners and investors.",
//   },
// ];

// export default function WhyChoose() {
//   return (
//     <section id="why" className="bg-slate-50 py-14 sm:py-16 lg:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="mx-auto max-w-2xl text-center">
//           <p className="text-sm font-medium text-[#b8935a] lg:text-lg">Why choose Elevate</p>
//           <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#0f2547] md:text-4xl">
//             Nine reasons owners stay with us
//           </h2>
//         </div>

//         {/* Cards: 1 column on phones, 2 on tablets, 3 on laptops and up */}
//         <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3">
//           {REASONS.map(({ icon: Icon, title, text }) => (
//             <article
//               key={title}
//               className="rounded-xl border-t-4 border-[#b8935a] bg-white p-6 shadow-sm transition-shadow hover:shadow-md motion-reduce:transition-none sm:last:col-span-2 lg:last:col-span-1"
//             >
//               <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#0f2547]/5">
//                 <Icon size={22} className="text-[#0f2547]" aria-hidden="true" />
//               </span>
//               <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-[#0f2547]">{title}</h3>
//               <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import { Briefcase, TrendingUp, ShieldCheck, KeyRound, ArrowRight } from "lucide-react";

const REASONS = [
  {
    icon: Briefcase,
    title: "Professional Hospitality Management",
    text: "Experienced systems designed around professional hotel standards.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-Focused Strategy",
    text: "Data-driven pricing, distribution, forecasting and optimization.",
  },
  {
    icon: ShieldCheck,
    title: "Operational Excellence",
    text: "SOPs, quality controls and performance monitoring.",
  },
  {
    icon: KeyRound,
    title: "Owner-Focused Management",
    text: "Decisions aligned with the long-term interests of owners and investors.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[#b8935a] sm:text-lg">Why choose Elevate</p>
          <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#0f2547] md:text-4xl">
            Why owners stay with us
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-xl  bg-white p-6 shadow-sm transition-shadow hover:shadow-md motion-reduce:transition-none"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#0f2547]/5">
                <Icon size={22} className="text-[#0f2547]" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-[#0f2547]">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        {/* <div className="mt-10 text-center">
          <Link
            href="/why-elevate"
            className="inline-flex items-center gap-2 font-semibold text-[#0f2547] transition-colors hover:text-[#b8935a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8935a]"
          >
            See all reasons <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}