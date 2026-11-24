
"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Markets", href: "#markets" },
  { label: "Partners", href: "#partners" },
];

const CONTACT_LINK = {
  label: "Contact Us",
  href: "#contact",
};

const SITE = {
  fullName: "Elevate Hospitality Management",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (href) => {
    const target = document.querySelector(href);

    if (!target) return;

    const headerOffset = 80;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setOpen(false);
  };

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = document.querySelectorAll(
      "#home, #about, #services, #markets, #partners, #contact"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Mobile menu keyboard and scroll handling
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const linkClass =
    "text-base font-medium text-[#0f2547] transition-colors duration-300 hover:text-[#b8935a]";

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="flex items-center"
          aria-label={`${SITE.fullName} home`}
        >
          <span className="relative block h-20 w-20 sm:h-24 sm:w-24">
            <NextImage
              src="/images/logoremovebg.png"
              alt={`${SITE.fullName} Logo`}
              fill
              priority
              sizes="96px"
              className="object-contain"
            />
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`${linkClass} ${
                activeSection === link.href.slice(1)
                  ? "border-b-2 border-[#b8935a] pb-1"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href={CONTACT_LINK.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(CONTACT_LINK.href);
            }}
            className="rounded bg-[#0f2547] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1d3d6e]"
          >
            {CONTACT_LINK.label}
          </a>
        </nav>

        {/* Hamburger Button */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded text-[#0f2547] transition-colors hover:bg-slate-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Full Width Drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-500 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`fixed right-0 top-0 z-[70] flex h-[100dvh] w-full flex-col bg-white shadow-2xl transition-transform duration-500 ease-in-out sm:w-full lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        {/* Drawer Header */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-100 px-5 sm:px-8">
          <span className="relative block h-14 w-24">
            <NextImage
              src="/images/logoremovebg.png"
              alt={`${SITE.fullName} Logo`}
              fill
              sizes="96px"
              className="object-contain"
            />
          </span>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-full text-[#0f2547] transition-colors hover:bg-slate-100"
            aria-label="Close navigation menu"
          >
            <X size={27} />
          </button>
        </div>

        {/* Drawer Navigation */}
        <nav
          className="flex flex-1 flex-col overflow-y-auto px-6 py-8 sm:px-10"
          aria-label="Mobile navigation"
        >
          {/* <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8935a]">
            Main Navigation
          </p> */}

          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`flex items-center justify-between border-b border-slate-100 py-5 text-xl font-semibold transition-all duration-300 hover:pl-2 hover:text-[#b8935a] sm:text-2xl ${
                activeSection === link.href.slice(1)
                  ? "text-[#b8935a]"
                  : "text-[#0f2547]"
              }`}
              style={{
                transitionDelay: open ? `${index * 60}ms` : "0ms",
              }}
            >
              {link.label}
              {/* <span className="text-sm text-[#b8935a]">
                0{index + 1}
              </span> */}
            </a>
          ))}

          {/* Contact Button */}
          <a
            href={CONTACT_LINK.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(CONTACT_LINK.href);
            }}
            className="mt-10 rounded bg-[#0f2547] px-6 py-4 text-center text-base font-semibold text-white transition-colors duration-300 hover:bg-[#1d3d6e]"
          >
            {CONTACT_LINK.label}
          </a>

          {/* Footer */}
          <div className="mt-auto pt-12">
            <p className="text-sm text-slate-400">
              {SITE.fullName}
            </p>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#b8935a]" />
          </div>
        </nav>
      </div>
    </header>
  );
}
