import React from "react";
import { useSelector } from "react-redux";

export default function ContactUs() {
   const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
  <div className={`min-h-screen  flex items-center justify-center p-6  ${darkMode ? "bg-slate-900 text-white" : ""}`}> 
     <div className={` max-w-3xl w-full bg-gray-100 shadow-lg rounded-lg p-8  ${darkMode ? "bg-slate-900 text-white" : ""}`}>   
        <h2 className={`text-3xl font-bold text-gray-800 text-center mb-6   ${darkMode ? "bg-slate-900 text-white" : ""}`}>
          Contact Us
        </h2>
        <p className={`text-gray-600 text-center mb-8   ${darkMode ? "bg-slate-900 text-white" : ""}`}>
          Have questions or need assistance? Feel free to reach out, and we’ll get back to you as soon as possible.
        </p>
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold text-gray-700 text-center">
            How to Reach Me
          </h3>
          <div className="text-gray-600 text-center">
            <p>
              <span className="font-medium">Name:</span> Omais Rao
            </p>
            <p>
              <span className="font-medium">Mobile:</span>{" "}
              <a
                href="tel:03244888259"
                className="text-red-600 hover:underline"
              >
                03244888259
              </a>
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:ranaomais92@gmail.com"
                className="text-red-600 hover:underline"
              >
                ranaomais92@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">GitHub:</span>{" "}
              <a
                href="https://github.com/omais21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                omais21
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
