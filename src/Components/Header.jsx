import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClasses =
    "text-white/80 hover:text-white transition-colors text-[15px] font-medium px-3 py-2 rounded-md";
  const mobileNavLinkClasses =
    "w-full text-center text-white/80 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors";

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out 
                  ${isScrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent backdrop-blur-sm shadow-none"}`}
    >
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-25 py-3">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="p-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            <img
              src="/logo.png"
              alt="News Logo"
              className="w-11 h-11 transition-transform hover:scale-105 duration-200"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-1">
            {["home", "world", "business", "technology", "sports"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={navLinkClasses}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              )
            )}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-96 mt-3" : "max-h-0 mt-0"
          } ${isScrolled || isOpen ? "bg-black/70 rounded-b-lg" : "bg-transparent"}`}
        >
          {isOpen && (
            <div className="flex flex-col items-center pt-2 pb-4 space-y-1">
              {["home", "world", "business", "technology", "sports"].map(
                (section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className={mobileNavLinkClasses}
                    onClick={() => setIsOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;