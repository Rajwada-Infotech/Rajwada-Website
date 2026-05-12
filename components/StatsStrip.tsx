"use client";

import { useEffect, useRef, useState } from "react";

function Counter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let current = 0;

        const increment = Math.ceil(target / 40);

        const update = () => {
          current += increment;

          if (current >= target) {
            setCount(target);
            return;
          }

          setCount(current);

          requestAnimationFrame(update);
        };

        update();

        observer.disconnect();
      },
      {
        threshold: 0.4,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="
        serif
        text-[60px]
        leading-none
        text-[#c9ba9b]
      "
    >
      {count}
      {suffix}
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="border-y border-white/10">
      <div className="container-main px-0">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          
          {/* Item */}
          <div
            className="
              border-r
              border-white/10
              p-14
              transition-all
              duration-300
              hover:bg-[#0e0e0c]
            "
          >
            <Counter target={100} suffix="+" />

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/50
                mt-4
              "
            >
              Satisfied Clients
            </p>
          </div>

          {/* Item */}
          <div
            className="
              border-r
              border-white/10
              p-14
              transition-all
              duration-300
              hover:bg-[#0e0e0c]
            "
          >
            <Counter target={8} suffix="+" />

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/50
                mt-4
              "
            >
              Years Experience
            </p>
          </div>

          {/* Item */}
          <div
            className="
              border-r
              border-white/10
              p-14
              transition-all
              duration-300
              hover:bg-[#0e0e0c]
            "
          >
            <Counter target={6} suffix="+" />

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/50
                mt-4
              "
            >
              ERP Modules
            </p>
          </div>

          {/* Item */}
          <div
            className="
              p-14
              transition-all
              duration-300
              hover:bg-[#0e0e0c]
            "
          >
            <div
              className="
                serif
                text-[60px]
                leading-none
                text-[#c9ba9b]
              "
            >
              PAN
            </div>

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/50
                mt-4
              "
            >
              India Coverage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}