import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Images
import image1 from "./images/cody-lannom-G95AReIh_Ko-unsplash.jpg"; // main header image
import image2 from "./images/hamberger-menu.png";                 // hamburger icon
import image3 from "./images/logo.png";                           // logo

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const headerRef = useRef(null);

  // Init AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Inject Google Font (Poppins) so typography matches your original CSS
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Show/Hide "to top" button based on header visibility
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowToTop(!entry.isIntersecting),
      { root: null, threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Smooth scroll to top (matching your easing + duration)
  const handleToTop = (e) => {
    e.preventDefault();

    const startY = window.scrollY || document.documentElement.scrollTop;
    const duration = 1200; // ms
    const startTime = performance.now();

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);
      window.scrollTo(0, Math.round(startY * (1 - eased)));
      if (elapsed < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="font-[Poppins] text-[var(--text-dark)]">
      {/* ===== Header / First Section ===== */}
      <header id="top" ref={headerRef} className="relative isolate">
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
      "rounded-[32px] bg-black/50 backdrop-blur py-3",
      "text-white font-semibold",
      "items-center gap-5",
      "transition-all duration-300","mt-[-30px]","w-[50%] flex justify-between px-20",

      // layering + position relative to header image
      "z-30",

      // Desktop: always flex and centered
      "hidden lg:flex",
      "absolute left-1/2 -translate-x-1/2 top-10",

      // Mobile: we’ll toggle visibility below via inline style
      "sm:top-[70px]","max-md:w-[50%] max-lg:text-[13px] max-lg:px-5  max-md:text-[10px] max-sm:text-[9px] max-sm:px-3 max-sm:mt-[8px] max-sm:ml-[25px]",
   
    ].join(" ")}
    style={
      // On mobile (<lg) show/hide with state; on desktop we force display via classes above.
      // We ONLY apply inline style when <lg to avoid fighting with lg:flex.
      window.innerWidth < 1024
        ? (menuOpen ? { display: "flex" } : { display: "none" })
        : undefined
    }
  >
    <li>
      <a href="#home" onClick={() => setMenuOpen(false)} data-aos="fade-down" data-aos-duration="1500">
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
    className="mt-8 lg:hidden absolute right-4 top-3 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/60 border border-white/80 transition active:scale-95"
  >
    <img
      src={image2}
      alt="Menu"
      className="h-6 w-6 object-contain "
    />
  </button>
</nav>

        <div className="header__container mb-30 grid md:[grid-template-columns:minmax(1rem,1fr)_minmax(0,calc(1200px*0.4))_minmax(0,calc(1200px*0.6))_minmax(1rem,1fr)] md:items-center">
          {/* Background image block */}
          <div
            className="header__image relative -z-[100] min-h-[500px] md:min-h-[650px] md:[grid-area:1/3/2/5] bg-cover bg-center bg-no-repeat rounded-bl-[8rem] ml-[13%] md:ml-0"
            data-aos="fade-left"
            data-aos-duration="2000"
            style={{ backgroundImage: `url(${image1})` }}
          />

          <div className="header__content text-center px-4 py-16 md:pt-40 md:col-start-2 md:col-end-3 md:text-left">
            <h1
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-[4rem] leading-[3rem] font-bold md:text-[5rem] md:leading-[4rem] text-[var(--text-dark)]"
            >
              DISCOVER
            </h1>
            <h2
              data-aos="fade-left"
              data-aos-duration="2000"
              className="mb-8 text-[4rem] leading-[3rem] font-extralight md:text-[5rem] md:leading-[4rem] text-[var(--text-dark)]"
            >
              WORLDWIDE
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mb-8 text-[var(--text-dark)]"
            >
              We are passionate about uncovering the wonders of our diverse world and sharing them with you. Our mission is to inspire a sense of discovery, and stories that make our planet unique.
            </p>
            <div data-aos="zoom-in" data-aos-duration="2000">
              <a href="#banner">
                <button
                  className="cursor-pointer rounded-[5px] bg-black px-6 py-3 text-white transition hover:bg-[rgba(25,24,23,0.8)]"
                >
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Banner ===== */}
      <div className="banner mt-20 grid md:[grid-template-columns:repeat(6,minmax(0,1fr))] bg-black md:mt-0">
        {/* Card 1 (full bleed dark with content overlay style) */}
        <div className="relative isolate py-20 px-8 md:col-span-2 bg-[#090909b9]" data-aos="fade-up" data-aos-duration="1500" />

        <div className="px-8 py-8 bg-[#231f1f] text-[aliceblue] z-10" data-aos="fade-up" data-aos-duration="1700">
          <h4 className="text-[1.2rem] font-medium text-[aliceblue]">Asian</h4>
          <p className="mb-2 text-[0.9rem] text-[rgba(240,248,255,0.69)]">
            Asia boasts incredibly diverse landscapes, from the Himalayan mountain and lush tropical rainforests to pristine beaches.
          </p>
          <a href="#" className="text-white font-semibold text-[1rem]">Read More</a>
        </div>

        <div className="px-8 py-8 bg-[#2a2c32] text-[aliceblue] z-10" data-aos="fade-up" data-aos-duration="1900">
          <h4 className="text-[1.2rem] font-medium text-[aliceblue]">Europe</h4>
          <p className="mb-2 text-[0.9rem] text-[rgba(240,248,255,0.69)]">
            A visit to Europe isn't complete without experiencing the charm and significance of this tiny sovereign state within a city!
          </p>
          <a href="#" className="text-white font-semibold text-[1rem]">Read More</a>
        </div>

        <div className="px-8 py-8 bg-[#3f414b]" data-aos="fade-up" data-aos-duration="2100">
          <h4 className="text-[1.2rem] font-medium text-[aliceblue]">Book Now</h4>
          <p className="mb-2 text-[0.9rem] text-[rgba(240,248,255,0.69)]">
            Ensure a clean and intuitive design that allows users to easily navigate through the booking process.
          </p>
          <a href="#" className="text-white font-semibold text-[1rem]">Read More</a>
        </div>
      </div>

      {/* ===== Packages (Glass) ===== */}
{/* ===== Packages (Glass • Smooth) ===== */}
<section
  id="packages"
  aria-labelledby="packages-bw-heading"
  className="relative"
  style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5" }} // solid bg
