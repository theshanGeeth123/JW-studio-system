// src/landingPages/HomePage.jsx
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Your page-specific CSS (adjust if needed)
import "./css/HomePage.css";

// Imported images
import image1 from "./images/cody-lannom-G95AReIh_Ko-unsplash.jpg"; // main header image
import image2 from "./images/hamberger-menu.png";                   // hamburger icon
import image3 from "./images/logo.png";                             // logo

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Show/Hide "to top" button based on header visibility
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowToTop(!entry.isIntersecting),
      { root: null, threshold: 0.6 } // header >=60% visible => hide button
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Replace your current handleToTop with this:
const handleToTop = (e) => {
  e.preventDefault();

  const startY = window.scrollY || document.documentElement.scrollTop;
  const duration = 1200; // ms — make this larger for slower scroll
  const startTime = performance.now();

  // smooth ease (fast start/end, slow middle)
  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const step = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);

    // scroll from current Y down to 0
    window.scrollTo(0, Math.round(startY * (1 - eased)));

    if (elapsed < duration) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};


  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      {/* ===== Header / First Section ===== */}
      <header className="header" id="top" ref={headerRef}>
        <nav>
          {/* Desktop logo */}
          <div className="nav__logo">
            <a href="/">
              <img src={image3} alt="Logo" className="logo-color" />
            </a>
          </div>

          {/* Mobile logo (kept to match your CSS expectations) */}
          <div className="nav__logo2">
            <a href="/">
              <img src={image3} alt="Logo" className="logo-color" />
            </a>
          </div>

          {/* Nav links
              - Desktop: CSS controls layout
              - Mobile: hidden by CSS; we set display:flex only when menuOpen */}
          <ul
            className="nav__links"
            id="nav-links"
            style={menuOpen ? { display: "flex" } : undefined}
          >
            <li><a href="#home"     onClick={closeMenu} data-aos="fade-down" data-aos-duration="1500">Home</a></li>
            <li><a href="/aboutPage"    onClick={closeMenu} data-aos="fade-down" data-aos-duration="1800">About Us</a></li>
            <li><a href="#booking"  onClick={closeMenu} data-aos="fade-down" data-aos-duration="2100">Booking</a></li>
            <li><a href="#contact"  onClick={closeMenu} data-aos="fade-down" data-aos-duration="2400">Contact Us</a></li>
          </ul>

          {/* Hamburger (mobile) */}
          <img
            src={image2}
            className="hamberger-menu"
            id="hamberger-menu"
            alt="Menu"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          />
        </nav>

        <div className="header__container">
          {/* Background image block */}
          <div
            className="header__image"
            data-aos="fade-left"
            data-aos-duration="2000"
            style={{ backgroundImage: `url(${image1})` }}
          />

          <div className="header__content">
            <h1 data-aos="fade-right" data-aos-duration="2000">DISCOVER</h1>
            <h2 data-aos="fade-left"  data-aos-duration="2000">WORLDWIDE</h2>
            <p  data-aos="fade-up"    data-aos-duration="2000">
              We are passionate about uncovering the wonders of our diverse world
              and sharing them with you. Our mission is to inspire a sense of
              discovery, and stories that make our planet unique.
            </p>
            <div data-aos="zoom-in" data-aos-duration="2000">
              <a href="#banner">
                <button className="btn">Explore</button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Banner ===== */}
      <div className="banner" id="banner">
        <div className="banner__card" data-aos="fade-up" data-aos-duration="1500"></div>

        <div className="banner__card" data-aos="fade-up" data-aos-duration="1700">
          <h4>Asian</h4>
          <p>
            Asia boasts incredibly diverse landscapes, from the Himalayan mountain
            and lush tropical rainforests to pristine beaches.
          </p>
          <a href="#">Read More</a>
        </div>

        <div className="banner__card" data-aos="fade-up" data-aos-duration="1900">
          <h4>Europe</h4>
          <p>
            A visit to Europe isn't complete without experiencing the charm and
            significance of this tiny sovereign state within a city!
          </p>
          <a href="#">Read More</a>
        </div>

        <div className="banner__card" data-aos="fade-up" data-aos-duration="2100">
          <h4>Book Now</h4>
          <p>
            Ensure a clean and intuitive design that allows users to easily
            navigate through the booking process.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>

      {/* ===== Packages ===== */}
      <section className="packages-bw" id="packages" aria-labelledby="packages-bw-heading">
        <div className="packages-bw__wrap">
          <div className="packages-bw__header" data-aos="fade-up">
            <span className="packages-bw__eyebrow">Website Packages</span>
            <h2 id="packages-bw-heading">Pick a plan that fits today — scale tomorrow.</h2>
            <p className="packages-bw__lede">
              Monochrome, minimal, and fast. Dummy plans ready to swap for your real pricing.
              Pure HTML &amp; CSS with smooth hover effects and tasteful motion.
            </p>
          </div>

          <div className="packages-bw__grid" data-aos="fade-down" data-aos-duration="1500">
            {/* Starter */}
            <article className="packages-bw__card packages-bw__reveal" aria-label="Starter plan" data-aos="zoom-in">
              <div className="packages-bw__inner">
                <span className="packages-bw__badge">Starter</span>
                <h3 className="packages-bw__title">Launch-ready essentials</h3>
                <p className="packages-bw__subtitle">Perfect for personal sites &amp; MVPs</p>
                <p className="packages-bw__price">$199 <small>/ one-time</small></p>
                <ul className="packages-bw__features" aria-label="Features">
                  <li><span className="packages-bw__tick" aria-hidden="true"></span>Single-page layout (up to 4 sections)</li>
                  <li><span className="packages-bw__tick" aria-hidden="true"></span>Responsive design + SEO basics</li>
                  <li><span className="packages-bw__tick" aria-hidden="true"></span>1 round of revisions</li>
                </ul>
              </div>
            </article>

            {/* Pro (Featured) */}
            <article className="packages-bw__card packages-bw__card--featured packages-bw__reveal" aria-label="Pro plan" data-aos="zoom-in">
              <div className="packages-bw__inner">
                <span className="packages-bw__badge">Most Popular</span>
                <h3 className="packages-bw__title">Pro growth <br /> bundle</h3>
                <p className="packages-bw__subtitle">Best for small businesses</p>
                <p className="packages-bw__price">$499 <small>/ one-time</small></p>
                <ul className="packages-bw__features" aria-label="Features">
                  <li><span className="packages-bw__tick" aria-hidden="true"></span>Multi-page site (up to 6 pages)</li>
                  <li><span className="packages-bw__tick" aria-hidden="true"></span>Blog-ready + contact forms</li>
                  <li><span className="packages-bw__tick" aria-hidden="true"></span>3 rounds of revisions</li>
                </ul>
              </div>
            </article>

            {/* Elite */}
            <article className="packages-bw__card packages-bw__reveal" aria-label="Elite plan" data-aos="zoom-in">
              <div className="packages-bw__inner">
                <span className="packages-bw__badge">Elite</span>
                <h3 className="packages-bw__title">Custom &amp; <br /> scalable</h3>
                <p className="packages-bw__subtitle">For serious products &amp; brands</p>
                <p className="packages-bw__price">$999 <small>/ one-time</small></p>
                <ul className="packages-bw__features" aria-label="Features">
                  <li><span className="packages-bw__tick" aria-hidden="true"></span>Custom layouts + CMS setup</li>
                  <li><span className="packages-bw__tick" aria-hidden="true"></span>Performance tuned &amp; analytics</li>
                  <li><span className="packages-bw__tick" aria-hidden="true"></span>Priority support &amp; handoff</li>
                </ul>
              </div>
            </article>
          </div>

          <div className="packages-bw__divider" role="presentation"></div>
          <p className="packages-bw__note">
            All plans are examples with dummy data. Replace text, prices, and features with your real content anytime.
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="lx-footer">
        <div className="lx-footer__subscribe" data-aos="fade-up">
          <h3>Stay up to date on the latest from Lx Gallery</h3>
          <form className="lx-footer__form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="lx-footer__social" data-aos="fade-up">
          <h4>Follow LX GALLERY</h4>
          <div className="lx-footer__icons">
            <a href="#"><i className="ri-linkedin-fill"></i></a>
            <a href="#"><i className="ri-instagram-line"></i></a>
            <a href="#"><i className="ri-pinterest-fill"></i></a>
            <a href="#"><i className="ri-quora-line"></i></a>
            <a href="#"><i className="ri-github-fill"></i></a>
          </div>
        </div>

        <div className="lx-footer__meta" data-aos="fade-up">
          <p>Total Website Visit<br />00</p>
          <p>
            Copyright © 2023 All rights reserved | Made with <span>❤</span> by <a href="#">Lx</a>
          </p>
        </div>

        {/* Smooth scroll to first section; auto-hide at top */}
        <a

           
          href="#top"
          className="lx-footer__to-top z-10"
          onClick={handleToTop}
          style={{
            opacity: showToTop ? 1 : 0,
            pointerEvents: showToTop ? "auto" : "none",
            transform: showToTop ? "scale(1)" : "scale(0.95)",
            transition: "opacity .25s ease, transform .25s ease",
          }}
          aria-label="Back to top"
          title="Back to top"
        >
          <i className="fas fa-arrow-up text-black"></i>
        </a>
      </footer>
    </div>
  );
}
