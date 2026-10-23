"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { UsersRound, HomeIcon, CalendarDays } from "lucide-react";

const results = [
  { value: 5000, label: "Clientes atendidos", accessible: "Mais de 5 mil clientes atendidos", Icon: UsersRound },
  { value: 4000, label: "Imóveis vendidos", accessible: "Mais de 4 mil imóveis vendidos", Icon: HomeIcon },
];
const numberFormat = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 });

export default function CompanyResults() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const counters = section.current?.querySelectorAll<HTMLElement>("[data-result-count]");
      if (!counters?.length) return;
      const tweens: gsap.core.Tween[] = [];
      ScrollTrigger.create({
        trigger: section.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          counters.forEach((counter, index) => {
            const total = Number(counter.dataset.resultCount);
            const progress = { value: 0 };
            tweens.push(gsap.to(progress, {
              value: total,
              duration: 1.6,
              delay: index * 0.12,
              ease: "power2.out",
              onUpdate: () => { counter.textContent = numberFormat.format(Math.round(progress.value)); },
              onComplete: () => { counter.textContent = numberFormat.format(total); },
            }));
          });
        },
      });
      return () => {
        tweens.forEach(tween => tween.kill());
        counters.forEach(counter => { counter.textContent = numberFormat.format(Number(counter.dataset.resultCount)); });
      };
    }, section);
    return () => media.revert();
  }, []);

  return (
    <section ref={section} className="company-results hidden lg:block" aria-labelledby="company-results-title">
      <header className="company-results-heading">
        <p className="company-results-eyebrow">NOSSA TRAJETÓRIA EM NÚMEROS</p>
        <h2 id="company-results-title">Confiança que se transforma<br />em novas conquistas.</h2>
        <p>Cada atendimento, uma história. Cada imóvel, um novo começo.</p>
      </header>
      <div className="company-results-grid">
        {results.map(({ value, label, accessible, Icon }) => (
          <div className="company-result" key={label}>
            <Icon className="company-result-icon" size={25} strokeWidth={1.5} aria-hidden="true" />
            <p className="company-result-number" aria-hidden="true"><span className="company-result-plus">+</span><span data-result-count={value}>{numberFormat.format(value)}</span></p>
            <p className="company-result-label" aria-hidden="true">{label}</p>
            <span className="sr-only">{accessible}</span>
          </div>
        ))}
        <div className="company-result">
          <CalendarDays className="company-result-icon" size={25} strokeWidth={1.5} aria-hidden="true" />
          <p className="company-result-number"><span className="company-result-since">Desde</span>2019</p>
          <p className="company-result-label">Construindo novas histórias</p>
        </div>
      </div>
    </section>
  );
}
