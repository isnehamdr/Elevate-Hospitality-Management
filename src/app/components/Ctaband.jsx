import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="bg-slate-50 py-10 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl font-bold leading-tight text-[#0f2547] md:text-3xl">
            Creating Value. Building Better Businesses.
          </h2>
          <p className="mt-1.5 text-sm text-slate-600 sm:text-base">
            Tell us about your property and what you want it to achieve.
          </p>
        </div>

        <Link
          href="/#contact"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded bg-[#0f2547] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d3d6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8935a]"
        >
          Get in Touch <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}