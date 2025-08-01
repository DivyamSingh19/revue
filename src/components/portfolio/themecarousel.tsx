"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { themeChange } from "theme-change";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const themes = [
  {
    name: "Light",
    value: "light",
    colors: {
      bg: "#ffffff",
      primary: "#3b82f6",
      secondary: "#f1f5f9",
      accent: "#10b981",
      text: "#1e293b",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Dark",
    value: "dark",
    colors: {
      bg: "#0f172a",
      primary: "#3b82f6",
      secondary: "#1e293b",
      accent: "#10b981",
      text: "#f8fafc",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Cupcake",
    value: "cupcake",
    colors: {
      bg: "#faf7f5",
      primary: "#65c3c8",
      secondary: "#ef9fbc",
      accent: "#eeaf3a",
      text: "#291334",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Bumblebee",
    value: "bumblebee",
    colors: {
      bg: "#fffbeb",
      primary: "#f59e0b",
      secondary: "#fed7aa",
      accent: "#84cc16",
      text: "#451a03",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Emerald",
    value: "emerald",
    colors: {
      bg: "#ecfdf5",
      primary: "#059669",
      secondary: "#a7f3d0",
      accent: "#3b82f6",
      text: "#064e3b",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Corporate",
    value: "corporate",
    colors: {
      bg: "#ffffff",
      primary: "#4338ca",
      secondary: "#e4e4e7",
      accent: "#06b6d4",
      text: "#1e293b",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Synthwave",
    value: "synthwave",
    colors: {
      bg: "#1a0b2e",
      primary: "#e879f9",
      secondary: "#7c3aed",
      accent: "#f59e0b",
      text: "#fbbf24",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Retro",
    value: "retro",
    colors: {
      bg: "#f3e8ff",
      primary: "#ef4444",
      secondary: "#fbbf24",
      accent: "#10b981",
      text: "#7c2d12",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Cyberpunk",
    value: "cyberpunk",
    colors: {
      bg: "#0f0f23",
      primary: "#ffff00",
      secondary: "#ff00ff",
      accent: "#00ffff",
      text: "#ffff00",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Valentine",
    value: "valentine",
    colors: {
      bg: "#fff0f3",
      primary: "#e879f9",
      secondary: "#fda4af",
      accent: "#f97316",
      text: "#881337",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Halloween",
    value: "halloween",
    colors: {
      bg: "#1a1625",
      primary: "#f97316",
      secondary: "#7c2d12",
      accent: "#a855f7",
      text: "#fed7aa",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Garden",
    value: "garden",
    colors: {
      bg: "#f0fdf4",
      primary: "#16a34a",
      secondary: "#bbf7d0",
      accent: "#eab308",
      text: "#14532d",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Forest",
    value: "forest",
    colors: {
      bg: "#1a2e1a",
      primary: "#22c55e",
      secondary: "#166534",
      accent: "#eab308",
      text: "#bbf7d0",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Aqua",
    value: "aqua",
    colors: {
      bg: "#ecfeff",
      primary: "#06b6d4",
      secondary: "#a5f3fc",
      accent: "#8b5cf6",
      text: "#164e63",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Lofi",
    value: "lofi",
    colors: {
      bg: "#f8fafc",
      primary: "#0f172a",
      secondary: "#cbd5e1",
      accent: "#64748b",
      text: "#334155",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Pastel",
    value: "pastel",
    colors: {
      bg: "#fefce8",
      primary: "#a855f7",
      secondary: "#e9d5ff",
      accent: "#06b6d4",
      text: "#581c87",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Fantasy",
    value: "fantasy",
    colors: {
      bg: "#f8fafc",
      primary: "#7c3aed",
      secondary: "#ddd6fe",
      accent: "#ec4899",
      text: "#4c1d95",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Wireframe",
    value: "wireframe",
    colors: {
      bg: "#ffffff",
      primary: "#000000",
      secondary: "#e5e5e5",
      accent: "#404040",
      text: "#000000",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Black",
    value: "black",
    colors: {
      bg: "#000000",
      primary: "#ffffff",
      secondary: "#404040",
      accent: "#808080",
      text: "#ffffff",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Luxury",
    value: "luxury",
    colors: {
      bg: "#09090b",
      primary: "#eab308",
      secondary: "#27272a",
      accent: "#f97316",
      text: "#fbbf24",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Dracula",
    value: "dracula",
    colors: {
      bg: "#282a36",
      primary: "#bd93f9",
      secondary: "#44475a",
      accent: "#50fa7b",
      text: "#f8f8f2",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "CMYK",
    value: "cmyk",
    colors: {
      bg: "#ffffff",
      primary: "#0891b2",
      secondary: "#06b6d4",
      accent: "#ec4899",
      text: "#0f172a",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Autumn",
    value: "autumn",
    colors: {
      bg: "#fef3c7",
      primary: "#d97706",
      secondary: "#fed7aa",
      accent: "#dc2626",
      text: "#92400e",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Business",
    value: "business",
    colors: {
      bg: "#ffffff",
      primary: "#1e40af",
      secondary: "#e5e7eb",
      accent: "#059669",
      text: "#1e293b",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Acid",
    value: "acid",
    colors: {
      bg: "#fef3c7",
      primary: "#a855f7",
      secondary: "#ddd6fe",
      accent: "#22c55e",
      text: "#581c87",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Lemonade",
    value: "lemonade",
    colors: {
      bg: "#fffbeb",
      primary: "#16a34a",
      secondary: "#dcfce7",
      accent: "#eab308",
      text: "#14532d",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Night",
    value: "night",
    colors: {
      bg: "#0f172a",
      primary: "#3b82f6",
      secondary: "#1e293b",
      accent: "#10b981",
      text: "#f1f5f9",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Coffee",
    value: "coffee",
    colors: {
      bg: "#f5f5dc",
      primary: "#8b4513",
      secondary: "#deb887",
      accent: "#cd853f",
      text: "#3e2723",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Winter",
    value: "winter",
    colors: {
      bg: "#f8fafc",
      primary: "#3b82f6",
      secondary: "#e2e8f0",
      accent: "#06b6d4",
      text: "#334155",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Dim",
    value: "dim",
    colors: {
      bg: "#2a2e37",
      primary: "#9333ea",
      secondary: "#42495b",
      accent: "#f59e0b",
      text: "#e2e8f0",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Nord",
    value: "nord",
    colors: {
      bg: "#2e3440",
      primary: "#5e81ac",
      secondary: "#3b4252",
      accent: "#a3be8c",
      text: "#eceff4",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Sunset",
    value: "sunset",
    colors: {
      bg: "#1a202c",
      primary: "#f56565",
      secondary: "#2d3748",
      accent: "#ed8936",
      text: "#fed7d7",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "CaramelLatte",
    value: "caramelLatte",
    colors: {
      bg: "#f3e8dc",
      primary: "#8b4513",
      secondary: "#deb887",
      accent: "#cd853f",
      text: "#3e2723",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Abyss",
    value: "abyss",
    colors: {
      bg: "#000814",
      primary: "#0077b6",
      secondary: "#001d3d",
      accent: "#ffd60a",
      text: "#caf0f8",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "Silk",
    value: "silk",
    colors: {
      bg: "#fdf2f8",
      primary: "#be185d",
      secondary: "#fce7f3",
      accent: "#c2410c",
      text: "#831843",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
  {
    name: "System",
    value: "system",
    colors: {
      bg: "#f9fafb",
      primary: "#6366f1",
      secondary: "#e5e7eb",
      accent: "#10b981",
      text: "#374151",
    },
    heading: "Embrace the Darkness",
    description: "Perfect for late-night coding or sleek minimal vibes.",
  },
];

export default function ThemeCarousel() {
  const [selectedTheme, setSelectedTheme] = useState("system");

  useEffect(() => {
    themeChange(false);
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
  const selected = themes.find((t) => t.value === selectedTheme);
  console.log(selected);
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      {selected && (
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-800 mb-2"
          >
            {selected.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            {selected.description}
          </motion.p>
        </div>
      )}

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {themes.map((theme, index) => {
            const isSelected = selectedTheme === theme.value;
            return (
              <CarouselItem
                key={theme.value}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <motion.div
                  className="p-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                >
                  <Card
                    className={`group cursor-pointer transition-all duration-300 overflow-hidden border-2 hover:shadow-xl ${
                      isSelected
                        ? "ring-4 ring-blue-500 ring-offset-2 shadow-2xl scale-[1.02] border-blue-200"
                        : "hover:scale-[1.02] border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <CardContent className="p-0">
                      <motion.button
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleThemeChange(theme.value)}
                        data-theme={theme.value}
                        className="w-full h-full text-left focus:outline-none relative"
                      >
                        {/* Theme Preview Container */}
                        <div
                          className="relative h-40 flex flex-col overflow-hidden"
                          style={{
                            backgroundColor: theme.colors.bg,
                            color: theme.colors.text,
                          }}
                        >
                          {/* Mock Browser Header */}
                          <div
                            className="h-8 flex items-center px-3 relative"
                            style={{ backgroundColor: theme.colors.primary }}
                          >
                            <div className="flex space-x-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-black/15"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>
                          </div>

                          {/* Content Area */}
                          <div className="flex-1 p-4 space-y-3">
                            {/* Title Bar */}
                            <div
                              className="h-3 rounded-full w-3/4"
                              style={{
                                backgroundColor: theme.colors.secondary,
                              }}
                            ></div>

                            {/* Content Lines */}
                            <div className="space-y-2">
                              <div
                                className="h-2 rounded-full w-full opacity-80"
                                style={{
                                  backgroundColor: theme.colors.secondary,
                                }}
                              ></div>
                              <div
                                className="h-2 rounded-full w-5/6 opacity-60"
                                style={{
                                  backgroundColor: theme.colors.secondary,
                                }}
                              ></div>
                              <div
                                className="h-2 rounded-full w-2/3 opacity-40"
                                style={{
                                  backgroundColor: theme.colors.secondary,
                                }}
                              ></div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-2 pt-2">
                              <div
                                className="px-3 py-1.5 rounded-md text-xs font-medium shadow-sm"
                                style={{
                                  backgroundColor: theme.colors.primary,
                                  color:
                                    theme.colors.bg === "#ffffff" ||
                                    theme.colors.bg === "#faf7f5" ||
                                    theme.colors.bg === "#fffbeb" ||
                                    theme.colors.bg === "#ecfdf5" ||
                                    theme.colors.bg === "#f3e8ff" ||
                                    theme.colors.bg === "#fff0f3" ||
                                    theme.colors.bg === "#f0fdf4" ||
                                    theme.colors.bg === "#ecfeff" ||
                                    theme.colors.bg === "#f8fafc" ||
                                    theme.colors.bg === "#fefce8" ||
                                    theme.colors.bg === "#fef3c7" ||
                                    theme.colors.bg === "#f5f5dc" ||
                                    theme.colors.bg === "#fdf2f8" ||
                                    theme.colors.bg === "#f9fafb" ||
                                    theme.colors.bg === "#f3e8dc"
                                      ? "#ffffff"
                                      : theme.colors.bg,
                                }}
                              >
                                Primary
                              </div>
                              <div
                                className="px-3 py-1.5 rounded-md text-xs font-medium border"
                                style={{
                                  backgroundColor: "transparent",
                                  borderColor: theme.colors.accent,
                                  color: theme.colors.accent,
                                }}
                              >
                                Accent
                              </div>
                            </div>
                          </div>

                          {/* Selection Indicator */}
                          {isSelected && (
                            <motion.div
                              layoutId="theme-selection-indicator"
                              className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-10"
                            >
                              <svg
                                className="w-4 h-4 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </motion.div>
                          )}

                          {/* Hover Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>

                        {/* Theme Name Footer */}
                        <div
                          className="px-4 py-3 text-center border-t"
                          style={{
                            backgroundColor: theme.colors.bg,
                            borderColor: theme.colors.secondary,
                            color: theme.colors.text,
                          }}
                        >
                          <h3 className="font-semibold text-sm">
                            {theme.name}
                          </h3>
                        </div>
                      </motion.button>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Selected Theme Display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
          <div
            className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
            style={{
              backgroundColor: themes.find((t) => t.value === selectedTheme)
                ?.colors.primary,
            }}
          ></div>
          <span className="text-gray-700 font-medium">
            Currently using:{" "}
            <span className="font-semibold">
              {themes.find((t) => t.value === selectedTheme)?.name}
            </span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
