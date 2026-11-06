import {
  Globe, MonitorSmartphone, Building2, Briefcase, Plane,
  Handshake, Users, CalendarDays, MapPin, Share2,
} from "lucide-react";

const CHANNELS = [
  { icon: Globe, label: "Website & Direct Booking" },
  { icon: MonitorSmartphone, label: "Online Travel Agencies (OTAs)" },
  { icon: Building2, label: "Regional Sales Offices (RSOs)" },
  { icon: Briefcase, label: "Corporate Accounts" },
  { icon: Plane, label: "Official Travel Agents" },
  { icon: Handshake, label: "Travel Trade Partners" },
  { icon: Users, label: "Employee & Institutional Partnerships" },
  { icon: CalendarDays, label: "MICE & Group Business" },
  { icon: MapPin, label: "Destination Marketing" },
  { icon: Share2, label: "Digital & Social Media Channels" },
];

export default function SalesChannels() {
  return (
    <section id="sales" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading: title on the left, supporting text on the right (stacked on small screens) */}
        <div className="grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-medium text-[#b8935a]">Sales support</p>
            <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#0f2547] md:text-4xl">
              Connecting better, through many channels
            </h2>
          </div>
          <p className="max-w-xl leading-relaxed text-slate-600">
            We build a balanced sales mix that raises occupancy, strengthens direct business, reduces
            dependence on any one channel and improves profitability.
          </p>
        </div>

        {/* Channels: 2 columns on phones and tablets, 5 on laptops and up (two even rows of five) */}
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-12 lg:grid-cols-5">
          {CHANNELS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-6 text-center transition-colors hover:border-[#b8935a] hover:bg-white motion-reduce:transition-none sm:px-4 sm:py-7"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#0f2547]">
                <Icon size={22} className="text-[#b8935a]" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium leading-snug text-[#0f2547]">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}