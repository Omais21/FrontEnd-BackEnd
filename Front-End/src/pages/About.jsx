import React from "react";
import { useSelector } from "react-redux";

export default function About() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div className={`about-page-container bg-gray-100 py-10 px-6" ${darkMode ? "bg-slate-900 text-white" : ""}`}>
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary">About Us</h1>
        <p className="text-gray-700 mt-4">
          Learn more about our story, mission, and what makes us unique.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="our-story-section mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 leading-7">
          [Exculsive Store] was born out of a passion for quality and a desire
          to make online shopping enjoyable and reliable. Starting as a small
          venture, we have grown into a trusted destination for thousands of
          customers who value quality, affordability, and exceptional service.
        </p>
      </div>

      {/* What We Offer Section */}
      <div className="what-we-offer-section mb-10">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc ml-5 text-gray-600 leading-7">
          <li>[Flash Sales]</li>
          <li>[Exculsive Products]</li>
          <li>[Best Categories]</li>
          <li>[Return Policys]</li>
        </ul>
        <p className="mt-4">
          Each item is handpicked to ensure it meets our high standards, giving
          you access to products that you’ll love and trust.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us-section mb-10">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc ml-5 text-gray-600 leading-7">
          <li>
            <strong>Quality First:</strong> Every product we offer is carefully
            vetted to ensure it meets our quality standards.
          </li>
          <li>
            <strong>Customer-Centric Approach:</strong> Your satisfaction is
            our top priority.
          </li>
          <li>
            <strong>Secure Shopping:</strong> Enjoy a hassle-free shopping
            experience with secure payments and reliable delivery services.
          </li>
          <li>
            <strong>Affordable Prices:</strong> Premium quality made accessible
            to everyone.
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact-section text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s Connect</h2>
        <p className="text-gray-600 mb-4">
          Have questions or need assistance? Our support team is here to help!
        </p>
        <div>
          <p className="text-gray-600">
            📧 Email us: <a href="mailto:your-email@example.com">ranaomais92@gmail.com</a>
          </p>
          <p className="text-gray-600">
            📞 Call us: <a href="tel:your-phone-number">121-92311123</a>
          </p>
        </div>
      </div>
    </div>
  );
}
