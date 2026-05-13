import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import Newsletter from "@/components/Newsletter";

import {
  Briefcase,
  Users,
  Rocket,
  Shield,
  ArrowRight,
  Upload,
} from "lucide-react";

export default function CareerPage() {
  return (
    <main className="bg-[#080807] text-white overflow-hidden">
      <Cursor />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-[170px] pb-32 border-b border-white/10 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#6f4d23]/10 blur-[140px]" />

        <div className="container-main relative z-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-5 h-[1px] bg-[#c9ba9b]" />

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#c9ba9b]">
                Career
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
              Join Our
              <br />

              <em className="italic text-[#d2c0a0] font-normal">
                Creative
              </em>

              <br />
              Journey
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="cormorant text-[20px] italic leading-[1.8] text-white/40 max-w-[760px] mt-20">
              Build your future with Rajwada Infotech and work on innovative ERP
              solutions shaping businesses across India.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-36 border-b border-white/10">
        <div className="container-main">
          <Reveal>
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-6 h-[1px] bg-[#c9ba9b]" />

                <p className="text-[10px] uppercase tracking-[0.28em] text-[#c9ba9b]">
                  Why Join Us
                </p>
              </div>

              <h2 className="serif text-[clamp(40px,5vw,64px)] leading-[1.08] max-w-[800px]">
                A workplace built for innovation, collaboration & growth
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                icon: Rocket,
                title: "Growth Opportunities",
                desc:
                  "Work on real-world ERP systems and accelerate your professional growth.",
              },

              {
                number: "02",
                icon: Users,
                title: "Creative Team",
                desc:
                  "Collaborate with talented developers, designers, and innovators.",
              },

              {
                number: "03",
                icon: Shield,
                title: "Work Stability",
                desc:
                  "Build your long-term career with a trusted and growing company.",
              },

              {
                number: "04",
                icon: Briefcase,
                title: "Modern Workspace",
                desc:
                  "Experience a productive environment with modern tools and technologies.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={index} delay={index * 0.08}>
                  <div
                    className="
                      group
                      relative
                      overflow-hidden
                      border
                      border-white/10
                      bg-[#0e0e0c]
                      p-10
                      h-[520px]
                      flex
                      flex-col
                      transition-all
                      duration-500
                      hover:bg-[#131311]
                      hover:border-white/20
                    "
                  >
                    {/* Number */}
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
                      {item.number}
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center mt-4 mb-10">
                      <Icon size={18} className="text-[#c9ba9b]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-[22px] serif leading-[1.3] mb-6 min-h-[70px]">
                      {item.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-[14px] leading-[1.9] text-white/50 flex-1">
                      {item.desc}
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

      {/* JOB OPENINGS */}
      <section className="py-36 border-b border-white/10">
        <div className="container-main">
          <Reveal>
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-6 h-[1px] bg-[#c9ba9b]" />

                <p className="text-[10px] uppercase tracking-[0.28em] text-[#c9ba9b]">
                  Open Positions
                </p>
              </div>

              <h2 className="serif text-[clamp(40px,5vw,64px)] leading-[1.08]">
                Current Opportunities
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-[2px]">
            {[
              "Senior Software Engineer",
              "Frontend Developer",
              "Backend Developer",
              "UI/UX Designer",
            ].map((job, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <div
                  className="
                    group
                    border
                    border-white/10
                    bg-[#0e0e0c]
                    px-10
                    py-8
                    flex
                    items-center
                    justify-between
                    transition-all
                    duration-500
                    hover:bg-[#131311]
                    hover:border-white/20
                  "
                >
                  <div>
                    <h3 className="serif text-[28px] mb-3">{job}</h3>

                    <p className="text-white/45 text-[14px]">
                      Full Time • Kolkata • On Site
                    </p>
                  </div>

                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center group-hover:border-[#c9ba9b33] transition-all duration-500">
                    <ArrowRight
                      size={20}
                      className="text-[#c9ba9b]"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section className="py-36 border-b border-white/10">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Left */}
            <Reveal>
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-6 h-[1px] bg-[#c9ba9b]" />

                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#c9ba9b]">
                    Apply Now
                  </p>
                </div>

                <h2 className="serif text-[clamp(40px,5vw,64px)] leading-[1.08] mb-10">
                  Join The Journey
                </h2>

                <p className="text-white/50 leading-[2] text-[15px] max-w-[520px]">
                  We are always looking for passionate individuals who want to
                  create impactful digital products and ERP solutions.
                </p>

                <div className="mt-16 space-y-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#c9ba9b] mb-3">
                      Email
                    </p>

                    <p className="text-[18px] text-white/70">
                      info@rajwadainfotech.com
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#c9ba9b] mb-3">
                      Contact
                    </p>

                    <p className="text-[18px] text-white/70">
                      +91 9831406285
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Form */}
            <Reveal delay={0.1}>
              <div className="border border-white/10 bg-[#0e0e0c] p-10 md:p-14">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.24em] text-[#c9ba9b] mb-4">
                        Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your Name"
                        className="
                          w-full
                          bg-transparent
                          border-b
                          border-white/10
                          pb-4
                          outline-none
                          text-white/80
                          placeholder:text-white/30
                          focus:border-[#c9ba9b]
                          transition-all
                        "
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.24em] text-[#c9ba9b] mb-4">
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="Your Email"
                        className="
                          w-full
                          bg-transparent
                          border-b
                          border-white/10
                          pb-4
                          outline-none
                          text-white/80
                          placeholder:text-white/30
                          focus:border-[#c9ba9b]
                          transition-all
                        "
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.24em] text-[#c9ba9b] mb-4">
                      Apply For
                    </label>

                    <select
                      defaultValue="Senior Software Engineer"
                      className="
                        w-full
                        bg-transparent
                        border-b
                        border-white/10
                        pb-4
                        outline-none
                        text-white/80
                        focus:border-[#c9ba9b]
                        transition-all
                      "
                    >
                      <option
                        value="Senior Software Engineer"
                        className="bg-[#111]"
                      >
                        Senior Software Engineer
                      </option>

                      <option
                        value="Frontend Developer"
                        className="bg-[#111]"
                      >
                        Frontend Developer
                      </option>

                      <option
                        value="Backend Developer"
                        className="bg-[#111]"
                      >
                        Backend Developer
                      </option>

                      <option
                        value="UI/UX Designer"
                        className="bg-[#111]"
                      >
                        UI/UX Designer
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.24em] text-[#c9ba9b] mb-4">
                      Message
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Write your message..."
                      className="
                        w-full
                        bg-transparent
                        border-b
                        border-white/10
                        pb-4
                        outline-none
                        text-white/80
                        placeholder:text-white/30
                        focus:border-[#c9ba9b]
                        transition-all
                        resize-none
                      "
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.24em] text-[#c9ba9b] mb-5">
                      Updated CV
                    </label>

                    <label
                      className="
                        border
                        border-white/10
                        hover:border-[#c9ba9b33]
                        transition-all
                        duration-500
                        p-6
                        flex
                        items-center
                        justify-between
                        cursor-pointer
                      "
                    >
                      <div className="flex items-center gap-4">
                        <Upload
                          size={18}
                          className="text-[#c9ba9b]"
                        />

                        <span className="text-white/45 text-[14px]">
                          Upload your resume
                        </span>
                      </div>

                      <input
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>

                  <button
                    className="
                      border
                      border-[#c9ba9b33]
                      px-10
                      py-5
                      text-[10px]
                      uppercase
                      tracking-[0.24em]
                      text-[#c9ba9b]
                      hover:bg-[#c9ba9b]
                      hover:text-black
                      transition-all
                      duration-500
                    "
                  >
                    Submit Application
                  </button>
                </form>
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