import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        {/* Text: starts at the top, same line as the image */}
        <div className="flex flex-col">
          <p className="text-sm font-medium uppercase tracking-wide text-[#b8935a] mt-20">
            Hotel management and hospitality solutions in Nepal
          </p>

          <h1 className="mt-3 font-serif text-4xl font-bold leading-[1.1] text-[#0f2547] sm:text-5xl xl:text-6xl">
            We Don&apos;t Simply Manage Hotels. We Build Strong{" "}
            <span className="text-[#b8935a]">Hospitality Businesses.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Elevate Hospitality Management develops, manages and improves hotels and resorts
            across Nepal, working with owners, investors and developers to create lasting value.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-auto lg:pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded bg-[#0f2547] px-6 py-3.5 text-md font-semibold text-white transition-colors hover:bg-[#1d3d6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8935a]"
            >
              Partner With Us <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded border border-slate-300 px-6 py-3.5 text-md font-semibold text-[#0f2547] transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8935a]"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Image: top edge matches the text, height matches the text column */}
       <div className="relative aspect-[4/3] w-full overflow-hidden rounded-tl-[3rem] bg-gradient-to-br from-[#0f2547] to-[#1d3d6e] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[440px]">
  <Image
    src="/images/hero.jpg"
    alt="Hotel building representing Elevate Hospitality Management"
    fill
    priority
    sizes="(min-width: 1024px) 50vw, 100vw"
    className="object-cover"
  />
  <div className="absolute inset-x-4 bottom-4 rounded-lg bg-[#0f2547]/95 p-4 text-white shadow-lg sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-xs">
    <p className="font-serif text-lg font-bold text-[#b8935a]">Nepal &amp; South Asia</p>
    <p className="mt-1 text-sm text-white/80">
      Hotels, resorts and boutique properties: pre-opening, operations and turnaround.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}