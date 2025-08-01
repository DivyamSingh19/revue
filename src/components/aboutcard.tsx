"use client"
import React, { useState, useEffect } from "react";

const AboutCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const animatedWords = ["performance", "experience", "journey", "narrative"];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);

    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % animatedWords.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(wordTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Opening Line */}
        <div className="overflow-hidden">
          <p
            className={`text-2xl md:text-3xl font-light leading-relaxed transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="inline-block animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-white via-gray-300 to-white bg-[length:200%_100%] bg-clip-text text-transparent font-bold text-4xl md:text-5xl">
              Revue
            </span>{" "}
            is more than just a portfolio — it's a curated{" "}
            <span className="relative inline-block">
              <span
                key={currentWord}
                className="animate-[textSlideUp_0.6s_ease-out] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium"
              >
                {animatedWords[currentWord]}
              </span>
            </span>{" "}
            of ideas, experiments, and design thinking.
          </p>
        </div>

        {/* Second Paragraph */}
        <div className="overflow-hidden">
          <p
            className={`text-xl md:text-2xl font-light leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Built to showcase projects with{" "}
            <span className="relative group">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold animate-[glow_2s_ease-in-out_infinite]">
                intention
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-500"></span>
            </span>{" "}
            and{" "}
            <span className="relative group">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-semibold animate-[glow_2s_ease-in-out_infinite_0.5s]">
                narrative
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-500"></span>
            </span>
            , Revue transforms static showcases into interactive stories.
          </p>
        </div>

        {/* Third Paragraph */}
        <div className="overflow-hidden">
          <p
            className={`text-xl md:text-2xl font-light leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Each scroll is a{" "}
            <span className="relative inline-block">
              <span className="animate-[typewriter_3s_steps(5)_infinite] bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-semibold">
                scene
              </span>
              <span className="absolute top-0 right-0 w-0.5 h-full bg-pink-400 animate-[blink_1s_infinite]"></span>
            </span>
            , each project a{" "}
            <span className="relative group overflow-hidden">
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold animate-[wave_2s_ease-in-out_infinite]">
                spotlight
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>{" "}
            — crafted not just to display work, but to{" "}
            <span className="relative inline-block group">
              <span className="font-bold text-2xl md:text-3xl animate-[bounce_2s_ease-in-out_infinite] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                express
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg blur-sm scale-0 group-hover:scale-100 transition-all duration-500"></div>
            </span>{" "}
            it.
          </p>
        </div>

        {/* Decorative Line */}
        <div
          className={`w-full h-px bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        ></div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="group relative px-8 py-3 bg-transparent border border-white/30 rounded-full hover:border-white/60 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 text-lg font-light animate-[fadeInOut_3s_ease-in-out_infinite]">
              Experience Revue
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes textSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.3);
          }
        }

        @keyframes typewriter {
          0%,
          100% {
            width: 100%;
          }
          50% {
            width: 0%;
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-2px);
          }
          75% {
            transform: translateY(2px);
          }
        }

        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutCard;
