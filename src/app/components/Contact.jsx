"use client";

import { useState } from "react";
import { Phone, MapPin, Globe } from "lucide-react";

const ROLES = [
  "Hotel owner",
  "Investor",
  "Developer",
  "Operator with an underperforming hotel",
  "Other",
];

const fieldClass =
  "mt-1.5 w-full rounded border border-slate-300 bg-white px-3 py-2.5 text-base font-normal text-slate-800 placeholder:text-slate-400 focus:border-[#b8935a] focus:outline-none focus:ring-2 focus:ring-[#b8935a]/30";
const labelClass = "block text-sm font-medium text-[#0f2547]";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: send `data` to your backend, e.g. a Next.js route handler at app/api/contact/route.js
    console.log("Contact form:", data);
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left: details */}
        <div>
          <p className="text-sm font-medium text-[#b8935a]">Contact</p>
          <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-[#0f2547] md:text-4xl">
            Start a conversation
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-slate-600">
            Talk directly with our Managing Director about your hotel, resort or development project.
          </p>

          <div className="mt-8 space-y-6">
            <p className="font-serif text-xl font-bold text-[#0f2547]">
              Dipak Pokhrel
              <span className="block font-sans text-sm font-normal text-slate-500">Managing Director</span>
            </p>

            <div className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0f2547]">
                <Phone size={18} className="text-[#b8935a]" aria-hidden="true" />
              </span>
              <p className="flex flex-col pt-0.5 text-slate-700">
                <a href="tel:+9779862111047" className="hover:text-[#b8935a] hover:underline">+977 9862111047</a>
                <a href="tel:+9779764596097" className="hover:text-[#b8935a] hover:underline">+977 9764596097</a>
              </p>
            </div>

            <div className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0f2547]">
                <MapPin size={18} className="text-[#b8935a]" aria-hidden="true" />
              </span>
              <p className="pt-2 text-slate-700">Head Office: Kathmandu, Nepal</p>
            </div>

            <div className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0f2547]">
                <Globe size={18} className="text-[#b8935a]" aria-hidden="true" />
              </span>
              <p className="pt-2 text-slate-700">Market focus: Nepal &amp; South Asia</p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl bg-slate-50 p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Full name
              <input name="name" required autoComplete="name" className={fieldClass} />
            </label>
            <label className={labelClass}>
              Email
              <input name="email" type="email" required autoComplete="email" className={fieldClass} />
            </label>
          </div>

          <label className={labelClass}>
            Phone
            <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
          </label>

          <label className={labelClass}>
            I am a
            <select name="role" className={fieldClass} defaultValue={ROLES[0]}>
              {ROLES.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </label>

          <label className={labelClass}>
            Tell us about your project
            <textarea name="message" rows={4} className={fieldClass} />
          </label>

          <button
            type="submit"
            className="w-full rounded bg-[#0f2547] py-3.5 font-semibold text-white transition-colors hover:bg-[#1d3d6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8935a]"
          >
            Send message
          </button>

          {sent && (
            <p role="status" className="text-sm font-medium text-green-800">
              Message sent. We will reply soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}