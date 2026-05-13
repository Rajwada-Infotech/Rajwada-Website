import {
  Layers3,
  Monitor,
  Activity,
} from "lucide-react";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import Newsletter from "@/components/Newsletter";

export default function AboutPage() {
  return (
    <main className="bg-[#080807] text-white overflow-hidden">
      <Cursor />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-[170px] pb-24 overflow-hidden border-b border-white/10">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#6f4d23]/10 blur-[140px]" />

        <div className="container-main relative z-10">
          
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-5 h-[1px] bg-[#c9ba9b]" />

              <p className="text-[9px] uppercase tracking-[0.28em] text-[#c9ba9b]">
                About Rajwada Infotech
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="serif text-[clamp(64px,7vw,118px)] leading-[0.9] tracking-[-0.04em] max-w-[1100px] text-[#f3efe7]">
              Control Your
              <br />

              <em className="italic text-[#d2c0a0] font-normal">
                Business
              </em>

              <br />

              With Us
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="
                cormorant
                text-[18px]
                italic
                leading-[1.8]
                text-white/40
                max-w-[540px]
                mt-25
              "
            >
              Rajwada Infotech delivers smart ERP systems for modern businesses
              with automation, analytics, inventory, HR, accounts, and project
              management.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-36 border-b border-white/10">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <Reveal>
              <div className="relative overflow-hidden border border-white/10 bg-[#0e0e0c] aspect-[4/5]">
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208] via-[#2d1e0f] to-[#120f0a]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full border border-[#c9ba9b33]" />
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.28em] text-[#c9ba9b] mb-8">
                  
                  <div className="w-7 h-[1px] bg-[#c9ba9b]" />

                  About Us
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="serif text-[clamp(36px,4vw,52px)] leading-[1.08] mb-8">
                  Intelligent ERP
                  <br />
                  for modern enterprises
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-white/50 leading-[2] text-[14px] mb-10">
                  Rajwada Infotech is a trusted software company delivering
                  powerful ERP solutions for modern businesses. We develop smart
                  systems like CivilierERP to manage accounts, inventory, HR,
                  and projects efficiently.
                  <br />
                  <br />
                  Serving 100+ clients across India, our goal is to simplify
                  operations, improve productivity, and help companies grow with
                  reliable technology.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <button className="border border-[#c9ba9b33] px-10 py-5 text-[10px] uppercase tracking-[0.24em] text-[#c9ba9b] hover:bg-[#c9ba9b] hover:text-black transition-all duration-500">
                  Try Now
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

{/* FEATURES */}
<section className="py-36 border-b border-white/10">
  <div className="container-main">

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2px]">

      {[
        {
          num: "01",
          icon: Layers3,
          title: "Feature List",
          text: "Add multiple feature items, set different icons or images for each feature and also give custom links if needed.",
        },
        {
          num: "02",
          icon: Monitor,
          title: "Key Features",
          text: "Choose your style from three different layouts and two unique icon background shapes.",
        },
        {
          num: "03",
          icon: Activity,
          title: "Connector Line",
          text: "Show a connector line between each icon, changes its color and style to fit your unique design.",
        },
      ].map((item, index) => {
        const Icon = item.icon;

        return (
          <Reveal key={index} delay={index * 0.1}>

            <div
              className="
                relative
                overflow-hidden
                border
                border-white/10
                bg-[#0e0e0c]
                p-10
                h-full
                min-h-[430px]
                flex
                flex-col
                transition-all
                duration-500
                hover:bg-[#131311]
                hover:border-white/20
                group
                cursor-pointer
              "
            >

              {/* Bottom Golden Animated Line */}
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

{/* Huge Background Number */}
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
  {item.num}
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
    mb-5
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
                  text-[22px]
                  leading-[1.45]
                  text-[#f3efe7]
                  mb-5
                  serif
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-[13px]
                  leading-[1.95]
                  text-white/45
                "
              >
                {item.text}
              </p>

            </div>

          </Reveal>
        );
      })}

    </div>
  </div>
</section>

<CTA />
<Newsletter />
<Footer />
</main>
);
}