"use client";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function ThemeInit() {
  useEffect(() => {
    themeChange(false); // required to activate theme-change on client
  }, []);
  return null;
}
