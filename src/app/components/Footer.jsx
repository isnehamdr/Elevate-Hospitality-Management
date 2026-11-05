import Link from "next/link";
import { Hotel, Phone, MapPin } from "lucide-react";

const SITE = {
  fullName: "Elevate Hospitality Management",
  tagline: "Creating Value. Building Better Businesses.",
  description:
    "Hotel and resort management, pre-opening, sales and marketing, revenue management, turnaround and business development.",
  person: { name: "Dipak Pokhrel", role: "Managing Director" },
  phones: [
    { label: "+977 9862111047", href: "tel:+9779862111047" },
    { label: "+977 9764596097", href: "tel:+9779764596097" },
  ],
  address: "Head Office: Kathmandu, Nepal",
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

export default function Footer() {
  const year = new Date().getFullYear();
  const headingClass = "font-semibold text-white";
  const linkClass =
    "transition-colors hover:text-[#b8935a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8935a]";

  return (
    <footer className="bg-[#0f2547] text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-16">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${SITE.fullName} home`}>
            <span className="grid h-9 w-9 place-items-center rounded bg-white/10 text-[#b8935a]">
              <Hotel size={20} aria-hidden="true" />
            </span>
            <span className="font-serif text-xl font-bold text-white">{SITE.fullName}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{SITE.description}</p>
          <p className="mt-4 font-serif text-base italic text-[#b8935a]">{SITE.tagline}</p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className={headingClass}>Quick links</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={linkClass}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div className="lg:col-span-3">
          <h2 className={headingClass}>Our services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s}>
                <Link href="/#services" className={linkClass}>{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h2 className={headingClass}>Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <p>
              <span className="block font-medium text-white">{SITE.person.name}</span>
              {SITE.person.role}
            </p>
            <p className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-[#b8935a]" aria-hidden="true" />
              <span className="flex flex-col">
                {SITE.phones.map((p) => (
                  <a key={p.href} href={p.href} className={linkClass}>{p.label}</a>
                ))}
              </span>
            </p>
            <p className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#b8935a]" aria-hidden="true" />
              <span>{SITE.address}</span>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs sm:flex-row sm:text-left sm:px-6 lg:px-8">
          <p>© {year} {SITE.fullName}. All rights reserved.</p>
          <p>Nepal &amp; South Asia</p>
        </div>
      </div>
    </footer>
  );
}