import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";

import {
  Calendar,
  MessageCircle,
  ArrowRight,
  Clock3,
} from "lucide-react";

const blogs = [
  {
    title: "The Role of AI in Fintech: Opportunities and Challenges",
    date: "May 14, 2023",
    comments: "No Comments",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    desc:
      "Her old collecting she considered discovered. So at parties he warrant oh staying. Square new horses and put better end.",
  },

  {
    title: "Investing in Fintech: Is it the Right Move for Your Portfolio?",
    date: "May 14, 2023",
    comments: "No Comments",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop",
    desc:
      "Her old collecting she considered discovered. So at parties he warrant oh staying. Square new horses and put better end.",
  },

  {
    title: "The Benefits of Using Fintech for Small Business Owners",
    date: "May 14, 2023",
    comments: "No Comments",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
    desc:
      "Her old collecting she considered discovered. So at parties he warrant oh staying. Square new horses and put better end.",
  },

  {
    title: "Navigating the Future of Fintech: Trends to Watch",
    date: "May 14, 2023",
    comments: "No Comments",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    desc:
      "Her old collecting she considered discovered. So at parties he warrant oh staying. Square new horses and put better end.",
  },

  {
    title: "The Rise of Fintech: How Technology is Changing Finance",
    date: "May 14, 2023",
    comments: "No Comments",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    desc:
      "Her old collecting she considered discovered. So at parties he warrant oh staying. Square new horses and put better end.",
  },

  {
    title: "5 Ways Fintech is Revolutionizing the Banking Industry",
    date: "May 14, 2023",
    comments: "No Comments",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop",
    desc:
      "Her old collecting she considered discovered. So at parties he warrant oh staying. Square new horses and put better end.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#080807] text-white overflow-hidden">
      <Cursor />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-[170px] pb-0 border-b border-white/10 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#6f4d23]/10 blur-[140px]" />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-size:40px_40px]
            [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          "
        />

        <div className="container-main relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
<div className="-translate-y-20">

              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-5 h-[1px] bg-[#c9ba9b]" />

                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#c9ba9b]">
                    Latest News
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1
                  className="
                    serif
                    text-[clamp(64px,7vw,118px)]
                    leading-[0.9]
                    tracking-[-0.04em]
                    max-w-[1100px]
                    text-[#f3efe7]
                  "
                >
                  Insights &
                  <br />

                  <em className="italic text-[#d2c0a0] font-normal">
                    Innovation
                  </em>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="cormorant text-[20px] italic leading-[1.8] text-white/40 max-w-[760px] mt-20">
                  Explore fintech trends, ERP innovations, AI transformation,
                  and modern business technology insights from Rajwada
                  Infotech.
                </p>
              </Reveal>

            </div>

            {/* RIGHT IMAGE */}
            <Reveal delay={0.3}>
              <div className="relative flex justify-center lg:justify-end">

                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[#c9ba9b]/10
                    blur-[120px]
                    rounded-full
                  "
                />

                {/* IMAGE CONTAINER */}
                <div
  className="
    relative
    w-[600px]
    h-[600px]
    translate-x-10
    -translate-y-12
  "
>

                  <Image
                    src="/images/blog.png"
                    alt="Blog"
                    fill
                    className="
                      object-contain
                      drop-shadow-[0_0_40px_rgba(201,186,155,0.15)]
                    "
                    priority
                  />

                </div>

              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-36 border-b border-white/10">
        <div className="container-main">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {blogs.map((blog, index) => (
              <Reveal key={index} delay={index * 0.06}>

                <article
                  className="
                    group
                    relative
                    overflow-hidden
                    border
                    border-white/10
                    bg-[#0e0e0c]
                    transition-all
                    duration-500
                    hover:border-white/20
                    hover:bg-[#131311]
                    h-full
                    flex
                    flex-col
                  "
                >

                  {/* Image */}
                  <div className="relative overflow-hidden h-[260px]">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  </div>

                  {/* Content */}
                  <div className="p-10 flex flex-col flex-1">

                    {/* Meta */}
                    <div className="flex items-center gap-6 text-[12px] uppercase tracking-[0.16em] text-white/40 mb-8 flex-wrap">

                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-[#c9ba9b]" />
                        <span>{blog.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MessageCircle
                          size={14}
                          className="text-[#c9ba9b]"
                        />
                        <span>{blog.comments}</span>
                      </div>

                    </div>

                    {/* Title */}
                    <h2 className="serif text-[30px] leading-[1.25] mb-6 transition-all duration-500 group-hover:text-[#d2c0a0] min-h-[150px]">
                      {blog.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[15px] leading-[2] text-white/45 flex-1">
                      {blog.desc}
                    </p>

                    {/* Read More */}
                    <button
                      className="
                        mt-10
                        flex
                        items-center
                        gap-4
                        text-[11px]
                        uppercase
                        tracking-[0.24em]
                        text-[#c9ba9b]
                        group/button
                      "
                    >
                      Read More

                      <div className="w-10 h-10 border border-[#c9ba9b33] flex items-center justify-center transition-all duration-500 group-hover/button:bg-[#c9ba9b] group-hover/button:text-black">
                        <ArrowRight size={16} />
                      </div>

                    </button>

                  </div>

                  {/* Bottom Hover Line */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[1px]
                      w-0
                      bg-[#c9ba9b]
                      transition-all
                      duration-700
                      group-hover:w-full
                    "
                  />

                </article>

              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-36 border-b border-white/10 overflow-hidden">
        <div className="container-main">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}
            <Reveal>
              <div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-6 h-[1px] bg-[#c9ba9b]" />

                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#c9ba9b]">
                    Featured Story
                  </p>
                </div>

                <h2 className="serif text-[clamp(40px,5vw,72px)] leading-[1.05] mb-10 max-w-[700px]">
                  The future of digital finance is powered by AI & ERP
                  innovation.
                </h2>

                <p className="text-white/45 leading-[2] text-[15px] max-w-[620px] mb-12">
                  Rajwada Infotech is building intelligent ERP systems and
                  scalable digital platforms that transform how businesses
                  operate, analyze data, and automate workflows.
                </p>

                <div className="flex items-center gap-10 flex-wrap">

                  <div className="border border-white/10 px-8 py-6 bg-[#0f0f0d] min-w-[180px]">
                    <p className="text-[42px] serif text-[#d2c0a0] mb-2">
                      120+
                    </p>

                    <p className="text-[12px] uppercase tracking-[0.24em] text-white/40">
                      Published Articles
                    </p>
                  </div>

                  <div className="border border-white/10 px-8 py-6 bg-[#0f0f0d] min-w-[180px]">
                    <p className="text-[42px] serif text-[#d2c0a0] mb-2">
                      24/7
                    </p>

                    <p className="text-[12px] uppercase tracking-[0.24em] text-white/40">
                      Innovation Research
                    </p>
                  </div>

                </div>

              </div>
            </Reveal>

            {/* Right */}
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden border border-white/10 bg-[#0f0f0d] p-8 md:p-10">

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
                  alt="featured"
                  className="w-full h-[520px] object-cover"
                />

                <div className="absolute bottom-10 left-10 right-10 bg-black/70 backdrop-blur-xl border border-white/10 p-8">

                  <div className="flex items-center gap-3 mb-4 text-[#c9ba9b] text-[12px] uppercase tracking-[0.24em]">
                    <Clock3 size={14} />
                    5 Min Read
                  </div>

                  <h3 className="serif text-[30px] leading-[1.3] mb-4">
                    AI-driven ERP systems are redefining enterprise operations.
                  </h3>

                  <p className="text-white/45 leading-[1.9] text-[14px]">
                    Discover how automation, predictive analytics, and smart
                    business platforms are shaping the future.
                  </p>

                </div>

              </div>
            </Reveal>

          </div>

        </div>
      </section>

      <CTA />
      <Newsletter />
      <Footer />

    </main>
  );
}