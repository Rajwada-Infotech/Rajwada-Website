import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Tripti Sen",
    role: "Business Manager",
    initial: "T",
    text: "Rajwada Infotech helped automate our entire operations with a smart ERP system. Our project tracking improved overnight.",
  },

  {
    name: "Ashmit Jain",
    role: "Startup Founder",
    initial: "A",
    text: "The ERP solution significantly improved our inventory management and reporting. The support team is excellent.",
  },

  {
    name: "Tara Roy",
    role: "Project Director",
    initial: "T",
    text: "CivilierERP transformed how we manage our construction projects. Billing and tracking became effortless.",
  },

  {
    name: "S. Chatterjee",
    role: "Managing Director",
    initial: "S",
    text: "Real-time analytics changed everything for us. We now make decisions based on actual business data.",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-white/10 py-36">
      <div className="container-main">
        
        {/* Header */}
        <div className="mb-20">
          
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

              Client Feedback
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="
                serif
                text-[clamp(40px,5vw,58px)]
                leading-[1.08]
                mt-6
              "
            >
              What people
              <br />
              <em className="italic text-[#c9ba9b]">
                think about us
              </em>
            </h2>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-[2px]">
          
          {testimonials.map((item, index) => (
            <Reveal
              key={index}
              delay={index * 0.08}
            >
              <div
                className="
                  relative
                  border
                  border-white/10
                  bg-[#0e0e0c]
                  p-12
                  transition-all
                  duration-300
                  hover:border-white/20
                "
              >
                
                {/* Quote */}
                <div
                  className="
                    absolute
                    top-6
                    right-8
                    serif
                    text-[100px]
                    leading-none
                    text-[#c9ba9b]
                    opacity-10
                    pointer-events-none
                  "
                >
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="
                        w-3
                        h-3
                        bg-[#c9ba9b]
                        [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]
                      "
                    />
                  ))}
                </div>

                {/* Text */}
                <p
                  className="
                    cormorant
                    text-[24px]
                    italic
                    leading-[1.8]
                    text-white/60
                    mb-10
                    relative
                    z-10
                  "
                >
                  "{item.text}"
                </p>

                {/* Person */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    pt-7
                    border-t
                    border-white/10
                  "
                >
                  
                  {/* Avatar */}
                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      border
                      border-white/10
                      bg-[#131311]
                      flex
                      items-center
                      justify-center
                      serif
                      text-xl
                      text-[#c9ba9b]
                    "
                  >
                    {item.initial}
                  </div>

                  {/* Info */}
                  <div>
                    <h4 className="text-[15px]">
                      {item.name}
                    </h4>

                    <p
                      className="
                        text-[11px]
                        text-white/50
                        tracking-[0.08em]
                        mt-1
                      "
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}