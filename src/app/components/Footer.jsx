// // import Link from "next/link";
// // import { Hotel, Phone, MapPin } from "lucide-react";

// // const SITE = {
// //   fullName: "Elevate Hospitality Management",
// //   tagline: "Creating Value. Building Better Businesses.",
// //   description:
// //     "Hotel and resort management, pre-opening, sales and marketing, revenue management, turnaround and business development.",
// //   person: { name: "Dipak Pokhrel", role: "Managing Director" },
// //   phones: [
// //     { label: "+977 9862111047", href: "tel:+9779862111047" },
// //     { label: "+977 9764596097", href: "tel:+9779764596097" },
// //   ],
// //   address: "Head Office: Kathmandu, Nepal",
// // };

// // const QUICK_LINKS = [
// //   { label: "Home", href: "/" },
// //   { label: "About", href: "/#about" },
// //   { label: "Services", href: "/#services" },
// //   { label: "Why Us", href: "/#why" },
// //   { label: "Markets", href: "/#markets" },
// //   { label: "Partners", href: "/#partners" },
// //   { label: "Contact Us", href: "/#contact" },
// // ];

// // const SERVICES = [
// //   "Hotel Operations",
// //   "Sales & Marketing",
// //   "Revenue Management",
// //   "Digital Marketing",
// //   "Food & Beverage",
// //   "Human Resources",
// //   "Financial & Cost Control",
// //   "Pre-Opening & Setup",
// //   "Turnaround",
// // ];

// // export default function Footer() {
// //   const year = new Date().getFullYear();
// //   const headingClass = "font-semibold text-white";
// //   const linkClass =
// //     "transition-colors hover:text-[#b8935a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8935a]";

// //   return (
// //     <footer className="bg-[#0f2547] text-white/70">
// //       <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-16">
// //         {/* Brand */}
// //         <div className="sm:col-span-2 lg:col-span-4">
// //           <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${SITE.fullName} home`}>
// //             <span className="grid h-9 w-9 place-items-center rounded bg-white/10 text-[#b8935a]">
// //               <Hotel size={20} aria-hidden="true" />
// //             </span>
// //             <span className="font-serif text-xl font-bold text-white">{SITE.fullName}</span>
// //           </Link>
// //           <p className="mt-4 max-w-sm text-sm leading-relaxed">{SITE.description}</p>
// //           <p className="mt-4 font-serif text-base italic text-[#b8935a]">{SITE.tagline}</p>
// //         </div>

// //         {/* Quick links */}
// //         <nav aria-label="Footer" className="lg:col-span-2">
// //           <h2 className={headingClass}>Quick links</h2>
// //           <ul className="mt-4 space-y-2.5 text-sm">
// //             {QUICK_LINKS.map((l) => (
// //               <li key={l.label}>
// //                 <Link href={l.href} className={linkClass}>{l.label}</Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>

// //         {/* Services */}
// //         <div className="lg:col-span-3">
// //           <h2 className={headingClass}>Our services</h2>
// //           <ul className="mt-4 space-y-2.5 text-sm">
// //             {SERVICES.map((s) => (
// //               <li key={s}>
// //                 <Link href="/#services" className={linkClass}>{s}</Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Contact */}
// //         <div className="lg:col-span-3">
// //           <h2 className={headingClass}>Contact</h2>
// //           <address className="mt-4 space-y-3 text-sm not-italic">
// //             <p>
// //               <span className="block font-medium text-white">{SITE.person.name}</span>
// //               {SITE.person.role}
// //             </p>
// //             <p className="flex gap-3">
// //               <Phone size={16} className="mt-0.5 shrink-0 text-[#b8935a]" aria-hidden="true" />
// //               <span className="flex flex-col">
// //                 {SITE.phones.map((p) => (
// //                   <a key={p.href} href={p.href} className={linkClass}>{p.label}</a>
// //                 ))}
// //               </span>
// //             </p>
// //             <p className="flex gap-3">
// //               <MapPin size={16} className="mt-0.5 shrink-0 text-[#b8935a]" aria-hidden="true" />
// //               <span>{SITE.address}</span>
// //             </p>
// //           </address>
// //         </div>
// //       </div>

