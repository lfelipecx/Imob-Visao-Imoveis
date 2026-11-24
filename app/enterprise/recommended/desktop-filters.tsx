"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { SlidersHorizontal, RotateCcw } from "lucide-react";
import gsap from "gsap";

type Item = { id: string; category: string; city: string; card: ReactNode };

export default function DesktopFilters({ items }: { items: Item[] }) {
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const grid = useRef<HTMLDivElement>(null);
  const options = (key: "category" | "city") =>
    Array.from(new Set(items.map(item => item[key]))).filter(Boolean).sort((a,b) => a.localeCompare(b, "pt-BR"));
  const filtered = items.filter(item => (!category || item.category === category) && (!city || item.city === city));
  const clear = () => { setCategory(""); setCity(""); };

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      if (grid.current?.children.length) {
        gsap.fromTo(grid.current.children, { opacity: 0, y: 12 }, {
          opacity: 1, y: 0, duration: 0.35, stagger: 0.045, clearProps: "opacity,transform",
        });
      }
    });
    return () => media.revert();
  }, [category, city, items]);

  return (
    <div className="grid grid-cols-[240px_minmax(0,1fr)] gap-6 items-start">
      <aside className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[14px] border border-[#303133] bg-[#1b1c1e] p-5">
        <h2 className="flex items-center gap-2 text-lg font-medium"><SlidersHorizontal size={19} /> Filtros</h2>
        {([
          { key: "category", title: "Categorias", value: category, change: setCategory },
          { key: "city", title: "Cidades", value: city, change: setCity },
        ] as const).map(group => (
          <fieldset key={group.key} className="mt-5 border-t border-[#303133] pt-4">
            <legend className="text-primary font-medium pr-2">{group.title}</legend>
            {["", ...options(group.key)].map(value => (
              <label key={value} className="flex cursor-pointer items-center gap-2 py-2 text-sm">
                <input type="radio" name={group.key} value={value} checked={group.value === value}
                  onChange={() => group.change(value)} className="accent-[#f0b478]" />
                {value || "Todas"}
              </label>
            ))}
          </fieldset>
        ))}
        <button type="button" onClick={clear} className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-primary py-2 text-sm text-primary hover:bg-primary/10">
          <RotateCcw size={15} /> Limpar filtros
        </button>
      </aside>
      <section className="min-w-0">
        <p aria-live="polite" className="mb-4 text-sm text-muted-foreground">{filtered.length} {filtered.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {category && <button type="button" onClick={() => setCategory("")} className="rounded-full border border-primary px-3 py-1 text-xs text-primary">{category} ×</button>}
          {city && <button type="button" onClick={() => setCity("")} className="rounded-full border border-primary px-3 py-1 text-xs text-primary">{city} ×</button>}
        </div>
        <div ref={grid} className="grid grid-cols-2 xl:grid-cols-3 gap-5 [&>div]:min-w-0 [&_a]:block [&_a]:h-full [&_.enterprise-card]:h-full [&_.enterprise-card>div:last-child>div:last-child]:flex-wrap">
          {filtered.map(item => <div key={item.id}>{item.card}</div>)}
        </div>
        {!filtered.length && <div className="rounded-xl border border-[#303133] p-10 text-center">
          <h3>Nenhum imóvel encontrado</h3>
          <button type="button" onClick={clear} className="mt-3 text-primary underline">Ver todos os imóveis</button>
        </div>}
      </section>
    </div>
  );
}
