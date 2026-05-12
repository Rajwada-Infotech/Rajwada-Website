import Reveal from "./Reveal";

export default function Newsletter() {
  return (
    <section className="border-t border-white/10 py-28">
      <div className="container-main">
        
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

                Stay Updated
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="
                  serif
                  text-[clamp(40px,5vw,56px)]
                  leading-[1.08]
                  mt-6
                "
              >
                Join the
                <br />
                <em className="italic text-[#c9ba9b]">
                  Journey
                </em>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="
                  text-white/50
                  leading-[1.9]
                  mt-6
                  max-w-xl
                "
              >
                Subscribe to get ERP insights, product updates,
                automation strategies, and business growth ideas
                delivered directly to your inbox.
              </p>
            </Reveal>
          </div>

          {/* RIGHT */}
          <Reveal delay={0.2}>
            <div className="flex flex-col justify-center">
              
              {/* Form */}
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  overflow-hidden
                  border
                  border-white/10
                  bg-[#0e0e0c]
                  transition-all
                  duration-300
                  focus-within:border-white/20
                "
              >
                
                {/* Input */}
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="
                    flex-1
                    bg-transparent
                    outline-none
                    border-none
                    px-7
                    py-5
                    text-white
                    placeholder:text-white/40
                    text-[15px]
                  "
                />

                {/* Button */}
                <button
                  className="
                    bg-[#c9ba9b]
                    text-black
                    px-8
                    py-5
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    transition-all
                    duration-300
                    hover:bg-[#a89878]
                  "
                >
                  Subscribe
                </button>
              </div>

              {/* Note */}
              <p
                className="
                  text-[11px]
                  text-white/40
                  mt-4
                  tracking-[0.04em]
                "
              >
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}