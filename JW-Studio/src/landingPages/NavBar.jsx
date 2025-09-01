// NavBar.jsx
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import image2 from "./images/hamberger-menu.png"; // hamburger icon
import image3 from "./images/logo.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    // Add scroll detection for navbar style change
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 w-full px-4 py-3 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-[1200px] flex items-center justify-between">
        {/* Logo - shown on all screens */}
        <div className="z-50">
          <a href="/">
            <img 
              src={image3} 
              alt="Logo" 
              className="logo-color w-24 md:w-32 lg:w-40 transition-all duration-300" 
            />
          </a>
        </div>

        {/* Desktop Navigation (Pill) */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
          <ul
            className={[
              "rounded-[32px] bg-gray-900/80 backdrop-blur py-3",
              "text-white font-semibold",
              "items-center gap-8 xl:gap-12",
              "transition-all duration-300",
              "flex justify-center px-8 xl:px-12",
              "shadow-lg",
            ].join(" ")}
          >
            <li>
              <a 
                href="homePage" 
                className="hover:text-amber-400 transition-colors duration-200 py-2 px-1"
                data-aos="fade-down" 
                data-aos-duration="1500"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/aboutPage" 
                className="hover:text-amber-400 transition-colors duration-200 py-2 px-1"
                data-aos="fade-down" 
                data-aos-duration="1800"
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#booking" 
                className="hover:text-amber-400 transition-colors duration-200 py-2 px-1"
                data-aos="fade-down" 
                data-aos-duration="2100"
              >
                Booking
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="hover:text-amber-400 transition-colors duration-200 py-2 px-1"
                data-aos="fade-down" 
                data-aos-duration="2400"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden z-50 h-12 w-12 flex items-center justify-center rounded-full bg-white/80 border border-white/80 transition-all active:scale-95"
        >
          <img src={image2} alt="Menu" className="h-6 w-6 object-contain" />
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`
          lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40 transition-all duration-500 ease-in-out
          ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
        `}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a 
              href="homePage" 
              className="text-white text-2xl font-semibold hover:text-amber-400 transition-colors py-3"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/aboutPage" 
              className="text-white text-2xl font-semibold hover:text-amber-400 transition-colors py-3"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#booking" 
              className="text-white text-2xl font-semibold hover:text-amber-400 transition-colors py-3"
              onClick={() => setMenuOpen(false)}
            >
              Booking
            </a>
            <a 
              href="#contact" 
              className="text-white text-2xl font-semibold hover:text-amber-400 transition-colors py-3"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}