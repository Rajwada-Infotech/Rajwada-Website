import Reveal from "./Reveal";

const modules = [
  "Accounts & Finance",
  "Inventory Management",
  "HR & Payroll",
  "Project Billing",
  "Real-Time Reporting",
];

export default function CTA() {
  return (
    <section className="border-t border-white/10 py-32 relative overflow-hidden">
      
      {/* Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[800px]
          h-[400px]
          bg-[#5a4123]/20
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="container-main relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT */}
          <div>
            
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

                Smart Solution
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="
                  serif
                  text-[clamp(42px,5vw,64px)]
                  leading-[1.05]
                  mt-6
                  max-w-xl
                "
              >
                Build smarter with{" "}
                <em className="italic text-[#c9ba9b]">
                  great
                </em>{" "}
                opportunity
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="
                  text-white/50
                  leading-[1.9]
                  mt-8
                  max-w-xl
                "
              >
                Powerful ERP solutions that help businesses automate
                operations, improve productivity, and scale efficiently
                across every department.
              </p>
            </Reveal>

            {/* Buttons */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-10">
                
                <button
                  className="
                    bg-[#c9ba9b]
                    text-black
                    border
                    border-[#c9ba9b]
                    px-9
                    py-4
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    transition-all
                    duration-300
                    hover:bg-transparent
                    hover:text-[#c9ba9b]
                  "
                >
                  Explore Platform
                </button>

                <button
                  className="
                    border
                    border-white/10
                    px-9
                    py-4
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/60
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:text-white
                  "
                >
                  Book a Demo
                </button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT CARD */}
          <Reveal delay={0.2}>
            <div
              className="
                border
                border-white/10
                bg-[#0e0e0c]
                p-10
              "
            >
              
              {/* Title */}
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/50
                  mb-8
                "
              >
                CivilierERP Modules
              </p>

              {/* Modules */}
              <div className="flex flex-col">
                
                {modules.map((module, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-4
                      py-5
                      border-b
                      border-white/10
                      last:border-none
                    "
                  >
                    
                    {/* Dot */}
                    <div className="w-2 h-2 rounded-full bg-[#c9ba9b]" />

                    {/* Name */}
                    <span className="text-[15px]">
                      {module}
                    </span>

                    {/* Tag */}
                    <span
                      className="
                        ml-auto
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#c9ba9b]
                        border
                        border-[#c9ba9b33]
                        px-3
                        py-1
                      "
                    >
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}