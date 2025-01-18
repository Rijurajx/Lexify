import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <hr className="bg-gray-700 opacity-30" />
        <div className="container px-20 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
                PRODUCT
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/features" className="text-gray-600 hover:text-gray-800">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-gray-600 hover:text-gray-800">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/demo" className="text-gray-600 hover:text-gray-800">
                    Request Demo
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-600 hover:text-gray-800">
                    FAQ
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
                RESOURCES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/blog" className="text-gray-600 hover:text-gray-800">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/help-center" className="text-gray-600 hover:text-gray-800">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-600 hover:text-gray-800">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
                ABOUT US
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/about" className="text-gray-600 hover:text-gray-800">
                    About Lexify
                  </a>
                </li>
                <li>
                  <a href="/team" className="text-gray-600 hover:text-gray-800">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-gray-600 hover:text-gray-800">
                    Careers
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
                SUBSCRIBE TO UPDATES
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="footer-email"
                    name="footer-email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter your email"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-cyan-700 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-800 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Get the latest updates on our legal document solutions
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 text-center">
              © 2025 Lexify —{" "}
              <a
                href="/contact"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
              >
                Contact Us
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href="https://www.linkedin.com" className="text-gray-500 ml-3">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-500 ml-3">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com" className="text-gray-500 ml-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com" className="text-gray-500 ml-3">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
