import Reveal from "./Reveal";

const blogs = [
  {
    title: "The Role of AI in Fintech: Opportunities and Challenges",
    category: "Business",
    description:
      "AI is transforming modern ERP systems with automation, analytics, and intelligent decision making.",
    gradient:
      "from-[#1a1208] via-[#332512] to-[#1a1208]",
    large: true,
  },

  {
    title: "Investing in Fintech: The Right Move for Your Portfolio?",
    category: "Technology",
    description:
      "Businesses are adopting ERP platforms to improve operational efficiency and accelerate growth.",
    gradient:
      "from-[#0a1220] via-[#182240] to-[#0a1220]",
    large: false,
  },

  {
    title: "Benefits of ERP for Small Business Owners",
    category: "Growth",
    description:
      "Cloud ERP solutions help startups scale operations faster with better visibility and control.",
    gradient:
      "from-[#120a10] via-[#2a1228] to-[#120a10]",
    large: false,
  },
];

export default function Blog() {
  return (
    <section className="border-t border-white/10 py-36">
      <div className="container-main">
        
        {/* Header */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            justify-between
            gap-8
            mb-16
          "
        >
          
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

                Latest Insights
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
                Read Latest
                <br />
                <em className="italic text-[#c9ba9b]">
                  News
                </em>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <button
              className="
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#c9ba9b]
                border-b
                border-[#c9ba9b44]
                pb-1
                transition-all
                duration-300
                hover:text-white
                hover:border-white
                w-fit
              "
            >
              View All Posts →
            </button>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-[2px]">
          
          {blogs.map((blog, index) => (
            <Reveal
              key={index}
              delay={index * 0.08}
            >
              <div
                className="
                  group
                  border
                  border-white/10
                  bg-[#0e0e0c]
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:border-white/20
                "
              >
                
                {/* Image */}
                <div
                  className={`
                    aspect-[16/10]
                    overflow-hidden
                    bg-gradient-to-br
                    ${blog.gradient}
                  `}
                >
                  <div
                    className="
                      w-full
                      h-full
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Body */}
                <div className="p-8">
                  
                  {/* Date */}
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-white/50
                      mb-4
                    "
                  >
                    May 14, 2026 · {blog.category}
                  </p>

                  {/* Title */}
                  <h3
                    className={`
                      serif
                      leading-[1.35]
                      mb-5
                      ${
                        blog.large
                          ? "text-[28px]"
                          : "text-[22px]"
                      }
                    `}
                  >
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-[14px]
                      leading-[1.9]
                      text-white/50
                      mb-8
                    "
                  >
                    {blog.description}
                  </p>

                  {/* Read More */}
                  <button
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-[#c9ba9b]
                      flex
                      items-center
                      gap-2
                    "
                  >
                    Read More

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}