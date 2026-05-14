import About from "@/components/About";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Cursor from "@/components/Cursor";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import StatsStrip from "@/components/StatsStrip";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#080807]
        text-[#e9e5dc]
      "
    >
      <Cursor />

      {/* MAIN DARK BACKGROUND */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at top right,
              rgba(90,65,35,0.18),
              transparent 32%
            ),
            radial-gradient(
              circle at bottom left,
              rgba(30,30,60,0.16),
              transparent 32%
            ),
            linear-gradient(
              to bottom,
              #080807 0%,
              #0b0b09 40%,
              #080807 100%
            )
          `,
        }}
      />

      {/* HERO GLOW 1 */}
      <div
        className="
          fixed
          top-0
          right-[10%]
          w-[600px]
          h-[600px]
          pointer-events-none
          z-[1]
          opacity-100
        "
        style={{
          background:
            "radial-gradient(ellipse, rgba(90,65,35,.28) 0%, transparent 70%)",
        }}
      />

      {/* HERO GLOW 2 */}
      <div
        className="
          fixed
          bottom-[-100px]
          left-[-100px]
          w-[500px]
          h-[500px]
          pointer-events-none
          z-[1]
          opacity-100
        "
        style={{
          background:
            "radial-gradient(ellipse, rgba(30,30,60,.25) 0%, transparent 70%)",
        }}
      />

      {/* EXTRA DARK OVERLAY */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.12), rgba(0,0,0,0.28))",
        }}
      />

      {/* EXACT GRID */}
      <div
        className="
          fixed
          inset-0
          pointer-events-none
          z-[2]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at center, black 45%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 45%, transparent 100%)",
        }}
      />

      {/* FLOATING RIGHT IMAGE */}
      <div
        className="
          absolute
          right-[9%]
          top-[125px]
          z-[5]
          hidden
          lg:block
          animate-[float_6s_ease-in-out_infinite]
        "
      >
        {/* GOLDEN GLOW */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            blur-[90px]
            opacity-40
          "
          style={{
            background:
              "radial-gradient(circle, rgba(180,130,60,0.35) 0%, transparent 70%)",
          }}
        />

        {/* IMAGE */}
        <img
  src="/images/home2.png"
  alt="ERP Dashboard"
  className="
    relative
    w-[400px]
    rounded-[30px]
    border
    border-white/10
    shadow-[0_0_60px_rgba(180,130,60,0.18)]
    backdrop-blur-xl

    hover:scale-105
    transition
    duration-500
  "
/>
      </div>



      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <StatsStrip />
        <Features />
        <Logos />
        <WhyChoose />
        <Testimonials />
        <Blog />
        <CTA />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}