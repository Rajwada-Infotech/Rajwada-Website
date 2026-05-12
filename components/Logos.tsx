import Reveal from "./Reveal";

const logos = [
  "ConstructCo",
  "BuildIndia",
  "InfraGroup",
  "SteelWorks",
  "Skyline",
  "UrbanCore",
];

export default function Logos() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="container-main">
        
        {/* Heading */}
        <Reveal>
          <p
            className="
              text-center
              text-[10px]
              uppercase
              tracking-[0.28em]
              text-white/50
              mb-14
            "
          >
            Trusted by Leading Businesses Across India
          </p>
        </Reveal>

        {/* Logos Grid */}
        <Reveal delay={0.1}>
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-6
              gap-[2px]
            "
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="
                  h-24
                  border
                  border-white/10
                  bg-[#0e0e0c]
                  flex
                  items-center
                  justify-center
                  serif
                  text-[20px]
                  text-white/50
                  tracking-[0.08em]
                  transition-all
                  duration-300
                  hover:bg-[#131311]
                  hover:border-white/20
                  hover:text-white
                "
              >
                {logo}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}