import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from "./NavBar";


export default function ContactUs() {
  // STATE (fixed: "cosnt" typo)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Your EmailJS credentials (as requested)
  const serviceId = "service_4q8knyw";
  const templateId = "template_1scgr2v";
  const publicKey = "qQpCCm36KM-_sqoMq";

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build the params to match your EmailJS template vars
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      setIsSending(true);
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert("Thanks! We’ll get back to you soon.");
      // reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Sorry, something went wrong while sending your message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <NavBar />

    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen">
      {/* Header */}
      

      {/* Main */}
      <main className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for inquiries, bookings, or any questions
            about our camera studio services.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            {/* IMPORTANT: onSubmit wired to EmailJS */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // not required for send(), but fine to keep
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full bg-black text-white py-3 px-6 rounded-md transition duration-300 font-medium ${
                  isSending ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-800"
                }`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </section>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-medium">Our Studio</h3>
                    <p className="text-gray-600">
                      123 Photography Lane, Studio District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <FaPhoneAlt className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">
                      +1 (212) 555-7890
                      <br />
                      Mon–Fri, 9am–6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">
                      info@jwstudio.com
                      <br />
                      bookings@jwstudio.com
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Map */}
            <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
              <div className="h-full min-h-[300px]">
                <iframe
                  title="JW Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63492.95565772318!2d80.55074799999998!3d5.951992199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae138d151937cd9%3A0x1d711f45897009a3!2sMatara!5e0!3m2!1sen!2slk!4v1755481658223!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>
          </div>
        </div>

        {/* Studio Hours */}
        <section className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-center">Studio Hours</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ["Monday", "9:00 AM - 6:00 PM"],
              ["Tuesday", "9:00 AM - 6:00 PM"],
              ["Wednesday", "9:00 AM - 6:00 PM"],
              ["Thursday", "9:00 AM - 8:00 PM"],
              ["Friday", "9:00 AM - 8:00 PM"],
              ["Saturday", "10:00 AM - 4:00 PM"],
              ["Sunday", "Closed"],
              ["Holidays", "By appointment"],
            ].map(([day, hrs]) => (
              <div key={day}>
                <h3 className="font-medium">{day}</h3>
                <p className="text-gray-600">{hrs}</p>
              </div>
            ))}
          </div>
        </section>
        
      </main>

            
      
    </div>
    
            <footer className="lx-footer relative bg-gray-950 px-4 py-8 text-center text-[#f4f4f4] border-t-1 rounded-t-[20px] shadow-lg b">
      {/* Subscribe */}
      <div className="lx-footer__subscribe" data-aos="fade-up">
        <h3 className="mb-4 font-medium">
          Stay up to date on the latest from Lx Gallery
        </h3>
      </div>

      {/* Social icons */}
      <div className="lx-footer__social mt-8" data-aos="fade-up">
        <h4 className="mb-4 font-semibold">Follow JW-STUDIO </h4>
        <div className="lx-footer__icons flex justify-center gap-2">
          {[
            { icon: "fab fa-linkedin-in", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-pinterest-p", url: "#" },
            { icon: "fab fa-quora", url: "#" },
            { icon: "fab fa-github", url: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-black text-[1.2rem] transition-transform duration-300 hover:scale-110"
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Meta info */}
      <div className="lx-footer__meta mt-8 text-[#b3b3b3]" data-aos="fade-up">
        <p>
          Total Website Visit
          <br />
          
        </p>
        <p className="text-[0.9rem]">
          Copyright © 2023 All rights reserved | Made {" "}
          <span className="text-red-600"></span> by{" "}
          <a href="#" className="text-[#00aaff]">
            JW
          </a>
        </p>
      </div>
    </footer>

</>
  );
}
