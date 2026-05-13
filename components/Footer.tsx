import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 pt-24">
      <div className="container-main">
        
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-16 pb-20">
          
          {/* BRAND */}
          <Reveal>
            <div>
              <h2
                className="
                  serif
                  text-[26px]
                  tracking-[0.06em]
                  mb-5
                "
              >
                Rajwada Infotech
              </h2>

              <p
                className="
                  text-[14px]
                  leading-[1.9]
                  text-white/50
                  max-w-[280px]
                  mb-8
                "
              >
                Delivering smart and scalable ERP solutions for
                modern businesses across India.
              </p>

              {/* Socials */}
              <div className="flex gap-3">
                
                {["f", "x", "in"].map((social, index) => (
                  <div
                    key={index}
                    className="
                      w-10
                      h-10
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      text-sm
                      text-white/50
                      transition-all
                      duration-300
                      hover:border-[#c9ba9b]
                      hover:text-[#c9ba9b]
                    "
                  >
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ADDRESS */}
          <Reveal delay={0.1}>
            <div>
              
              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-[10px]
                  uppercase
                  tracking-[0.24em]
                  text-[#c9ba9b]
                  mb-8
                "
              >
                <div className="w-5 h-[1px] bg-[#c9ba9b]" />

                Address
              </div>

              <div className="space-y-5 text-[14px] text-white/50 leading-[1.8]">
                
                <p>+91 9831406285</p>

                <p>info@rajwadainfotech.com</p>

                <p>
                168, Netaji Subhash Chandra Bose Rd,
                  <br />
                  Narendrapur, Rajpur Sonarpur, West Bengal 700103
                </p>
              </div>
            </div>
          </Reveal>

          {/* COMPANY */}
          <Reveal delay={0.2}>
            <div>
              
              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-[10px]
                  uppercase
                  tracking-[0.24em]
                  text-[#c9ba9b]
                  mb-8
                "
              >
                <div className="w-5 h-[1px] bg-[#c9ba9b]" />

                Company
              </div>

              <ul className="space-y-4 text-[14px] text-white/50">
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  About Us
                </li>

                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Services
                </li>

                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Products
                </li>

                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Career
                </li>

                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Team
                </li>
              </ul>
            </div>
          </Reveal>

          {/* INFORMATION */}
          <Reveal delay={0.3}>
            <div>
              
              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-[10px]
                  uppercase
                  tracking-[0.24em]
                  text-[#c9ba9b]
                  mb-8
                "
              >
                <div className="w-5 h-[1px] bg-[#c9ba9b]" />

                Information
              </div>

              <ul className="space-y-4 text-[14px] text-white/50">
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Privacy Policy
                </li>

                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Terms of Service
                </li>

                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Pricing
                </li>

                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Disclaimer
                </li>

                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Support
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* BOTTOM */}
        <div
          className="
            border-t
            border-white/10
            py-8
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          
          <p className="text-[13px] text-white/40">
            © 2026 Rajwada Infotech. All rights reserved.
          </p>

          <p
            className="
              serif
              italic
              text-[14px]
              text-white/50
            "
          >
            Smart ERP for Smarter India
          </p>
        </div>
      </div>
    </footer>
  );
}