// //       {/* Bottom bar */}
// //       <div className="border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
// //         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs sm:flex-row sm:text-left sm:px-6 lg:px-8">
// //           <p>© {year} {SITE.fullName}. All rights reserved.</p>
// //           <p>Nepal &amp; South Asia</p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }


// import Link from "next/link";
// import { Hotel, Phone, MapPin } from "lucide-react";

// const SITE = {
//   fullName: "Elevate Hospitality Management",
//   tagline: "Creating Value. Building Better Businesses.",
//   description:
//     "Hotel and resort management, pre-opening, sales and marketing, revenue management, turnaround and business development.",
//   person: { name: "Sharan Ghale", role: "Managing Director" },
//   phones: [
//     { label: "+977 984-9331559", href: "tel:+9779849331559" },
   
//   ],
//   address: "Head Office: Kathmandu, Nepal",
// };

// const QUICK_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/#about" },
//   { label: "Services", href: "/#services" },
//   { label: "Why Us", href: "/#why" },
//   { label: "Markets", href: "/#markets" },
//   { label: "Partners", href: "/#partners" },
//   { label: "Contact Us", href: "/#contact" },
// ];

// const SERVICES = [
//   "Hotel Operations",
//   "Sales & Marketing",
//   "Revenue Management",
//   "Digital Marketing",
//   "Food & Beverage",
//   "Human Resources",
//   "Financial & Cost Control",
//   "Pre-Opening & Setup",
//   "Turnaround",
// ];

// export default function Footer() {
//   const year = new Date().getFullYear();
//   const headingClass = "font-semibold text-white";
//   const linkClass =
//     "transition-colors hover:text-[#b8935a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8935a]";
//   // Two columns that fill top to bottom, like a standard footer link list
//   const listClass = "mt-4 columns-2 gap-x-6 text-sm";
//   const itemClass = "break-inside-avoid pb-2.5";

//   return (
//     <footer className="bg-[#0f2547] text-white/70">
//       {/* Phones: 1 column. Tablets: 5-column grid (brand full width; links 2/5; services 3/5; contact full width).
//           Laptops and up: 12-column grid (brand 4; links 3; services 5; contact full width). */}
//       <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-10 px-4 py-12 sm:grid-cols-5 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-16">
//         {/* Brand */}
//         <div className="sm:col-span-5 lg:col-span-4">
//           <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${SITE.fullName} home`}>
//             <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-white/10 text-[#b8935a]">
//               <Hotel size={20} aria-hidden="true" />
//             </span>
//             <span className="font-serif text-xl font-bold leading-tight text-white">{SITE.fullName}</span>
//           </Link>
//           <p className="mt-4 max-w-sm text-sm leading-relaxed">{SITE.description}</p>
//           <p className="mt-4 font-serif text-base italic text-[#b8935a]">{SITE.tagline}</p>
//         </div>

//         {/* Quick links: two columns */}
//         <nav aria-label="Footer" className="sm:col-span-2 lg:col-span-3">
//           <h2 className={headingClass}>Quick links</h2>
//           <ul className={listClass}>
//             {QUICK_LINKS.map((l) => (
//               <li key={l.label} className={itemClass}>
//                 <Link href={l.href} className={linkClass}>{l.label}</Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Our services: two columns */}
//         <div className="sm:col-span-3 lg:col-span-5">
//           <h2 className={headingClass}>Our services</h2>
//           <ul className={listClass}>
//             {SERVICES.map((s) => (
//               <li key={s} className={itemClass}>
//                 <Link href="/#services" className={linkClass}>{s}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact: full-width row. Stacked on phones, three details side by side from tablets up */}
//         {/* <div className="border-t border-white/10 pt-8 sm:col-span-5 lg:col-span-12">
//           <h2 className={headingClass}>Contact</h2>
//           <address className="mt-4 grid gap-5 text-sm not-italic sm:grid-cols-3 sm:gap-8">
//             <p>
//               <span className="block font-medium text-white">{SITE.person.name}</span>
//               {SITE.person.role}
//             </p>
//             <p className="flex gap-3">
//               <Phone size={16} className="mt-0.5 shrink-0 text-[#b8935a]" aria-hidden="true" />
//               <span className="flex flex-col gap-1">
//                 {SITE.phones.map((p) => (
//                   <a key={p.href} href={p.href} className={linkClass}>{p.label}</a>
//                 ))}
//               </span>
//             </p>
//             <p className="flex gap-3">
//               <MapPin size={16} className="mt-0.5 shrink-0 text-[#b8935a]" aria-hidden="true" />
//               <span>{SITE.address}</span>
//             </p>
//           </address>
//         </div> */}
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-md sm:flex-row sm:px-6 sm:text-left lg:px-8">
//           <p>© {year} {SITE.fullName}. All rights reserved.</p>
//           <p>
//   Crafted by{" "}
//   <a
//     href="https://sait.com.np/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="font-medium text-white transition-colors hover:text-[#b8935a]"
//   >
//     S.A I.T Solution Nepal
//   </a>
// </p>
//         </div>
//       </div>
//     </footer>
//   );
// }





