import Image from "next/image";
import { MapPin } from "lucide-react";

/* Put these four photos in public/images/ */
const MARKETS = [
  { name: "Kathmandu", image: "/images/kathmandu.jpg" },
  { name: "Pokhara", image: "/images/pokhara.jpg" },
  { name: "Chitwan / Sauraha", image: "/images/chitwan.jpg" },
  { name: "Nagarkot / Dhulikhel", image: "/images/nagarkot.jpg" },
];

const PROPERTY_TYPES = [
  "City Hotels",
  "Boutique Hotels",
  "Resorts",
  "Restaurants",
  "Group & MICE Operations",
  "Independent Hospitality Properties",
];

export default function Markets() {
  return (
    <section id="markets" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading: title on the left, supporting text on the right (stacked on small screens) */}
        <div className="grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-medium text-[#b8935a]">Hospitality portfolio and market experience</p>
            <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#0f2547] md:text-4xl">
              Where we work in Nepal
            </h2>
          </div>
          <p className="max-w-xl leading-relaxed text-slate-600">
            Our expertise covers key tourism and business destinations, plus other emerging hospitality
            destinations.
          </p>
        </div>

        {/* Destinations: 2 columns on phones and tablets, 4 on laptops and up */}
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-12 lg:grid-cols-4">
          {MARKETS.map(({ name, image }) => (
            <li
              key={name}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-[#0f2547] to-[#1d3d6e]"
            >
              <Image
                src={image}
                alt={`${name}, Nepal`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
              {/* Dark fade so the name stays readable on any photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 text-white sm:inset-x-4 sm:bottom-4">
                <MapPin size={16} className="shrink-0 text-[#b8935a]" aria-hidden="true" />
                <span className="font-serif text-base font-semibold leading-tight sm:text-lg">{name}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Property types */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <p className="text-sm font-semibold text-[#0f2547] sm:mr-2">Property types:</p>
          <ul className="flex flex-wrap gap-2">
            {PROPERTY_TYPES.map((type) => (
              <li key={type} className="rounded-full bg-slate-100 px-3.5 py-1.5 text-sm text-slate-700">
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}