>
  <div className="mx-auto max-w-[1200px] px-[clamp(2rem,4vw,4rem)] py-[clamp(2rem,4vw,4rem)]">
    {/* Header (unchanged text) */}
    <div className="mb-[clamp(1.5rem,3vw,2.5rem)] grid gap-3" data-aos="fade-up">
      <span className="tracking-[0.22em] uppercase text-[#cfcfcf] font-semibold text-[0.8rem]">
        Website Packages
      </span>
      <h2 id="packages-bw-heading" className="m-0 text-[clamp(1.75rem,2.8vw,3rem)] leading-[1.15]">
        Pick a plan that fits today — scale tomorrow.
      </h2>
      <p className="m-0 max-w-[65ch] text-[#d8d8d8]">
        Monochrome, minimal, and fast. Dummy plans ready to swap for your real pricing.
        Pure HTML &amp; CSS with smooth hover effects and tasteful motion.
      </p>
    </div>

    {/* Grid */}
    <div
      className="grid grid-cols-12 gap-[clamp(1rem,2vw,1.5rem)]"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      {/* Card base class string (for readability, applied inline below) */}
      {/** 
       * Smoothness notes:
       * - backdrop-blur-lg (lighter than 2xl) → better perf
       * - duration-200/300 + ease-out → snappier, smoother feel
       * - [will-change:transform] + translateZ(0) via transform-gpu → GPU hint
       * - transition property narrowed to transform, box-shadow, opacity
       */}

      {/* Starter */}
      <article
        aria-label="Starter plan"
        data-aos="zoom-in"
        className={[
          "packages-bw__reveal col-span-12 sm:col-span-6 lg:col-span-4",
          "relative isolate overflow-hidden rounded-2xl border border-white/15",
          "bg-white/5 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
          "transform-gpu [will-change:transform]",
          "transition-[transform,box-shadow,opacity] duration-200 ease-out",
          "hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
          "motion-reduce:transition-none motion-reduce:hover:translate-y-0",

          // border glow (static, no animation)
          "before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px]",
          "before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]",
          "before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]",
          "before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]",
          "before:bg-[conic-gradient(from_180deg,#ffffff_0%,#bfbfbf_12%,#000000_35%,#333333_55%,#ffffff_75%,#999999_100%)] before:opacity-15",

          // gentle sheen (shorter anim)
          "after:pointer-events-none after:absolute after:-left-1/2 after:-top-full after:h-[200%] after:w-[120%]",
          "after:rotate-[8deg] after:bg-[linear-gradient(105deg,transparent_0_35%,rgba(255,255,255,0.08)_45%,rgba(255,255,255,0.16)_50%,rgba(255,255,255,0.08)_55%,transparent_65%_100%)]",
          "after:translate-x-[-40%] after:transition-transform after:duration-300 hover:after:translate-x-[55%]",
        ].join(" ")}
      >
        <div className="relative z-[2] p-[1.4rem]">
          <span className="inline-block rounded-full border border-white/20 bg-white/5 px-[0.6rem] py-[0.35rem] text-[0.72rem] font-bold tracking-[0.12em] text-[#cfcfcf] uppercase">
            Starter
          </span>
          <h3 className="m-0 mt-[0.9rem] mb-[0.35rem] text-[1.45rem] leading-[1.2]">
            Launch-ready essentials
          </h3>
          <p className="m-0 mb-[0.9rem] text-[0.95rem] text-[#cfcfcf]">
            Perfect for personal sites &amp; MVPs
          </p>
          <p className="m-0 mb-[0.6rem] mt-[0.2rem] text-[2rem] font-extrabold">
            $199 <small className="text-[0.9rem] font-semibold text-[#cfcfcf]">/ one-time</small>
          </p>
          <ul className="m-0 list-none p-0">
            {[
              "Single-page layout (up to 4 sections)",
              "Responsive design + SEO basics",
              "1 round of revisions",
            ].map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 border-b border-dashed border-white/15 py-[0.55rem] last:border-b-0"
              >
                <span className="relative h-[0.95rem] w-[0.95rem] flex-none rounded-[3px] border border-white/25 bg-[linear-gradient(180deg,#111,#0d0d0d)] after:content-[''] after:absolute after:left-[0.12rem] after:top-[0.18rem] after:h-[0.25rem] after:w-[0.55rem] after:rotate-45 after:translate-x-[1px] after:-translate-y-[1px] after:border-2 after:border-white after:border-l-0 after:border-t-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Pro (Featured) */}
      <article
        aria-label="Pro plan"
        data-aos="zoom-in"
        className={[
          "packages-bw__reveal col-span-12 sm:col-span-6 lg:col-span-4",
          "relative isolate overflow-hidden rounded-2xl border border-white/20",
          "bg-white/7 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
          "transform-gpu [will-change:transform]",
          "transition-[transform,box-shadow,opacity] duration-200 ease-out",
          "hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
          "motion-reduce:transition-none motion-reduce:hover:translate-y-0",

          "before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px]",
          "before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]",
          "before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]",
          "before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]",
          "before:bg-[conic-gradient(from_180deg,#ffffff_0%,#bfbfbf_12%,#000000_35%,#333333_55%,#ffffff_75%,#999999_100%)] before:opacity-25",

          "after:pointer-events-none after:absolute after:-left-1/2 after:-top-full after:h-[200%] after:w-[120%]",
          "after:rotate-[8deg] after:bg-[linear-gradient(105deg,transparent_0_35%,rgba(255,255,255,0.10)_45%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.10)_55%,transparent_65%_100%)]",
          "after:translate-x-[-40%] after:transition-transform after:duration-300 hover:after:translate-x-[55%]",
        ].join(" ")}
      >
        <div className="relative z-[2] p-[1.4rem]">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-[0.6rem] py-[0.35rem] text-[0.72rem] font-bold tracking-[0.12em] text-[#e9e9e9] uppercase">
            Most Popular
          </span>
          <h3 className="m-0 mt-[0.9rem] mb-[0.35rem] text-[1.45rem] leading-[1.2]">
            Pro growth <br /> bundle
          </h3>
          <p className="m-0 mb-[0.9rem] text-[0.95rem] text-[#cfcfcf]">
            Best for small businesses
          </p>
          <p className="m-0 mb-[0.6rem] mt-[0.2rem] text-[2rem] font-extrabold">
            $499 <small className="text-[0.9rem] font-semibold text-[#cfcfcf]">/ one-time</small>
          </p>
          <ul className="m-0 list-none p-0">
            {[
              "Multi-page site (up to 6 pages)",
              "Blog-ready + contact forms",
              "3 rounds of revisions",
            ].map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 border-b border-dashed border-white/15 py-[0.55rem] last:border-b-0"
              >
                <span className="relative h-[0.95rem] w-[0.95rem] flex-none rounded-[3px] border border-white/25 bg-[linear-gradient(180deg,#111,#0d0d0d)] after:content-[''] after:absolute after:left-[0.12rem] after:top-[0.18rem] after:h-[0.25rem] after:w-[0.55rem] after:rotate-45 after:translate-x-[1px] after:-translate-y-[1px] after:border-2 after:border-white after:border-l-0 after:border-t-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Elite */}
      <article
        aria-label="Elite plan"
        data-aos="zoom-in"
        className={[
          "packages-bw__reveal col-span-12 sm:col-span-6 lg:col-span-4",
          "relative isolate overflow-hidden rounded-2xl border border-white/15",
          "bg-white/5 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
          "transform-gpu [will-change:transform]",
          "transition-[transform,box-shadow,opacity] duration-200 ease-out",
          "hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
          "motion-reduce:transition-none motion-reduce:hover:translate-y-0",

          "before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px]",
          "before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]",
          "before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]",
          "before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]",
          "before:bg-[conic-gradient(from_180deg,#ffffff_0%,#bfbfbf_12%,#000000_35%,#333333_55%,#ffffff_75%,#999999_100%)] before:opacity-15",

          "after:pointer-events-none after:absolute after:-left-1/2 after:-top-full after:h-[200%] after:w-[120%]",
          "after:rotate-[8deg] after:bg-[linear-gradient(105deg,transparent_0_35%,rgba(255,255,255,0.08)_45%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0.08)_55%,transparent_65%_100%)]",
          "after:translate-x-[-40%] after:transition-transform after:duration-300 hover:after:translate-x-[55%]",
        ].join(" ")}
      >
        <div className="relative z-[2] p-[1.4rem]">
          <span className="inline-block rounded-full border border-white/20 bg-white/5 px-[0.6rem] py-[0.35rem] text-[0.72rem] font-bold tracking-[0.12em] text-[#cfcfcf] uppercase">
            Elite
          </span>
          <h3 className="m-0 mt-[0.9rem] mb-[0.35rem] text-[1.45rem] leading-[1.2]">
            Custom &amp; <br /> scalable
          </h3>
          <p className="m-0 mb-[0.9rem] text-[0.95rem] text-[#cfcfcf]">
            For serious products &amp; brands
          </p>
          <p className="m-0 mb-[0.6rem] mt-[0.2rem] text-[2rem] font-extrabold">
            $999 <small className="text-[0.9rem] font-semibold text-[#cfcfcf]">/ one-time</small>
          </p>
          <ul className="m-0 list-none p-0">
            {[
              "Custom layouts + CMS setup",
              "Performance tuned & analytics",
              "Priority support & handoff",
            ].map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 border-b border-dashed border-white/15 py-[0.55rem] last:border-b-0"
              >
                <span className="relative h-[0.95rem] w-[0.95rem] flex-none rounded-[3px] border border-white/25 bg-[linear-gradient(180deg,#111,#0d0d0d)] after:content-[''] after:absolute after:left-[0.12rem] after:top-[0.18rem] after:h-[0.25rem] after:w-[0.55rem] after:rotate-45 after:translate-x-[1px] after:-translate-y-[1px] after:border-2 after:border-white after:border-l-0 after:border-t-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>

    {/* Divider + note (unchanged) */}
    <div
      className="my-8 h-px bg-[linear-gradient(90deg,transparent,#2a2a2a,transparent)]"
      role="presentation"
    />
    <p className="mt-1 text-[0.9rem] text-[#cfcfcf]">
      All plans are examples with dummy data. Replace text, prices, and features with your real content anytime.
    </p>
  </div>
</section>


      {/* ===== Footer ===== */}
      <footer className="lx-footer relative bg-[#111] px-4 py-8 text-center text-[#f4f4f4]">
        <div className="lx-footer__subscribe" data-aos="fade-up">
          <h3 className="mb-4 font-medium">Stay up to date on the latest from Lx Gallery</h3>
          <form className="lx-footer__form flex flex-wrap justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="min-w-[250px] rounded-[8px] border-0 bg-[#fff7db] px-4 py-[0.8rem] outline-none"
            />
            <button type="submit" className="rounded-[8px] border-0 bg-red-600 px-5 py-[0.8rem] font-semibold text-white">
              Subscribe
            </button>
          </form>
        </div>

        <div className="lx-footer__social mt-8" data-aos="fade-up">
          <h4 className="mb-4 font-semibold">Follow LX GALLERY</h4>
          <div className="lx-footer__icons flex justify-center gap-2">
            {[
              'ri-linkedin-fill',
              'ri-instagram-line',
              'ri-pinterest-fill',
              'ri-quora-line',
              'ri-github-fill',
            ].map((icon) => (
              <a
                key={icon}
                href="#"
                className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-black text-[1.2rem] transition-transform duration-300 hover:scale-110"
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="lx-footer__meta mt-8 text-[#b3b3b3]" data-aos="fade-up">
          <p>
            Total Website Visit
            <br />
            00
          </p>
          <p className="text-[0.9rem]">
            Copyright © 2023 All rights reserved | Made with <span className="text-red-600">❤</span> by{' '}
            <a href="#" className="text-[#00aaff]">
              Lx
            </a>
          </p>
        </div>

        {/* Floating to-top button */}
        <a
          href="#top"
          className="lx-footer__to-top fixed bottom-5 right-5 z-10 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-black shadow-[0_0_10px_rgba(0,0,0,0.4)] transition-opacity transition-transform duration-300"
          onClick={handleToTop}
          style={{
            opacity: showToTop ? 1 : 0,
            pointerEvents: showToTop ? 'auto' : 'none',
            transform: showToTop ? 'scale(1)' : 'scale(0.95)',
          }}
          aria-label="Back to top"
          title="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </a>
      </footer>
    </div>
  );
}
