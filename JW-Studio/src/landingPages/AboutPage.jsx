import { useState,useEffect } from "react";
import { Camera, Clapperboard, PenLine, Search, Play, Github, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {

    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <a href="/" className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold tracking-wide text-neutral-800" data-aos="fade-right" data-aos-duration="2000">Lx Gallery</h1>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="" className="hover:underline">Home</a>
              <a href="" className="underline underline-offset-4">About</a>
              <a href="" className="hover:underline">Gallery</a>
              <a href="" className="hover:underline">Blog</a>
              <a href="" className="hover:underline">Contact</a>

              <form action="/" method="get" className="ml-2 flex items-center gap-2 border rounded-full pl-3 pr-1 py-1">
                <Search className="w-4 h-4" aria-hidden />
                <input
                  type="search"
                  name="q"
                  placeholder="Search and hit enter..."
                  aria-label="Search"
                  className="outline-none border-0 text-sm bg-transparent min-w-[160px]"
                />
                <button type="submit" className="px-3 py-1 text-sm bg-neutral-900 text-white rounded-full">Search</button>
              </form>
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-300"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              <div className="relative w-5 h-5">
                <span
                  className={`absolute left-0 right-0 h-0.5 bg-black transition-transform ${open ? "top-2.5 rotate-45" : "top-1"}`}
                />
                <span
                  className={`absolute left-0 right-0 h-0.5 bg-black transition-opacity top-2.5 ${open ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute left-0 right-0 h-0.5 bg-black transition-transform ${open ? "top-2.5 -rotate-45" : "top-4"}`}
                />
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div id="mobile-menu" className="md:hidden pb-4">
              <nav className="flex flex-col gap-3">
                <a href="" className="py-2 border-b">Home</a>
                <a href="" className="py-2 border-b">About</a>
                <a href="" className="py-2 border-b">Gallery</a>
                <a href="" className="py-2 border-b">Blog</a>
                <a href="" className="py-2">Contact</a>
              </nav>
              <form action="/" method="get" className="mt-3 flex items-center gap-2 border rounded-full pl-3 pr-1 py-1">
                <Search className="w-4 h-4" aria-hidden />
                <input
                  type="search"
                  name="q"
                  placeholder="Search and hit enter..."
                  aria-label="Search"
                  className="outline-none border-0 text-sm bg-transparent flex-1"
                />
                <button type="submit" className="px-3 py-1 text-sm bg-neutral-900 text-white rounded-full">Search</button>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Hero / Breadcrumb */}
      <section
        role="banner"
        className="relative text-white"
      >
        <div
          className="absolute inset-0 bg-[url('/img/lx-imges/lx4.jpg')] bg-cover bg-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">About Us</h2>
            <nav aria-label="Breadcrumb" className="mt-3">
              <ol className="flex items-center justify-center gap-2 text-sm text-white/90">
                <li>
                  <a href="/" className="hover:underline">Home</a>
                </li>
                <li aria-hidden>›</li>
                <li aria-current="page" className="text-white">About</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">We Live For Passion</h3>
              <div className="w-16 h-[3px] bg-neutral-900 mt-3 mb-5" />
              <div className="space-y-4 text-neutral-700">
                <p>
                  Passion is energy so better to focus on the things which excites us. So, that we can perform our best at that. We should never compromise on our passion for anything.
                </p>
                <p>
                  Being passionate requires dedication, hard work, focus, and the willingness to fail over and over again. However, if you're ready to put in the work, then being a passionate person who knows what he wants can bring excitement, joy, and a sense of true purpose to your life.
                </p>
                <p>
                  One must always live for their passion because it is said that one person with passion is better than hundreds merely interested. Knowledge can be taught, skills can be acquired and experience is earned in time, but it's very hard to make someone passionate about something, hence passion is priceless.
                </p>
              </div>
              <a href="/contact" className="inline-block mt-6 px-5 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800">Contact Us</a>
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-sm">
                <img src="https://i.ibb.co/8MHrgJZ/ELYSIAN-FIELDS-3030.jpg" alt="About cover" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/30 to-transparent">
                  <a
                    href="https://youtu.be/9WZVhs7TDdA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-neutral-900 shadow"
                    aria-label="Play on YouTube"
                  >
                    <Play className="w-6 h-6" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">Why Choose Us</h2>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <article className="bg-white border rounded-2xl p-6 text-center">
              <div className="mx-auto mb-3 w-12 h-12 rounded-xl border flex items-center justify-center">
                <Clapperboard className="w-6 h-6" aria-hidden />
              </div>
              <h4 className="font-semibold mb-1">High Quality Images</h4>
              <p className="text-neutral-600 text-sm">Images and photography fascinates everybody but we believe in quality and provide high quality images which are best to see, to show, to set.</p>
            </article>

            <article className="bg-white border rounded-2xl p-6 text-center">
              <div className="mx-auto mb-3 w-12 h-12 rounded-xl border flex items-center justify-center">
                <PenLine className="w-6 h-6" aria-hidden />
              </div>
              <h4 className="font-semibold mb-1">Abundant Experience</h4>
              <p className="text-neutral-600 text-sm">Experiences makes a man perfect at everything. With a sufficient abundant experienced photographers we provide you the best images.</p>
            </article>

            <article className="bg-white border rounded-2xl p-6 text-center">
              <div className="mx-auto mb-3 w-12 h-12 rounded-xl border flex items-center justify-center">
                <Camera className="w-6 h-6" aria-hidden />
              </div>
              <h4 className="font-semibold mb-1">Modern Equipments</h4>
              <p className="text-neutral-600 text-sm">With modern and updated equipments we are able to capture every moment in an attractive manner. We use latest equipments.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">Our Team</h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Lx",
                role: "Developer",
                img: "/img/bg-img/0AIB_github.jpg",
                socials: [
                  { href: "https://github.com/0AIB", Icon: Github, label: "GitHub" },
                  { href: "https://www.twitter.com/Lx0980", Icon: Twitter, label: "Twitter" },
                  { href: "https://www.linkedin.com/in/lx-rn-1310b0256", Icon: Linkedin, label: "LinkedIn" },
                  { href: "https://in.pinterest.com/Lx0980", Icon: Instagram, label: "Pinterest" },
                ],
              },
              {
                name: "Tommy Kim",
                role: "Photographer",
                img: "/img/bg-img/20.jpg",
                socials: [
                  { href: "https://www.facebook.com", Icon: Facebook, label: "Facebook" },
                  { href: "https://www.twitter.com/Lx0980/", Icon: Twitter, label: "Twitter" },
                  { href: "https://www.linkedin.com/in/lx-rn-1310b0256", Icon: Linkedin, label: "LinkedIn" },
                  { href: "https://in.pinterest.com/Lx0980/", Icon: Instagram, label: "Pinterest" },
                ],
              },
              {
                name: "Max McCormick",
                role: "Photographer",
                img: "/img/bg-img/21.jpg",
                socials: [
                  { href: "https://t.me/LxChatGroup", Icon: Instagram, label: "Telegram" },
                  { href: "https://www.twitter.com/Lx0980", Icon: Twitter, label: "Twitter" },
                  { href: "https://www.linkedin.com/in/lx-rn-1310b0256", Icon: Linkedin, label: "LinkedIn" },
                  { href: "https://in.pinterest.com/Lx0980", Icon: Instagram, label: "Pinterest" },
                ],
              },
              {
                name: "Robert Ward",
                role: "Photographer",
                img: "/img/bg-img/22.jpg",
                socials: [
                  { href: "https://t.me/LxChatGroup", Icon: Instagram, label: "Telegram" },
                  { href: "https://www.twitter.com/Lx0980", Icon: Twitter, label: "Twitter" },
                  { href: "https://www.linkedin.com/in/lx-rn-1310b0256/", Icon: Linkedin, label: "LinkedIn" },
                  { href: "https://in.pinterest.com/Lx0980", Icon: Instagram, label: "Pinterest" },
                ],
              },
            ].map((m) => (
              <article key={m.name} className="bg-white border rounded-2xl overflow-hidden">
                <img src={m.img} alt="" className="w-full object-cover" />
                <div className="p-4 text-center">
                  <h5 className="font-semibold">{m.name}</h5>
                  <span className="text-sm text-neutral-500">{m.role}</span>
                </div>
                <div className="pb-4 flex items-center justify-center gap-3">
                  {m.socials.map(({ href, Icon, label }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border hover:bg-neutral-50"
                    >
                      <Icon className="w-4 h-4" aria-hidden />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram grid (replaces carousel) */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Follow Instagram</h2>
            <p className="mt-1">
              <a href="https://www.instagram.com/lx_0980/" className="underline" target="_blank" rel="noopener noreferrer">@lx_0980</a>
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "/img/bg-img/x11.jpg.pagespeed.ic.EUL6KdRKnX.jpg",
              "/img/bg-img/x12.jpg.pagespeed.ic.KtvCPGmp2L.jpg",
              "/img/bg-img/x13.jpg.pagespeed.ic.Yyn_qfYWhe.jpg",
              "/img/bg-img/x14.jpg.pagespeed.ic.HrODpshf0G.jpg",
              "/img/bg-img/x15.jpg.pagespeed.ic.E9v-lQJEPj.jpg",
              "/img/bg-img/x16.jpg.pagespeed.ic._rIX_EXu7n.jpg",
            ].map((src, i) => (
              <div key={i} className="relative group rounded-xl overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center text-white">
                  <a href="#" className="inline-flex items-center gap-2 text-sm">
                    <Instagram className="w-4 h-4" aria-hidden />
                    <span>Lx_0980</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-neutral-950 text-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-semibold">Follow Lx GALLERY</h2>
              <div className="mt-3 flex items-center gap-3 flex-wrap">
                <a href="https://www.linkedin.com/in/lx-rn-1310b0256" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-800 hover:bg-neutral-700">
                  <Linkedin className="w-4 h-4" aria-hidden />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/lx_0980" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-800 hover:bg-neutral-700">
                  <Instagram className="w-4 h-4" aria-hidden />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://in.pinterest.com/Lx0980/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-800 hover:bg-neutral-700">
                  <Clapperboard className="w-4 h-4" aria-hidden />
                  <span className="sr-only">Pinterest</span>
                </a>
                <a href="https://www.quora.com/profile/Lx0980" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-800 hover:bg-neutral-700">
                  <PenLine className="w-4 h-4" aria-hidden />
                  <span className="sr-only">Quora</span>
                </a>
                <a href="https://github.com/0AIB" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-800 hover:bg-neutral-700">
                  <Github className="w-4 h-4" aria-hidden />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Stay up to date on the latest from Lx Gallery</h2>
              <form className="mt-3 flex gap-3">
                <input type="email" placeholder="Enter your email" className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-400 w-full" />
                <button type="button" className="px-4 py-2 rounded-lg bg-white text-black">Subscribe</button>
              </form>
            </div>
          </div>

          <hr className="my-6 border-neutral-800" />

          <div className="text-center text-sm">
            <p>
              Copyright © 2023 All rights reserved | Made with <span className="text-rose-500">❤</span> by {" "}
              <a href="#" target="_blank" rel="noopener noreferrer" className="underline">Alex</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


