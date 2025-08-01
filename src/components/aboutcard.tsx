"use client";
import ScrollText from "./scrolltext";

export default function AboutCard() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-20 bg-black">
      <div className="w-full flex flex-col gap-8 items-start max-w-4xl">
        <div className="w-full">
          <ScrollText />
        </div>
        <div className="text-gray-300 text-lg leading-relaxed space-y-6 max-w-3xl">
          <p>
            <span className="text-white font-semibold">Revue</span> isn't just a
            portfolio — it's a digital stage where creativity, code, and story
            come together. It’s where ideas breathe, experiments thrive, and
            design has a voice.
          </p>
          <p>
            From interactive UI elements to backend logic, every section of
            Revue is engineered with precision and artistic flair. It adapts,
            reacts, and evolves as you scroll — creating a seamless flow of
            discovery.
          </p>
          <p>
            Whether you're a creator, a developer, or a curious mind, Revue
            invites you into a space where projects are not just shown, but
            performed. Think of it as a visual narrative — where design systems,
            animations, and storytelling play in harmony.
          </p>
          <p>
            This is more than a site. This is a chronicle of curiosity, a
            playground of purpose, and a showcase of skill.
          </p>
        </div>
      </div>
    </section>
  );
}
