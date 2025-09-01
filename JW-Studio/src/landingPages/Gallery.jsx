import React, { useMemo, useState } from "react";
import img1 from '../assets/images/GalleryCoverimage.jpg'
import p1 from '../assets/images/p1.jpg'
import p2 from '../assets/images/p2.jpg'
import p3 from '../assets/images/p3.jpg'
import p4 from '../assets/images/p4.jpg'
import p5 from '../assets/images/p5.jpg'
import p6 from '../assets/images/p6.jpg'
import p7 from '../assets/images/p7.jpg'
import p8 from '../assets/images/p8.jpg'
import p9 from '../assets/images/p9.jpg'
import NavBar from "./NavBar";

export default function Gallery() {
  const [active, setActive] = useState("All");

  const categories = ["All", "Nature", "Fashion", "Wedding"];

  const images = useMemo(
    () => [
      { src: p1, alt: "Puffin bird spreading wings", tag: "Nature" },
      { src: p2, alt: "Tall waterfall in jungle", tag: "Nature" },
      { src: p3, alt: "Fashion portrait", tag: "Fashion" },
      { src: p4, alt: "Editorial fashion shot", tag: "Fashion" },
      { src: p5, alt: "Wedding couple", tag: "Wedding" },
      { src: p6, alt: "Forest with mist", tag: "Nature" },
      { src: p7, alt: "Wedding rings on book", tag: "Wedding" },
      { src: p8, alt: "Runway fashion model", tag: "Fashion" },
      { src: p9, alt: "Bride bouquet", tag: "Wedding" },
    ],
    []
  );

  const filtered = active === "All" ? images : images.filter((i) => i.tag === active);

  return (
    <>
      <NavBar />

      <section className="flex flex-col lg:flex-row pb-20 ">
        {/* Left: content */}
        <div className="basis-full lg:basis-2/5 p-6 lg:p-10 flex items-center">
          <div className="max-w-xl">
            <h1
              className="text-3xl md:text-5xl font-bold leading-tight"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Capture Your Beautiful Moments
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg">
              From intimate portraits to grand celebrations, we craft timeless images
              you'll love to revisit. Let's plan your perfect shoot.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/booking"
                className="inline-flex items-center rounded-xl bg-gray-900 px-6 py-3 text-white font-medium shadow hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Book a Session
              </a>
              <a
                href="/gallery"
                className="inline-flex items-center rounded-xl border px-6 py-3 font-medium hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div
          className="basis-full lg:basis-3/5 relative flex items-center justify-center bg-gray-100"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img
            src={img1}
            alt="JW Studio collage"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section id="gallery-section" className="py-16 bg-black/86 rounded-t-[20px] ">
        {/* Local CSS-in-JSX for small animation to mimic the original .animate/zoom */}
        <style>{`
          @keyframes zoom { from { transform: scale(0.92); opacity: .6 } to { transform: scale(1); opacity: 1 } }
          .animate-zoom { animation: zoom .35s ease-in 1 }
        `}</style>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold tracking-tight uppercase mb-10 text-white">
            Gal<span className="text-red-600">lery</span>
          </h2>

          {/* Filter Pills */}
          <div className="flex justify-start sm:justify-center">
            <ul className="inline-flex items-center gap-6">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => setActive(cat)}
                    aria-pressed={active === cat}
                    className={`px-6 py-3 rounded-md text-sm font-bold uppercase tracking-wide transition border ${
                      active === cat
                        ? "bg-red-600 text-white border-red-600 shadow"
                        : "bg-white text-gray-900 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((img, idx) => (
              <figure
                key={`${img.src}-${idx}`}
                className="group overflow-hidden rounded-lg shadow-sm ring-1 ring-gray-200 bg-white"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] animate-zoom"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}