import Reveal from "./Reveal";


import {
  Layers3,
  Monitor,
  Activity,
  Settings,
  Users,
  Shield,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Layers3,
    title: "Smart & User-Friendly ERP",
    description:
      "Designed with a simple interface that makes daily business operations smooth and efficient.",
  },

  {
    number: "02",
    icon: Monitor,
    title: "Complete Business Management",
    description:
      "Manage accounts, inventory, HR, sales, purchase, and projects in one integrated platform.",
  },

  {
    number: "03",
    icon: Activity,
    title: "Real-Time Reporting & Analytics",
    description:
      "Get accurate reports and live insights to make faster and smarter business decisions.",
  },

  {
    number: "04",
    icon: Settings,
    title: "Customizable & Scalable",
    description:
      "ERP systems tailored for your workflows and built to scale with your business growth.",
  },

  {
    number: "05",
    icon: Users,
    title: "PAN India Client Support",
    description:
      "Serving businesses across India with reliable support and continuous upgrades.",
  },

  {
    number: "06",
    icon: Shield,
    title: "Automation & Accuracy",
    description:
      "Reduce manual work, improve productivity, and eliminate operational inefficiencies.",
  },
];

export default function Features() {
  return (
    <section className="py-36 relative">
      <div className="container-main">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          
          <Reveal>
            <div>
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

                Platform Features
              </div>

              <h2
                className="
                  serif
                  text-[clamp(40px,5vw,58px)]
                  leading-[1.1]
                  mt-6
                  max-w-xl
                "
              >
                Transforming businesses with{" "}
                <em className="italic text-[#c9ba9b]">
                  intelligent
                </em>{" "}
                ERP
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="
                text-white/50
                leading-[1.9]
                max-w-xl
              "
            >
              Our ERP platform is engineered for businesses that demand
              speed, automation, operational clarity, and intelligent
              business management.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal
                key={index}
                delay={index * 0.08}
              >
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    border
                    border-white/10
                    bg-[#0e0e0c]
                    p-10
                    transition-all
                    duration-500
                    hover:border-white/20
                    hover:bg-[#131311]
                  "
                >
                  
                  {/* Big Number */}
                  <div
                    className="
                      serif
                      text-[72px]
                      leading-none
                      text-[#c9ba9b]
                      opacity-10
                      transition-all
                      duration-500
                      group-hover:opacity-20
                    "
                  >
                    {feature.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="
                      w-10
                      h-10
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      mt-4
                      mb-6
                    "
                  >
                    <Icon
                      size={18}
                      className="text-[#c9ba9b]"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-[18px]
                      leading-snug
                      mb-4
                    "
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-[14px]
                      leading-[1.9]
                      text-white/50
                      min-h-[110px]
                    "
                  >
                    {feature.description}
                  </p>

                  {/* Bottom Line */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[1px]
                      w-0
                      bg-[#c9ba9b]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}