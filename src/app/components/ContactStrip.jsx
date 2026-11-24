// import Link from "next/link";
// import { Phone, MapPin, ArrowRight } from "lucide-react";

// export default function ContactStrip() {
//   return (
//     <section id="contact" className="bg-[#0f2547] py-14 sm:py-16 lg:py-20">
//       <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
//         {/* Message */}
//         <div>
//           <p className="text-sm font-medium text-[#b8935a] lg:text-lg">Contact</p>
//           <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
//             Creating Value. Building Better Businesses.
//           </h2>
//           <p className="mt-4 max-w-xl leading-relaxed text-white/70 lg:text-lg">
//             Tell us about your property and what you want it to achieve. Talk directly with our Managing
//             Director about your hotel, resort or development project.
//           </p>
//           <Link
//             href="/contact"
//             className="mt-7 inline-flex items-center justify-center gap-2 rounded bg-[#b8935a] px-6 py-2.5 text-sm lg:text-lg font-semibold text-[#0f2547] transition-colors hover:bg-[#c9a56d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//           >
//             Get in Touch <ArrowRight size={16} aria-hidden="true" />
//           </Link>
//         </div>

//         {/* Quick details */}
//         <div className="space-y-5 rounded-xl border border-white/15 bg-white/5 p-6 sm:p-8">
//           <p className="font-serif text-xl font-bold text-white">
//             Sharan Ghale
//             <span className="block font-sans text-sm font-normal text-white/60">Managing Director</span>
//           </p>
//           <div className="flex gap-3 text-white/80">
//             <Phone size={18} className="mt-0.5 shrink-0 text-[#b8935a]" aria-hidden="true" />
//             <p className="flex flex-col gap-1">
//               <a href="tel:+9779849331559" className="hover:text-[#b8935a]">+977 984-9331559</a>
            
//             </p>
//           </div>
//           <div className="flex gap-3 text-white/80">
//             <MapPin size={18} className="mt-0.5 shrink-0 text-[#b8935a]" aria-hidden="true" />
//             <p>Head Office: Kathmandu, Nepal</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import Link from "next/link";
import { Phone, MapPin, ArrowRight, Mail } from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/evatehospitalitymanagement/";
const EMAIL_ADDRESS = "evelatehospitality297@gmail.com";

function FacebookIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function ContactStrip() {
  return (
    <section id="contact" className="bg-[#0f2547] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* Message */}
        <div>
          <p className="text-sm font-medium text-[#b8935a] lg:text-lg">
            Contact
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
            Creating Value. Building Better Businesses.
          </h2>

          <p className="mt-4 max-w-xl leading-relaxed text-white/70 lg:text-lg">
            Tell us about your property and what you want it to achieve.
            Talk directly with our Managing Director about your hotel,
            resort or development project.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded bg-[#b8935a] px-6 py-2.5 text-sm font-semibold text-[#0f2547] transition-colors hover:bg-[#c9a56d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:text-lg"
          >
            Get in Touch <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Contact details */}
        <div className="space-y-5 rounded-xl border border-white/15 bg-white/5 p-5 sm:p-8">

          <p className="font-serif text-xl font-bold text-white">
            Sharan Ghale
            <span className="block font-sans text-sm font-normal text-white/60">
              Managing Director
            </span>
          </p>

          {/* Phone */}
          <div className="flex gap-3 text-white/80">
            <Phone
              size={18}
              className="mt-0.5 shrink-0 text-[#b8935a]"
              aria-hidden="true"
            />
            <p>
              <a href="tel:+9779849331559" className="transition-colors hover:text-[#b8935a]">
                +977 984-9331559
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="flex gap-3 text-white/80">
            <Mail
              size={18}
              className="mt-0.5 shrink-0 text-[#b8935a]"
              aria-hidden="true"
            />
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="break-all transition-colors hover:text-[#b8935a]"
            >
              {EMAIL_ADDRESS}
            </a>
          </div>

          {/* Address */}
          <div className="flex gap-3 text-white/80">
            <MapPin
              size={18}
              className="mt-0.5 shrink-0 text-[#b8935a]"
              aria-hidden="true"
            />
            <p>Head Office: Kathmandu, Nepal</p>
          </div>

          {/* Facebook */}
          <div className="flex gap-3 text-white/80">
            <FacebookIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#b8935a]" />
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#b8935a]"
            >
              Follow us on Facebook
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
