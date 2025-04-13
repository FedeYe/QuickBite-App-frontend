import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the stored theme preference in localStorage
    const darkMode = localStorage.getItem("theme") === "dark";

    // Set the state and apply the 'dark' class to the root element
    setIsDarkMode(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, []); // Empty dependency array ensures this runs only once on mount

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light"; // Toggle the theme
    localStorage.setItem("theme", newTheme); // Save the theme to localStorage
    document.documentElement.classList.toggle("dark", newTheme === "dark"); // Toggle the 'dark' class on <html>

    setIsDarkMode(newTheme === "dark"); // Update the state to reflect the new theme
  };

  return (
    <Button onClick={toggleTheme} variant="ghost" className="hover:text-red-500 hover:bg-white">
        {isDarkMode ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeToggle