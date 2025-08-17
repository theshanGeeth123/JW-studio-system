// NavBar.jsx
import { useState } from "react";

// Images (keep your existing paths)

import image1 from "./images/cody-lannom-G95AReIh_Ko-unsplash.jpg"; 
import image2 from "./images/hamberger-menu.png"; // hamburger icon
import image3 from "./images/logo.png"; 
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  

  return (
    <nav
      className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-[1200px] px-4 py-4 flex items-center justify-between"
    >
      {/* Desktop logo */}
      <div className="nav__logo hidden lg:block">
        <a href="/">
          <img src={image3} alt="Logo" className="logo-color max-w-[120px]" />
        </a>
      </div>

      {/* Mobile logo */}
      <div className="nav__logo2 block lg:hidden">
        <a href="/">
          <img src={image3} alt="Logo" className="logo-color max-w-[120px]" />
        </a>
      </div>

      {/* Nav links (pill) */}
      <ul
        id="nav-links"
        className={[
          // base pill styling
          "rounded-[32px] bg-black/50 backdrop-blur py-3 ",
          "text-white font-semibold",
          "items-center gap-5",
          "transition-all duration-300","mt-[-30px]","w-[50%] flex justify-between px-20",

          // layering + position relative to header image
          "z-30",

          // Desktop: always flex and centered
          
          "absolute left-1/2 -translate-x-1/2 top-10",

          // Mobile: we’ll toggle visibility below via inline style
          "sm:top-[70px]","max-md:w-[50%] max-lg:text-[13px] max-lg:px-5  max-md:text-[10px] max-sm:text-[9px] max-sm:px-3 max-sm:mt-[8px] max-sm:ml-[25px]",
        ].join(" ")}
        style={
          // On mobile (<lg) show/hide with state; on desktop we force display via classes above.
          // We ONLY apply inline style when <lg to avoid fighting with lg:flex.
          typeof window !== "undefined" && window.innerWidth < 1024
            ? (menuOpen ? { display: "flex" } : { display: "none" })
            : undefined
        }
      >
        <li>
          <a href="homePage" onClick={() => setMenuOpen(false)} data-aos="fade-down" data-aos-duration="1500">
            Home
          </a>
        </li>
        <li>
          <a href="/aboutPage" onClick={() => setMenuOpen(false)} data-aos="fade-down" data-aos-duration="1800">
            About Us
          </a>
        </li>
        <li>
          <a href="#booking" onClick={() => setMenuOpen(false)} data-aos="fade-down" data-aos-duration="2100">
            Booking
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)} data-aos="fade-down" data-aos-duration="2400">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Hamburger (mobile only) */}
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        aria-controls="nav-links"
        onClick={() => setMenuOpen((v) => !v)}
        className="hidden mt-8 lg:hidden absolute right-4 top-3 z-40 h-10 w-10 items-center justify-center rounded-full bg-white/60 border border-white/80 transition active:scale-95"
      >
        <img
          src={image2}
          alt="Menu"
          className="h-6 w-6 object-contain "
        />
      </button>
    </nav>
  );
}
