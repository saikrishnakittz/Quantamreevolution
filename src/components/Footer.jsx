import Logo from "../assets/logo.svg";
import { Facebook, X, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const footerLinks1 = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const footerLinks2 = [
    { name: "Program list", href: "#" },
    { name: "Groups", href: "#" },
    { name: "Members", href: "#" },
    { name: "Events", href: "#" },
  ];

  return (
    <footer className="relative w-full overflow-hidden md:h-[250px] rounded-[16.07px] shadow-[0_8px_32px_rgba(0,0,0,0.25)] border-t border-white/5">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/footerImage.png')" }}
      />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-[16.07px] z-10" />

      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-[-120px] h-[300px] opacity-40 blur-[120px] mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at center, #00C2CB 0%, transparent 70%), radial-gradient(circle at 30% 80%, #ff4d4d 0%, transparent 40%)",
          }}
        />
      </div>

      <div className="relative w-full z-30 h-full px-6 sm:px-12 md:px-[180px] py-8 md:py-6">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-start text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <img
                src={Logo}
                alt="Quantum Revolution"
                className="h-10 md:h-14 w-auto brightness-110"
              />
            </div>

            <div className="flex flex-col space-y-3">
              <h4 className="text-white font-bold text-sm md:text-base mb-1">
                Navigation
              </h4>
              {footerLinks1.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 text-xs md:text-sm font-medium hover:text-[#00C2CB] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col space-y-3">
              <h4 className="text-white font-bold text-sm md:text-base mb-1">
                Programs
              </h4>
              {footerLinks2.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 text-xs md:text-sm font-medium hover:text-[#00C2CB] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-white font-bold text-sm md:text-base mb-4">
                Follow Us
              </h4>
              <div className="flex gap-5">
                <a
                  className="text-white hover:text-[#00C2CB] transition-colors"
                  href="#"
                >
                  <Facebook size={18} />
                </a>
                <a
                  className="text-white hover:text-[#00C2CB] transition-colors"
                  href="#"
                >
                  <X size={18} />
                </a>
                <a
                  className="text-white hover:text-[#00C2CB] transition-colors"
                  href="#"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  className="text-white hover:text-[#00C2CB] transition-colors"
                  href="#"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:mt-0 py-4 relative">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00C2CB]/30 to-transparent" />
            <p className="absolute left-[45%] -translate-x-1/2 text-white font-roboto font-normal text-[14px] md:text-[14px] leading-relaxed text-center">
              © 2025 Quantum (R) Evolution. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
