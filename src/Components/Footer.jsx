import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 pt-10 pb-8">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-25">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-5">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center">
              <img src="/logo.png" alt="News Logo" className="w-10 h-10 mr-3" />
              <span className="text-xl font-bold text-white">GlobalNews</span>
            </div>
            <p className="text-slate-400 max-w-xs pt-1">
              Delivering accurate and timely news coverage from around the world
              since 2010.
            </p>
            <div className="flex space-x-3 pt-5">
              {[
                { name: "facebook", icon: "ri-facebook-circle-line" },
                { name: "twitter", icon: "ri-twitter-x-line" },
                { name: "instagram", icon: "ri-instagram-line" },
                { name: "linkedin", icon: "ri-linkedin-line" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors pr-3"
                  aria-label={social.name}
                >
                  <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                    <i className={`${social.icon} text-lg`}></i>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-slate-800">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "World", "Business", "Technology", "Sports"].map(
                (item) => (
                  <li key={item} className="py-1">
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-white transition-colors block pb-0.5"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-slate-800">
              Categories
            </h3>
            <ul className="space-y-3">
              {[
                "Politics",
                "Technology",
                "Health",
                "Entertainment",
                "Science",
                "Environment",
              ].map((category) => (
                <li key={category} className="py-1">
                  <a
                    href="#"
                    className="hover:text-white transition-colors block pb-0.5"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-slate-800">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-0.5 text-slate-500 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Ahmedabad, Gujarat</span>
              </li>
              <li className="flex items-start pt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-0.5 text-slate-500 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@globalnews.com</span>
              </li>
              <li className="flex items-start pt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-0.5 text-slate-500 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+91 12345 67890</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} GlobalNews. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors px-2 py-1"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
