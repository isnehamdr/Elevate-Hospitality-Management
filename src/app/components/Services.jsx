// import {
//   Hotel, Megaphone, Gauge, Globe, UtensilsCrossed,
//   UserCheck, Wallet, Rocket, RefreshCw, Check,
// } from "lucide-react";

// const SERVICES = [
//   {
//     icon: Hotel,
//     title: "Hotel Operations Management",
//     text: "Complete operational management of hotels and resorts.",
//     items: ["Front Office", "Housekeeping", "Food & Beverage", "Engineering & Maintenance", "Security", "Guest Services", "Quality Assurance", "Standard Operating Procedures"],
//   },
//   {
//     icon: Megaphone,
//     title: "Sales & Marketing Management",
//     text: "Strategic programs that grow market share and revenue.",
//     items: ["Corporate Sales", "Travel Trade Relationships", "Group Business", "MICE", "Destination Marketing", "Key Account Management", "Market Development", "Promotional Campaigns"],
//   },
//   {
//     icon: Gauge,
//     title: "Revenue Management",
//     text: "A revenue-focused approach to every room and channel.",
//     items: ["Room Pricing Strategy", "Occupancy Optimization", "Rate Management", "Demand Forecasting", "Channel Management", "Inventory Optimization", "Competitor Analysis", "ADR and RevPAR Improvement"],
//   },
//   {
//     icon: Globe,
//     title: "Digital Marketing & Social Media",
//     text: "Stronger hotel brands, online and in search.",
//     items: ["Brand Positioning", "Social Media Management", "Digital Advertising", "Content Strategy", "Online Campaigns", "Search Visibility", "Online Reputation Management", "Direct Booking Support"],
//   },
//   {
//     icon: UtensilsCrossed,
//     title: "Food & Beverage Management",
//     text: "F&B solutions from menu to banquet.",
//     items: ["Restaurant Operations", "Bar Operations", "Menu Planning", "Food & Beverage Cost Control", "Banquet Operations", "Events & MICE Catering", "F&B Revenue Optimization", "Quality & Service Standards"],
//   },
//   {
//     icon: UserCheck,
//     title: "Human Resource Management",
//     text: "Capable, motivated teams for every property.",
//     items: ["Recruitment", "Staff Training", "Orientation Programs", "Performance Management", "Career Development", "Organizational Structure", "Manpower Planning", "Employee Engagement"],
//   },
//   {
//     icon: Wallet,
//     title: "Financial & Cost Management",
//     text: "Support focused on improving profitability.",
//     items: ["Annual Budget Preparation", "Financial Monitoring", "Cost Control", "Purchasing Systems", "Inventory Management", "Expense Monitoring", "Departmental Performance Analysis", "Profitability Improvement"],
//   },
//   {
//     icon: Rocket,
//     title: "Hotel Pre-Opening & Setup",
//     text: "End-to-end support for new hotel projects.",
//     items: ["Concept Development", "Hotel Positioning", "SOP Development", "Recruitment & Training", "Procurement Support", "Pre-Opening Sales Strategy", "Branding & Digital Setup", "Operational Readiness"],
//   },
//   {
//     icon: RefreshCw,
//     title: "Hotel Turnaround & Business Development",
//     text: "Practical plans for underperforming hotels.",
//     items: ["Business Diagnosis", "Operational Review", "Team Restructuring", "Sales Improvement", "Cost Reduction", "Brand Repositioning", "Market Development", "Sustainable Growth Planning"],
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="bg-slate-50 py-14 sm:py-16 lg:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="mx-auto max-w-2xl text-center">
//           <p className="text-sm font-medium  lg:text-lg text-[#b8935a]">Core services</p>
//           <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#0f2547] md:text-4xl">
//             Everything a hotel needs, under one management team
//           </h2>
//           <p className="mt-4 leading-relaxed text-slate-600">
//             Nine services covering every stage and department of a hotel or resort.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3">
//           {SERVICES.map(({ icon: Icon, title, text, items }) => (
//             <article
//               key={title}
//               className="flex flex-col rounded-xl border border-slate-200 border-t-4 border-t-[#0f2547] bg-white p-6 shadow-sm transition-shadow hover:shadow-md motion-reduce:transition-none"
//             >
//               <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#0f2547]">
//                 <Icon size={22} className="text-[#b8935a]" aria-hidden="true" />
//               </span>

//               <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-[#0f2547]">{title}</h3>
//               <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>

//               <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm text-slate-700">
//                 {items.map((item) => (
//                   <li key={item} className="flex gap-2.5">
//                     <Check size={15} className="mt-0.5 shrink-0 text-[#b8935a]" aria-hidden="true" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import {
  Hotel, Megaphone, Gauge, Globe, UtensilsCrossed,
  UserCheck, Wallet, Rocket, RefreshCw, ArrowRight,
} from "lucide-react";

const SERVICES = [
  { icon: Hotel, title: "Hotel Operations", text: "Complete management of hotels and resorts." },
  { icon: Megaphone, title: "Sales & Marketing", text: "Programs that grow market share and revenue." },
  { icon: Gauge, title: "Revenue Management", text: "Pricing and distribution for every room." },
  { icon: Globe, title: "Digital Marketing", text: "Stronger brands, online and in search." },
  { icon: UtensilsCrossed, title: "Food & Beverage", text: "F&B solutions from menu to banquet." },
  { icon: UserCheck, title: "Human Resources", text: "Capable, motivated teams for every property." },
  { icon: Wallet, title: "Financial & Cost Control", text: "Support focused on profitability." },
  { icon: Rocket, title: "Pre-Opening & Setup", text: "End-to-end support for new hotels." },
  { icon: RefreshCw, title: "Turnaround", text: "Practical plans for underperforming hotels." },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[#b8935a] lg:text-lg">Core services</p>
          <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#0f2547] md:text-4xl">
            Everything a hotel needs, under one management team
          </h2>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-[#b8935a] motion-reduce:transition-none"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#0f2547]">
                <Icon size={22} className="text-[#b8935a]" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold leading-snug text-[#0f2547]">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded bg-[#0f2547] px-6 py-3.5 text-sm font-semibold lg:text-lg text-white transition-colors hover:bg-[#1d3d6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8935a]"
          >
            View all services <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}