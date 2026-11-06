"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hotel, Menu, X } from "lucide-react";
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Markets", href: "/markets" },
  { label: "Partners", href: "/partners" },
];
const CONTACT_LINK = { label: "Contact Us", href: "/contact" };
const SITE = { name: "Elevate", fullName: "Elevate Hospitality Management" };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu after navigating
  useEffect(() => setOpen(false), [pathname]);

  // Subtle shadow once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the menu; page scroll is locked while it is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const linkClass =
    "text-md font-medium text-[#0f2547] transition-colors hover:text-[#b8935a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8935a]";

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8935a]"
          aria-label={`${SITE.fullName} home`}
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded bg-[#0f2547] text-white">
            <Hotel size={28} aria-hidden="true" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-serif text-2xl font-bold text-[#0f2547]">{SITE.name}</span>
            <span className="hidden truncate text-[11px] sm:text-md font-medium text-slate-500 min-[400px]:block">
              Hospitality Management
            </span>
          </span>
        </Link>

        {/* Desktop navigation (large screens and up) */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`${linkClass} ${
                l.href === pathname ? "border-b-2 border-[#b8935a] pb-0.5" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={CONTACT_LINK.href}
            className="rounded bg-[#0f2547] px-5 py-2.5 text-md font-medium text-white transition-colors hover:bg-[#1d3d6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8935a]"
          >
            {CONTACT_LINK.label}
          </Link>
        </nav>

        {/* Mobile and tablet toggle */}
        <button
          type="button"
          className="-mr-2 grid h-11 w-11 place-items-center rounded text-[#0f2547] hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b8935a] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile and tablet panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-100 bg-white`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 pb-6 pt-2 sm:px-6" aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-slate-100 py-3.5 text-base font-medium text-[#0f2547] hover:text-[#b8935a]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={CONTACT_LINK.href}
            onClick={() => setOpen(false)}
            className="mt-5 rounded bg-[#0f2547] px-5 py-3.5 text-center font-semibold text-white hover:bg-[#1d3d6e]"
          >
            {CONTACT_LINK.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}


