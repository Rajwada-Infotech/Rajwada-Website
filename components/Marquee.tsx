const items = [
               "CivilierERP",
               "Accounts Management",
               "HR & Payroll",
               "Inventory Control",
               "Project Billing",
               "Real-Time Analytics",
               "100+ PAN India Clients",
               "Construction ERP",
             ];
             
             export default function Marquee() {
               return (
                 <section
                   className="
                     border-y
                     border-white/10
                     overflow-hidden
                     py-5
                   "
                 >
                   <div
                     className="
                       flex
                       w-max
                       animate-[marquee_22s_linear_infinite]
                     "
                   >
                     {[...items, ...items].map((item, index) => (
                       <div
                         key={index}
                         className="
                           flex
                           items-center
                           gap-7
                           px-7
                           whitespace-nowrap
                           text-[10px]
                           uppercase
                           tracking-[0.25em]
                           text-white/50
                         "
                       >
                         <span>{item}</span>
             
                         <div className="w-[3px] h-[3px] rounded-full bg-[#c9ba9b]" />
                       </div>
                     ))}
                   </div>
                 </section>
               );
             }