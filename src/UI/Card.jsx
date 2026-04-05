"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ArrowLeft, ExternalLink, X, Search } from "lucide-react";
import { allToolsData } from "@/data/ai_tools";
import Spline from '@splinetool/react-spline'; // Ensure this is installed

export function ExpandableCardDemo() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [active, setActive] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Search State
  const ref = useRef(null);
  const id = useId();

  const normalize = (str) => str?.toLowerCase().replace(/[^a-z0-9]/g, "");

  const categoryData = allToolsData.find((item) => {
    const jsonCategory = normalize(item.category);
    const urlCategory = normalize(slug || "");
    return jsonCategory.includes(urlCategory) || urlCategory.includes(jsonCategory);
  });

  const tools = categoryData ? categoryData.tools : [];

  // Filter tools based on search
  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-500/30">
      
      {/* 1. TOP NAVIGATION & HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-12">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={16} /> <span className="text-sm">Back</span>
        </button>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] uppercase tracking-widest text-zinc-400 mb-6">
              <span className="text-purple-400 animate-pulse">✦</span> New: {categoryData?.category} SDK
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
              {categoryData?.category}
            </h1>
            
            {/* Search Bar Implementation */}
            <div className="relative max-w-md mx-auto lg:mx-0 mb-8 group">
              <Search className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors" size={18} />
              <input 
                type="text"
                placeholder={`Search from ${tools.length} tools...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-zinc-500 rounded-2xl py-4 pl-12 pr-4 text-sm outline-hidden transition-all backdrop-blur-sm"
              />
            </div>
          </div>

          {/* 3D ELEMENT SECTION */}
          {/* <div className="w-full lg:w-[500px] h-[400px] relative">
            <div className="absolute inset-0 bg-purple-500/10 blur-[120px] rounded-full" />
            <div className="w-full h-full relative z-10">
              
<Spline scene="https://prod.spline.design/6Wq1Q7YAnWfEL7uH/scene.splinecode" />            </div>
          </div> */}
        </div>
      </div>

      {/* 2. RESPONSIVE GRID OF AI TOOLS */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                layoutId={`card-${tool.name}-${id}`}
                key={tool.id}
                onClick={() => setActive(tool)}
                className="group relative p-6 bg-zinc-900/40 border border-zinc-800 hover:border-zinc-500 rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden"
              >
                 <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors" />

                <div className="flex flex-col gap-4">
                  <motion.div layoutId={`image-${tool.name}-${id}`} className="w-12 h-12 rounded-2xl bg-white border border-zinc-800 p-2 overflow-hidden flex items-center justify-center">
                    <img src={tool.src} alt={tool.name} className="w-full h-full object-contain" />
                  </motion.div>
                  
                  <div>
                    <motion.h3 layoutId={`title-${tool.name}-${id}`} className="text-lg font-bold text-white tracking-tight">
                      {tool.name}
                    </motion.h3>
                    <p className="text-zinc-500 text-sm line-clamp-2 mt-1 leading-snug">
                      {tool.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                     <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-tighter">Verified Agent</span>
                     <div className="p-2 rounded-full bg-white/5 text-zinc-500 group-hover:text-white transition-colors">
                        <ArrowLeft className="rotate-180" size={14} />
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredTools.length === 0 && (
          <div className="py-20 text-center border border-dashed border-zinc-800 rounded-3xl">
            <p className="text-zinc-500">No tools match your search.</p>
          </div>
        )}
      </div>

      {/* 3. MODAL (Same as your original) */}
      <AnimatePresence>
        {active && (
            // ... Modal Content stays the same ...
            <div className="fixed inset-0 grid place-items-center z-100 p-4">
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-md"
                onClick={() => setActive(null)}
                />
                <motion.div
                layoutId={`card-${active.name}-${id}`}
                ref={ref}
                className="relative w-full max-w-137.5 bg-zinc-950 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl z-20"
                >
                <div className="p-10">
                    <div className="flex justify-between items-start mb-8">
                    <motion.div layoutId={`image-${active.name}-${id}`} className="w-20 h-20 rounded-3xl bg-white border border-zinc-800 p-4">
                        <img src={active.src} alt={active.name} className="w-full h-full object-contain" />
                    </motion.div>
                    <button onClick={() => setActive(null)} className="p-3 bg-zinc-900 rounded-full text-zinc-500 hover:text-white transition-colors">
                        <X size={20}/>
                    </button>
                    </div>
                    <motion.h3 layoutId={`title-${active.name}-${id}`} className="text-4xl font-bold text-white tracking-tighter mb-4">
                    {active.name}
                    </motion.h3>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                    {active.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                    <a href={active.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex-1 py-4 bg-white text-black text-center font-bold rounded-2xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                        Launch Tool <ExternalLink size={18} />
                    </a>
                    <button onClick={() => setActive(null)} className="flex-1 py-4 bg-zinc-900 text-white font-medium rounded-2xl border border-zinc-800 hover:bg-zinc-800 transition-colors">
                        Close
                    </button>
                    </div>
                </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </div>
  );
}