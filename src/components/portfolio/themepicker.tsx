"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Laptop2 } from "lucide-react";
import { themeChange } from "theme-change";

const themes = [
  { name: "Light", icon: <Sun className="w-8 h-8" />, value: "light" },
  { name: "Dark", icon: <Moon className="w-8 h-8" />, value: "dark" },
  { name: "System", icon: <Laptop2 className="w-8 h-8" />, value: "system" },
];

export default function ThemePicker() {
  const [selectedTheme, setSelectedTheme] = useState("system");

  useEffect(() => {
    themeChange(false); // initialize theme-change
    // sync initial theme from localStorage if set
    const stored = localStorage.getItem("theme");
    if (stored) setSelectedTheme(stored);
  }, []);

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
    if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const systemTheme = prefersDark ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", systemTheme);
      localStorage.setItem("theme", "system");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
      {themes.map((theme) => {
        const isSelected = selectedTheme === theme.value;
        return (
          <motion.button
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 ease-in-out shadow-md ${
              isSelected
                ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white border-transparent"
                : "bg-white dark:bg-zinc-900 border-gray-300 dark:border-zinc-700"
            }`}
          >
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {theme.icon}
            </motion.div>
            <span className="text-xl font-semibold">{theme.name}</span>
            {isSelected && (
              <motion.div
                layoutId="outline"
                className="absolute inset-0 rounded-2xl ring-4 ring-white/50"
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
