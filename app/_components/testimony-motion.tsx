"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function TestimonyMotion({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = container.current?.querySelectorAll<HTMLElement>(".testimony-card");
      if (!cards?.length) return;

      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      // Avoid CSS transform transitions competing with GSAP during the reveal.
      gsap.set(cards, { transition: "border-color .2s ease, box-shadow .2s ease" });
      gsap.fromTo(cards, { opacity: 0, y: desktop ? 32 : 16 }, {
        opacity: 1,
        y: 0,
        duration: desktop ? 0.75 : 0.5,
        stagger: desktop ? 0.14 : 0.08,
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
