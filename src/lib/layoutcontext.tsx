"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type LayoutType = "minimal" | "classic" | "timeline" | "gallery";

interface LayoutContextProps {
  layout: LayoutType;
  setLayout: (layout: LayoutType) => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context)
    throw new Error("useLayout must be used within a LayoutProvider");
  return context;
};

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [layout, setLayout] = useState<LayoutType>("minimal");

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};
