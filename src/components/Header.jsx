import { useState } from "react";
import Logo from "../assets/logo.svg";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const dropdownLinks = [
    { name: "More", href: "/more" },
    { name: "EN", href: "/en" },
  ];

  return (
    <nav className="bg-white/10 backdrop-blur-[16px] fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out bg-[#0A0A0A] border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">

          <div className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={Logo} alt="Logo" className="h-8 md:h-12 w-auto" />
          </div>

       
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${
                    link.active
                      ? "text-[#00C2CB]"
                      : "text-gray-400 hover:text-white"
                  } text-sm font-bold tracking-widest uppercase transition-colors`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6 border-l border-white/10 pl-10">
              {dropdownLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-bold tracking-widest uppercase transition-colors"
                >
                  {link.name}
                  <ChevronDown size={14} className="opacity-50" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 transition-transform duration-300 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 absolute w-full left-0 border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                link.active
                  ? "text-[#00C2CB] bg-white/5"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-white/10">
            <div className="px-3 py-3 text-gray-300 text-base font-medium flex items-center justify-between">
              More
              <ChevronDown size={16} className="opacity-50" />
            </div>
            <div className="px-3 py-3 text-[#00C2CB] text-base font-medium">
              EN
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
