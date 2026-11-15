import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactStrip() {
  return (
    <section id="contact" className="bg-[#0f2547] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Message */}
        <div>
          <p className="text-sm font-medium text-[#b8935a] lg:text-lg">Contact</p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
            Creating Value. Building Better Businesses.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-white/70 lg:text-lg">
            Tell us about your property and what you want it to achieve. Talk directly with our Managing
            Director about your hotel, resort or development project.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded bg-[#b8935a] px-6 py-2.5 text-sm lg:text-lg font-semibold text-[#0f2547] transition-colors hover:bg-[#c9a56d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get in Touch <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Quick details */}
        <div className="space-y-5 rounded-xl border border-white/15 bg-white/5 p-6 sm:p-8">
          <p className="font-serif text-xl font-bold text-white">
            Dipak Pokhrel
            <span className="block font-sans text-sm font-normal text-white/60">Managing Director</span>
          </p>
          <div className="flex gap-3 text-white/80">
            <Phone size={18} className="mt-0.5 shrink-0 text-[#b8935a]" aria-hidden="true" />
            <p className="flex flex-col gap-1">
              <a href="tel:+9779862111047" className="hover:text-[#b8935a]">+977 9862111047</a>
              <a href="tel:+9779764596097" className="hover:text-[#b8935a]">+977 9764596097</a>
            </p>
          </div>
          <div className="flex gap-3 text-white/80">
            <MapPin size={18} className="mt-0.5 shrink-0 text-[#b8935a]" aria-hidden="true" />
            <p>Head Office: Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
    </section>
  );
}