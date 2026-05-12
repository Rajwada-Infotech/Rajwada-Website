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
    <main className="bg-[#080807] text-white overflow-hidden">
      <Cursor />
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
    </main>
  );
}