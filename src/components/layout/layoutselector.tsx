"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLayout } from "@/lib/layoutcontext";
import { useRouter } from "next/navigation";

const layouts = [
  { name: "Minimal", id: "minimal" },
  { name: "Classic", id: "classic" },
  { name: "Timeline", id: "timeline" },
  { name: "Gallery", id: "gallery" },
] as const;

export default function LayoutSelector() {
  const { layout, setLayout } = useLayout();
  const router = useRouter();

  const handleSelect = (id: (typeof layouts)[number]["id"]) => {
    setLayout(id);
    router.push("/portfolio");
  };

  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      {layouts.map((l) => (
        <motion.div
          key={l.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleSelect(l.id)} 
          className="min-w-[220px] cursor-pointer"
        >
          <Card
            className={`rounded-xl border-2 ${
              layout === l.id ? "border-primary shadow-lg" : "border-muted"
            }`}
          >
            <CardContent className="flex flex-col items-center justify-center py-6">
              <span className="text-lg font-semibold">{l.name}</span>
              {/* Optional preview */}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
