"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useLayout } from "@/lib/layoutcontext";

const layouts = [
  { name: "Minimal", id: "minimal" },
  { name: "Classic", id: "classic" },
  { name: "Timeline", id: "timeline" },
  { name: "Gallery", id: "gallery" },
] as const;

export default function LayoutSelector() {
  const { layout, setLayout } = useLayout();

  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      {layouts.map((l) => (
        <div
          key={l.id}
          onClick={() => setLayout(l.id)}
          className={`cursor-pointer border-2 rounded-xl min-w-[200px] ${
            layout === l.id ? "border-primary" : "border-muted"
          }`}
        >
          <div className="text-center py-2 font-semibold">{l.name}</div>
        </div>
      ))}
    </div>
  );
}
