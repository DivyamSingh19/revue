import React from "react";

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

const hoverGradients = [
  "from-pink-500 to-yellow-400",
  "from-indigo-400 to-purple-600",
  "from-pink-300 to-red-400",
  "from-blue-400 to-cyan-300",
  "from-green-400 to-teal-300",
  "from-pink-400 to-yellow-300",
];

const Team = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-indigo-400 to-purple-700 animate-[float_6s_ease-in-out_infinite]">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Our Amazing Team
        </h1>
        <ul className="relative list-none ">
          {teamMembers.map((member, index) => (
            <li
              key={index}
              className="relative group transition-all duration-300 ease-in-out"
            >
              <div
                className={`relative px-6 py-5 text-left text-white font-semibold text-lg  border border-white/20 backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2
                group-hover:bg-gradient-to-br ${
                  hoverGradients[index % hoverGradients.length]
                }`}
              >
                {member.name}
                {/* Shine effect */}
                <span className="absolute top-0 left-0 w-full h-full -z-10 transition-all duration-500 ease-out group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"></span>
              </div>
              <img
                src={member.image}
                alt={member.name}
                className="absolute left-1/2 -top-20 w-28 h-28 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 z-10 object-cover"
              />
              <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-black bg-opacity-80 text-white text-sm px-4 py-1 rounded-full whitespace-nowrap">
                {member.role}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
