import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We begin with a deep analysis of your workflows, operations, and challenges to design the right ERP architecture.",
  },

  {
    number: "02",
    title: "Build & Customize",
    description:
      "Develop scalable ERP modules tailored specifically for your industry with automation and simplicity.",
  },

  {
    number: "03",
    title: "Deploy, Train & Support",
    description:
      "We provide go-live support, staff training, continuous updates, and long-term partnership.",
  },
];

export default function WhyChoose() {
  return (
    <section className="border-t border-white/10 py-36">
      <div className="container-main">
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
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

                Our Strategy
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="
                  serif
                  text-[clamp(40px,5vw,58px)]
                  leading-[1.08]
                  mt-6
                  mb-10
                  max-w-xl
                "
              >
                Why choose{" "}
                <em className="italic text-[#c9ba9b]">
                  Rajwada
                </em>{" "}
                Infotech?
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="
                  text-white/50
                  leading-[1.9]
                  max-w-xl
                "
              >
                We follow a proven ERP implementation strategy that
                ensures measurable business growth, operational
                efficiency, and long-term scalability.
              </p>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-[2px]">
            
            {steps.map((step, index) => (
              <Reveal
                key={index}
                delay={index * 0.12}
              >
                <div
                  className="
                    flex
                    gap-8
                    border
                    border-white/10
                    bg-[#0e0e0c]
                    p-8
                    transition-all
                    duration-300
                    hover:bg-[#131311]
                    hover:border-white/20
                  "
                >
                  
                  {/* Number */}
                  <div
                    className="
                      serif
                      text-4xl
                      text-[#c9ba9b]
                      opacity-50
                      leading-none
                      min-w-[40px]
                    "
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="
                        text-[18px]
                        mb-3
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        text-[14px]
                        leading-[1.9]
                        text-white/50
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}