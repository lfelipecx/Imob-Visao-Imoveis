"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const media = gsap.matchMedia();
    media.add("(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      if (!wrapper.current || !content.current) return;
      const smoother = ScrollSmoother.create({
        wrapper: wrapper.current,
        content: content.current,
        smooth: 0.9,
        smoothTouch: false,
        effects: false,
      });
      const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => {
        cancelAnimationFrame(frame);
        smoother.kill();
      };
    });
    return () => media.revert();
  }, [pathname]);

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>{children}</div>
    </div>
  );
}
