import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("light");

  // apply theme to <html> element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-blue-100 dark:bg-gray-900 shadow-md">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="ml-[1rem] sm:ml-4 text-xl font-bold text-gray-800 dark:text-white">
              ShopMe
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {[
                "Home",
                "Top Rated",
                "Kids Wear",
                "Mens Wear",
                "Electronics",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium flex items-center">
                Trending Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Search, Cart, Theme */}
          <div className="flex items-center">
            {/* Search Bar */}
            <div className="relative rounded-lg overflow-hidden flex items-center bg-white dark:bg-gray-800 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <input
                type="text"
                placeholder="Search"
                className="py-2 pl-3 pr-10 w-full text-sm sm:text-base outline-none text-gray-700 dark:text-white dark:bg-gray-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-0 top-0 h-full px-3 text-gray-600 hover:text-gray-800 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Cart */}
            <div className="ml-4">
              <button className="flex items-center justify-center p-2 rounded-full bg-blue-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Theme Toggle */}
            <div className="ml-2">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center p-2 rounded-full bg-yellow-400 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
