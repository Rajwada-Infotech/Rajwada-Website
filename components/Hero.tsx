import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      className="
        relative
        h-screen
        overflow-hidden
        pt-[170px]
      "
    >
      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          bg-[size:100px_100px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          top-[-120px]
          right-[5%]
          w-[650px]
          h-[650px]
          rounded-full
          bg-[#6f4d23]/10
          blur-[140px]
        "
      />

      <div className="container-main relative z-10 h-full">
        
        {/* TOP BADGE */}
        <Reveal>
          <div className="flex items-center gap-4 mt-2 mb-8">
            
            {/* Golden Line */}
            <div className="w-5 h-[1px] bg-[#c9ba9b]" />

            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-3
                border
                border-white/10
                bg-white/[0.02]
                px-4
                py-2
                text-[8px]
                uppercase
                tracking-[0.16em]
                text-white/45
              "
            >
              <div
  className="
    w-[5px]
    h-[5px]
    rounded-full
    bg-green-400
    animate-pulse
    shadow-[0_0_12px_#4ade80]
  "
/>

              Trusted By 100+ Businesses · PAN India
            </div>
          </div>
        </Reveal>

        {/* HERO */}
        <div className="flex flex-col justify-between h-[calc(100%-80px)]">
          
          {/* Heading */}
          <div>
            <Reveal delay={0.1}>
              <h1
                className="
                  mt-2
                  serif
                  text-[clamp(72px,7vw,128px)]
                  leading-[0.9]
                  tracking-[-0.05em]
                  font-normal
                  max-w-[1100px]
                  text-[#f3efe7]
                "
              >
                Intelligent ERP
                <br />

                <span className="text-[#f3efe7]">
                  for{" "}
                </span>

                <em
                  className="
                    italic
                    text-[#d2c0a0]
                    opacity-90
                    font-normal
                  "
                >
                  modern
                </em>

                <br />

                enterprises
              </h1>
            </Reveal>
          </div>

          {/* Bottom Area */}
          <div
            className="
              grid
              lg:grid-cols-[1fr_auto]
              gap-10
              items-end
              pb-24
            "
          >
            
            {/* LEFT TEXT */}
            <Reveal delay={0.2}>
              <p
                className="
                  cormorant
                  text-[18px]
                  italic
                  leading-[1.8]
                  text-white/40
                  max-w-[540px]
                "
              >
                CivilierERP — construction-first business
                management with accounts, HR, inventory,
                billing, and real-time analytics.
              </p>
            </Reveal>

            {/* RIGHT */}
            <Reveal delay={0.25}>
              <div className="flex flex-col items-end">
                
                {/* STATS */}
                <div className="flex gap-12 mb-8">
                  
                  <div>
                    <h3 className="serif text-[52px] leading-none text-[#d6c4a1]">
                      100+
                    </h3>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.22em]
                        text-white/40
                        mt-2
                      "
                    >
                      Clients
                    </p>
                  </div>

                  <div>
                    <h3 className="serif text-[52px] leading-none text-[#d6c4a1]">
                      24/7
                    </h3>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.22em]
                        text-white/40
                        mt-2
                      "
                    >
                      Support
                    </p>
                  </div>

                  <div>
                    <h3 className="serif text-[52px] leading-none text-[#d6c4a1]">
                      PAN
                    </h3>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.22em]
                        text-white/40
                        mt-2
                        leading-[1.7]
                      "
                    >
                      India Service
                    </p>
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-10">
                  
                  <a
                    href="#features"
                    className="
                      border
                      border-white/10
                      px-10
                      py-5
                      text-[11px]
                      uppercase
                      tracking-[0.24em]
                      transition-all
                      duration-300
                      hover:border-[#c9ba9b]
                      hover:text-[#c9ba9b]
                    "
                  >
                    Explore Platform →
                  </a>

                  <a
                    href="#newsletter"
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.24em]
                      text-white/40
                      transition-all
                      duration-300
                      hover:text-white
                    "
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* SCROLL */}
        <div
          className="
            absolute
            right-0
            bottom-20
            hidden
            lg:flex
            flex-col
            items-center
            gap-4
          "
        >
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-white/35
            "
          >
            Scroll
          </span>

          <div className="relative w-[1px] h-14 bg-white/10 overflow-hidden">
            
            <div
              className="
                absolute
                top-[-100%]
                left-0
                w-full
                h-8
                bg-[#c9ba9b]
                animate-[scrollDown_2s_ease-in-out_infinite]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}