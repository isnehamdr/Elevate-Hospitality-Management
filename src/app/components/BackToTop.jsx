
// "use client";

// import { useEffect, useState } from "react";
// import { ArrowUp } from "lucide-react";

// const WHATSAPP_NUMBER = "9779862111047"; // Replace with your WhatsApp number
// const WHATSAPP_MESSAGE = "Hello! I would like to know more about your services.";

// export default function BackToTop() {
//   const [showBackToTop, setShowBackToTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowBackToTop(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//     WHATSAPP_MESSAGE
//   )}`;

//   return (
//     <div className="fixed bottom-8 right-4 sm:bottom-7 sm:right-7 z-50 flex flex-col items-center gap-3">

//       {/* WhatsApp Button */}
//       <a
//         href={whatsappUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat with us on WhatsApp"
//         className="group flex h-12 w-12  items-center justify-center "
//       >
//         <img
//           src="/images/whatsapp.png"
//           alt="WhatsApp"
//           className="h-14 w-14 object-contain"
//         />
//       </a>

//       {/* Back To Top Button */}
//       <button
//         type="button"
//         onClick={scrollToTop}
//         aria-label="Back to top"
//         className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#0e2555] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#b08d57] ${
//           showBackToTop
//             ? "visible translate-y-0 opacity-100"
//             : "invisible translate-y-4 opacity-0 pointer-events-none"
//         }`}
//       >
//         <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
//       </button>

//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const WHATSAPP_NUMBER = "9779862111047";
const WHATSAPP_MESSAGE =
  "Hello! I would like to know more about your services.";

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <div className="fixed bottom-5 right-3 z-[9999] flex flex-col items-center gap-3 sm:bottom-7 sm:right-6 sm:gap-4">

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14"
      >
        <img
          src="/images/whatsapp.png"
          alt="WhatsApp"
          className="h-full w-full object-contain"
        />
      </a>

      {/* Back To Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#0e2555] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#b08d57] sm:h-12 sm:w-12 ${
          showBackToTop
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

    </div>
  );
}
