"use client";
import React, { useState } from "react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "James Wilson",
    role: "Sales Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

const TeamCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getBackgroundClass = (index: any) => {
    if (hoveredIndex === null) {
      return "bg-white text-black"; // Default state
    }
    if (index === hoveredIndex) {
      return "bg-blue-500 text-white"; // Currently hovered member - blue bg
    }
    if (index === hoveredIndex - 1) {
      return "bg-white text-black"; // Previous member - white bg
    }
    return "bg-white text-black"; // All other members - default
  };

  const getTextColorClass = (index: any) => {
    if (hoveredIndex === null) {
      return "text-black"; // Default state
    }
    if (index === hoveredIndex) {
      return "text-white"; // Currently hovered member - white text
    }
    return "text-black"; // All other members - black text
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-indigo-400 to-purple-700 animate-[float_6s_ease-in-out_infinite] overflow-hidden">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Our Amazing Team
        </h1>
        <ul className="relative list-none">
          {teamMembers.map((member, index) => (
            <li
              key={index}
              className="relative group transition-all duration-300 ease-in-out"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative px-6 py-5 border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 flex justify-between items-center ${getBackgroundClass(
                  index
                )} ${getTextColorClass(index)}`}
              >
                <span className="font-semibold text-lg">{member.name}</span>
                <span className="text-sm font-normal opacity-0 group-hover:opacity-100 transition duration-300">
                  {member.role}
                </span>
                {/* Shine effect */}
                <span className="absolute top-0 left-0 w-full h-full -z-10 transition-all duration-500 ease-out group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"></span>
              </div>
              <img
                src={member.image}
                alt={member.name}
                className="absolute left-1/2 -top-20 w-28 h-28 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 z-10 object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
