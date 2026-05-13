import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import Newsletter from "@/components/Newsletter";

import {
  Monitor,
  BellRing,
  Landmark,
  Layers3,
  Shield,
  Smartphone,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="bg-[#080807] text-white overflow-hidden">

      <Cursor />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-[170px] pb-32 border-b border-white/10 overflow-hidden">

        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#6f4d23]/10 blur-[140px]" />

        <div className="container-main relative z-10">

          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-5 h-[1px] bg-[#c9ba9b]" />

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#c9ba9b]">
                Services
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
              Transform Your
              <br />

              <em className="italic text-[#d2c0a0] font-normal">
                Business
              </em>

              <br />

              With Smart ERP
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="cormorant text-[20px] italic leading-[1.8] text-white/40 max-w-[760px] mt-22">
              Rajwada Infotech Services specializes in developing powerful ERP
              solutions that help businesses manage their operations efficiently.
            </p>
          </Reveal>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-36 border-b border-white/10">
        <div className="container-main">

          <Reveal>
            <div className="max-w-[900px]">

              <div className="flex items-center gap-4 mb-8">
                <div className="w-6 h-[1px] bg-[#c9ba9b]" />

                <p className="text-[10px] uppercase tracking-[0.28em] text-[#c9ba9b]">
                  Why Choose Us
                </p>
              </div>

              <h2 className="serif text-[clamp(40px,5vw,64px)] leading-[1.08] mb-10">
                Why Choose
                <br />
                Rajwada Infotech?
              </h2>

              <p className="text-white/50 leading-[2] text-[15px] max-w-[850px]">
                At Rajwada Infotech, we combine technology with business
                understanding to deliver powerful ERP solutions. Our team
                focuses on creating customized systems that simplify operations,
                improve efficiency, and support business growth.
              </p>

            </div>
          </Reveal>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-36 border-b border-white/10">
        <div className="container-main">

          <Reveal>
            <div className="mb-20">

              <div className="flex items-center gap-4 mb-8">
                <div className="w-6 h-[1px] bg-[#c9ba9b]" />

                <p className="text-[10px] uppercase tracking-[0.28em] text-[#c9ba9b]">
                  Platform Features
                </p>
              </div>

              <h2
                className="
                  serif
                  text-[clamp(40px,5vw,64px)]
                  leading-[1.08]
                "
              >
                Our Platform Features
              </h2>

            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2px]">

            {[
              {
                number: "01",
                icon: Monitor,
                title: "Multiple Devices",
                front:
                  "Access your ERP system seamlessly across desktop, tablet, and mobile devices with a fully responsive interface.",
                back:
                  "Manage operations anytime and anywhere with synchronized multi-device accessibility and real-time updates.",
              },

              {
                number: "02",
                icon: BellRing,
                title: "Auto Reminder",
                front:
                  "Automated reminders help teams stay updated on tasks, payments, meetings, approvals, and deadlines.",
                back:
                  "Reduce delays and improve workflow efficiency using intelligent notifications and scheduled reminders.",
              },

              {
                number: "03",
                icon: Landmark,
                title: "Connect To Bank",
                front:
                  "Integrate banking features directly into your ERP for simplified transactions and financial management.",
                back:
                  "Track payments, monitor transactions, and manage financial records securely from one dashboard.",
              },

              {
                number: "04",
                icon: Layers3,
                title: "Smart ERP Integration",
                front:
                  "Connect every department through one centralized ERP platform designed for modern business management.",
                back:
                  "Improve collaboration and streamline business operations with intelligent integrated workflows.",
              },

              {
                number: "05",
                icon: Shield,
                title: "Secure Data Protection",
                front:
                  "Enterprise-level security ensures your business data remains protected and accessible only to authorized users.",
                back:
                  "Advanced encryption and secure access controls help maintain privacy and operational reliability.",
              },

              {
                number: "06",
                icon: Smartphone,
                title: "Mobile Application",
                front:
                  "Stay connected with your business using our powerful mobile ERP application from anywhere in India.",
                back:
                  "Monitor reports, inventory, HR, and operations directly from your smartphone in real time.",
              },

            ].map((item, index) => {
              const Icon = item.icon;

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
                      min-h-[430px]
                      transition-all
                      duration-500
                      hover:border-white/20
                      hover:bg-[#131311]
                    "
                  >

                    {/* Front Content */}
                    <div
                      className="
                        absolute
                        inset-0
                        p-10
                        flex
                        flex-col
                        transition-all
                        duration-500
                        group-hover:opacity-0
                        group-hover:-translate-y-4
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
                          mb-10
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
                          leading-snug
                          mb-6
                          serif
                        "
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <div className="mt-auto">
                        <p
                          className="
                            text-[14px]
                            leading-[1.9]
                            text-white/50
                          "
                        >
                          {item.front}
                        </p>
                      </div>

                    </div>

                    {/* Back Content */}
                    <div
                      className="
                        absolute
                        inset-0
                        p-10
                        flex
                        flex-col
                        opacity-0
                        translate-y-4
                        transition-all
                        duration-500
                        group-hover:opacity-100
                        group-hover:translate-y-0
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
                        "
                      >
                        {item.number}
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
                          mb-10
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
                          leading-snug
                          mb-6
                          serif
                        "
                      >
                        {item.title}
                      </h3>

                      {/* Back Description */}
                      <div className="mt-auto">
                        <p
                          className="
                            text-[14px]
                            leading-[1.9]
                            text-white/50
                          "
                        >
                          {item.back}
                        </p>
                      </div>

                    </div>

                    {/* Bottom Golden Line */}
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

      {/* EXTRA FEATURES */}
      <section className="py-36 border-b border-white/10">
        <div className="container-main">

          <div className="grid lg:grid-cols-2 gap-[2px]">

            {[
              {
                icon: Layers3,
                title: "Extra Features",
              },
              {
                icon: Shield,
                title: "Premium Account",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={index} delay={index * 0.1}>

                  <div
                    className="
                      group
                      relative
                      overflow-hidden
                      border
                      border-white/10
                      bg-[#0e0e0c]
                      p-14
                      min-h-[420px]
                      hover:bg-[#131311]
                      transition-all
                      duration-500
                    "
                  >

                    {/* Bottom Golden Line */}
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

                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-10">
                      <Icon size={20} className="text-[#c9ba9b]" />
                    </div>

                    <h3 className="serif text-[32px] mb-8">
                      {item.title}
                    </h3>

                    <p className="text-white/45 leading-[2] text-[15px]">
                      Folly words widow one downs few age every seven. If miss
                      part by fact he park just shew. Discovered had get
                      considered projection.
                    </p>

                  </div>

                </Reveal>
              );
            })}

          </div>

        </div>
      </section>

      {/* MOBILE APP */}
      <section className="py-36 border-b border-white/10">
        <div className="container-main">

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            <Reveal>
              <div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-6 h-[1px] bg-[#c9ba9b]" />

                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#c9ba9b]">
                    Mobile App
                  </p>
                </div>

                <h2 className="serif text-[clamp(40px,5vw,64px)] leading-[1.08] mb-10">
                  Download Our
                  <br />
                  Application
                </h2>

                <p className="text-white/50 leading-[2] text-[15px] max-w-[600px] mb-12">
                  Access your ERP dashboard, reports, inventory, HR, and
                  business operations from anywhere with our mobile application.
                </p>

                <button className="border border-[#c9ba9b33] px-10 py-5 text-[10px] uppercase tracking-[0.24em] text-[#c9ba9b] hover:bg-[#c9ba9b] hover:text-black transition-all duration-500">
                  Download App
                </button>

              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-white/10 bg-[#0e0e0c] aspect-[5/4] flex items-center justify-center">

                <div className="w-28 h-28 rounded-full border border-[#c9ba9b33] flex items-center justify-center">
                  <Smartphone size={38} className="text-[#c9ba9b]" />
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