import Link from "next/link";
import NextImage from "next/image";


const SITE = {
  fullName: "Elevate Hospitality Management",
  tagline: "Creating Value. Building Better Businesses.",
  description:
    "Hotel and resort management, pre-opening, sales and marketing, revenue management, turnaround and business development.",
  facebook: "https://www.facebook.com/evatehospitalitymanagement/",
};

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why" },
  { label: "Markets", href: "/#markets" },
  { label: "Partners", href: "/#partners" },
  { label: "Contact Us", href: "/#contact" },
];

const SERVICES = [
  "Hotel Operations",
  "Sales & Marketing",
  "Revenue Management",
  "Digital Marketing",
  "Food & Beverage",
  "Human Resources",
  "Financial & Cost Control",
  "Pre-Opening & Setup",
  "Turnaround",
];

function FacebookIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const headingClass = "font-semibold text-white";
  const linkClass =
    "transition-colors hover:text-[#b8935a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8935a]";
  // Two columns that fill top to bottom, like a standard footer link list
  const listClass = "mt-4 columns-2 gap-x-6 text-sm";
  const itemClass = "break-inside-avoid pb-2.5";

  return (
    <footer className="bg-[#0f2547] text-white/70">
      {/* Phones: 1 column. Tablets: brand full width, then links 2/5 and services 3/5.
          Laptops and up: brand 4/12, links 3/12, services 5/12. */}
      <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-10 px-4 py-12 sm:grid-cols-5 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-16">
      
{/* Brand */}
<div className="sm:col-span-5 lg:col-span-4">
  <Link
    href="/"
    className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8935a]"
    aria-label={`${SITE.fullName} home`}
  >
    <span className="relative block sm:h-32 sm:w-32 h-20 w-20 shrink-0 bg-white">
      <NextImage
        src="/images/logo.png"
        alt={`${SITE.fullName} logo`}
        fill
        priority
        sizes="58px"
        className="object-contain object-left"
      />
    </span>
  </Link>

  <p className="mt-3 max-w-sm text-sm leading-relaxed">
    {SITE.description}
  </p>

  <p className="mt-4 font-serif text-base italic text-[#b8935a]">
    {SITE.tagline}
  </p>
</div>

        {/* Quick links: two columns */}
        <nav aria-label="Footer" className="sm:col-span-2 lg:col-span-3">
          <h2 className={headingClass}>Quick links</h2>
          <ul className={listClass}>
            {QUICK_LINKS.map((l) => (
              <li key={l.label} className={itemClass}>
                <Link href={l.href} className={linkClass}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Our services: two columns */}
        <div className="sm:col-span-3 lg:col-span-5">
          <h2 className={headingClass}>Our services</h2>
          <ul className={listClass}>
            {SERVICES.map((s) => (
              <li key={s} className={itemClass}>
                <Link href="/#services" className={linkClass}>{s}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-base sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>© {year} {SITE.fullName}. All rights reserved.</p>
          <p>
            Crafted by{" "}
            <a
              href="https://sait.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white transition-colors hover:text-[#b8935a]"
            >
              S.A I.T Solution Nepal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}