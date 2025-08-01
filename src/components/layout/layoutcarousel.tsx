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
  { name: "Minimal", id: "minimal", img: "/layouts/minimal.png" },
  { name: "Classic", id: "classic", img: "/layouts/classic.png" },
  { name: "Timeline", id: "timeline", img: "/layouts/timeline.png" },
  { name: "Gallery", id: "gallery", img: "/layouts/gallery.png" },
] as const;

export default function LayoutCarousel() {
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
          <Image src={l.img} alt={l.name} width={200} height={120} />
          <div className="text-center py-2 font-semibold">{l.name}</div>
        </div>
      ))}
    </div>
  )
}
