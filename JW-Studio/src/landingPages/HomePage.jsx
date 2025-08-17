// src/landingPages/HomePage.jsx
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Your page-specific CSS (keep if you have it)
import "./css/HomePage.css";

// Imported images
import image1 from "./images/cody-lannom-G95AReIh_Ko-unsplash.jpg"; // main header image
import image2 from "./images/hamberger-menu.png";                   // hamburger icon
import image3 from "./images/logo.png";                             // logo

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* ===== Header ===== */}
      <header className="header" id="top">
        <nav>
          {/* Desktop logo */}
          <div className="nav__logo">
            <a href="/">
              <img src={image3} alt="Logo" className="logo-color" />
            </a>
          </div>

          {/* Mobile logo (matches your CSS expectations) */}
          <div className="nav__logo2">
            <a href="/">
              <img src={image3} alt="Logo" className="logo-color" />
            </a>
          </div>

          {/* Nav links 
              - Desktop: your CSS displays as a centered pill
              - Mobile: your CSS sets display:none; we only override when open
          */}
          <ul
            className="nav__links"
            id="nav-links"
            style={menuOpen ? { display: "flex" } : undefined}
          >
            <li>
              <a href="#home" data-aos="fade-down" data-aos-duration="1500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" data-aos="fade-down" data-aos-duration="1800">
                About Us
              </a>
            </li>
            <li>
              <a href="#booking" data-aos="fade-down" data-aos-duration="2100">
                Booking
              </a>
            </li>
            <li>
              <a href="#contact" data-aos="fade-down" data-aos-duration="2400">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Hamburger (mobile) */}
          <img
            src={image2}
            className="hamberger-menu"
            id="hamberger-menu"
            alt="Menu"
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
            <h1 data-aos="fade-right" data-aos-duration="2000">
              DISCOVER
            </h1>
            <h2 data-aos="fade-left" data-aos-duration="2000">
              WORLDWIDE
            </h2>
            <p data-aos="fade-up" data-aos-duration="2000">
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

        <a href="#top" className="lx-footer__to-top"><i className="ri-arrow-up-line"></i></a>
      </footer>
    </div>
  );
}
