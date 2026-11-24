"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X, Share2 } from "lucide-react";
import gsap from "gsap";

export default function DesktopGallery({name,imageUrls}:{name:string;imageUrls:string[]}) {
  const [index,setIndex]=useState(0);
  const [expanded,setExpanded]=useState(false);
  const image=useRef<HTMLDivElement>(null);
  const dialog=useRef<HTMLDialogElement>(null);
  const count=imageUrls.length;
  const move=(delta:number)=>setIndex(i=>(i+delta+count)%count);
  useEffect(()=>{
    const media=gsap.matchMedia();
    media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)",()=>{
      if(image.current) gsap.fromTo(image.current,{opacity:0.55},{opacity:1,duration:0.35,clearProps:"opacity"});
    });
    return ()=>media.revert();
  },[index]);
  useEffect(()=>{
    const node=dialog.current;
    if(expanded && node && !node.open) node.showModal();
    else if(!expanded && node?.open) node.close();
  },[expanded]);
  if(!count) return <div className="rounded-xl bg-[#1b1c1e] p-12 text-center">Fotos indisponíveis</div>;
  return <div className="space-y-3">
    <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-[#1b1c1e]">
      <div ref={image} className="absolute inset-0"><Image src={imageUrls[index]} alt={name+" — foto "+(index+1)} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover"/></div>
      <button type="button" aria-label="Ampliar foto" onClick={()=>setExpanded(true)} className="absolute inset-0 cursor-zoom-in"/>
      {count>1 && <><button type="button" aria-label="Foto anterior" onClick={()=>move(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3"><ChevronLeft/></button><button type="button" aria-label="Próxima foto" onClick={()=>move(1)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3"><ChevronRight/></button></>}
      <button type="button" aria-label="Tela cheia" onClick={()=>setExpanded(true)} className="absolute bottom-3 right-3 rounded-lg bg-black/60 p-3"><Maximize2 size={20}/></button>
      <span className="absolute bottom-3 left-3 rounded-lg bg-black/60 px-3 py-2 text-sm">{index+1} / {count}</span>
    </div>
    <div className="flex gap-3 overflow-x-auto pb-2">{imageUrls.map((url,i)=><button key={i} type="button" aria-label={"Ver foto "+(i+1)} aria-pressed={index===i} onClick={()=>setIndex(i)} className={`relative aspect-[4/3] w-[23%] shrink-0 overflow-hidden rounded-lg border-2 ${index===i?"border-primary":"border-transparent"}`}><Image src={url} alt={name+" — miniatura "+(i+1)} fill sizes="180px" className="object-cover"/></button>)}</div>
    <button type="button" onClick={async()=>{try{if(navigator.share) await navigator.share({title:name,url:location.href});else await navigator.clipboard.writeText(location.href);}catch{}}} className="flex items-center gap-2 text-sm text-primary"><Share2 size={16}/> Compartilhar imóvel</button>
    <dialog ref={dialog} onClose={()=>setExpanded(false)} onKeyDown={e=>{if(e.key==="ArrowLeft")move(-1);if(e.key==="ArrowRight")move(1);}} className="m-auto w-[95vw] max-w-[1200px] rounded-xl bg-[#101112] text-white backdrop:bg-black/90 p-4">
      {expanded && <><div className="flex justify-between items-center mb-3"><span>{index+1} / {count}</span><button type="button" aria-label="Fechar galeria" onClick={()=>setExpanded(false)}><X/></button></div><div className="relative h-[75vh]"><Image src={imageUrls[index]} alt={name} fill sizes="95vw" className="object-contain"/><button type="button" aria-label="Foto anterior" onClick={()=>move(-1)} className="absolute left-2 top-1/2 bg-black/60 rounded-full p-3"><ChevronLeft/></button><button type="button" aria-label="Próxima foto" onClick={()=>move(1)} className="absolute right-2 top-1/2 bg-black/60 rounded-full p-3"><ChevronRight/></button></div></>}
    </dialog>
  </div>;
}
