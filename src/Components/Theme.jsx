import { createContext, useState, useContext } from "react";

const ThemeContext = createContext(); // ✅ ThemeContext define kiya

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={
          theme === "dark"
            ? "dark bg-gray-900 text-white"
            : "bg-white text-black"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// ✅ Custom hook export kar diya
export const useTheme = () => useContext(ThemeContext);
