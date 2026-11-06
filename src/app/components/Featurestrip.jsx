import { Briefcase, ShieldCheck, TrendingUp, Star } from "lucide-react";

const FEATURES = [
  {
    icon: Briefcase,
    title: "Professional Management",
    text: "Systems built around professional hotel standards.",
  },
  {
    icon: ShieldCheck,
    title: "Operational Excellence",
    text: "SOPs, quality controls and performance monitoring.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    text: "Data-driven pricing, distribution and forecasting.",
  },
  {
    icon: Star,
    title: "Guest Satisfaction",
    text: "Higher service standards and stronger reputation.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-[#0f2547]" aria-label="Key strengths">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 sm:gap-8 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-10">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3 text-white">
            <Icon className="mt-1 shrink-0 text-[#b8935a]" size={26} aria-hidden="true" />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-0.5 text-sm text-white/70">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}