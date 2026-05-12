import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="py-36 relative">
      <div className="container-main">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT IMAGE */}
          <Reveal>
            <div className="relative">
              
              {/* Image Box */}
              <div
                className="
                  relative
                  overflow-hidden
                  border
                  border-white/10
                "
              >
                <div
                  className="
                    aspect-[4/5]
                    bg-gradient-to-br
                    from-[#1a1208]
                    via-[#2d1e0f]
                    to-[#1a1208]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      w-32
                      h-32
                      rounded-full
                      border
                      border-[#c9ba9b33]
                    "
                  />
                </div>
              </div>

              {/* Floating Card */}
              <div
                className="
                  absolute
                  -bottom-6
                  -right-6
                  bg-[#c9ba9b]
                  text-black
                  px-8
                  py-6
                "
              >
                <h3 className="serif text-5xl leading-none">
                  100+
                </h3>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    mt-2
                    text-black/70
                  "
                >
                  Businesses Automated
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT CONTENT */}
          <div className="lg:pl-10 lg:border-l border-white/10">
            
            {/* Eyebrow */}
            <Reveal>
              <div
                className="
                  flex
                  items-center
                  gap-4
                  text-[10px]
                  uppercase
                  tracking-[0.28em]
                  text-[#c9ba9b]
                "
              >
                <div className="w-7 h-[1px] bg-[#c9ba9b]" />

                About Us
              </div>
            </Reveal>

            {/* Heading */}
            <Reveal delay={0.1}>
              <h2
                className="
                  serif
                  text-[clamp(40px,5vw,60px)]
                  leading-[1.1]
                  mt-6
                  max-w-xl
                "
              >
                Intelligent ERP Built for{" "}
                <em className="italic text-[#c9ba9b]">
                  Modern
                </em>{" "}
                Businesses
              </h2>
            </Reveal>

            {/* Paragraph */}
            <Reveal delay={0.2}>
              <p
                className="
                  text-white/50
                  leading-[1.9]
                  mt-8
                  max-w-xl
                "
              >
                Rajwada Infotech delivers smart, scalable ERP systems
                designed for modern enterprises across India.
                <br />
                <br />
                Our flagship platform CivilierERP simplifies
                operations with intelligent modules for accounts,
                inventory, HR, billing, analytics, and project
                management.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 gap-[2px] mt-12">
                
                {/* Card */}
                <div className="border border-white/10 bg-[#131311] p-7">
                  <h3 className="serif text-5xl text-[#c9ba9b]">
                    100+
                  </h3>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-3">
                    Clients Across India
                  </p>
                </div>

                <div className="border border-white/10 bg-[#131311] p-7">
                  <h3 className="serif text-5xl text-[#c9ba9b]">
                    6+
                  </h3>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-3">
                    ERP Modules
                  </p>
                </div>

                <div className="border border-white/10 bg-[#131311] p-7">
                  <h3 className="serif text-5xl text-[#c9ba9b]">
                    8+
                  </h3>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-3">
                    Years Experience
                  </p>
                </div>

                <div className="border border-white/10 bg-[#131311] p-7">
                  <h3 className="serif text-5xl text-[#c9ba9b]">
                    24/7
                  </h3>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-3">
                    Client Support
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Button */}
            <Reveal delay={0.4}>
              <button
                className="
                  mt-10
                  border
                  border-[#c9ba9b44]
                  px-8
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-[#c9ba9b]
                  transition-all
                  duration-300
                  hover:border-[#c9ba9b]
                  hover:text-white
                "
              >
                Read More →
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}