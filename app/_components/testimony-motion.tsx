"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function TestimonyMotion({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const cards = container.current?.querySelectorAll<HTMLElement>(".testimony-card");
      if (!cards?.length) return;

      // Avoid CSS transform transitions competing with GSAP during the reveal.
      gsap.set(cards, { transition: "border-color .2s ease, box-shadow .2s ease" });
      gsap.fromTo(cards, { opacity: 0, y: 32 }, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.14,
        ease: "power2.out",
        clearProps: "opacity,transform,transition",
        scrollTrigger: {
          trigger: container.current,
          start: "top 88%",
          once: true,
        },
      });
    }, container);

    return () => media.revert();
  }, []);

  return (
    <div ref={container} className="testimony-grid flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  );
}
