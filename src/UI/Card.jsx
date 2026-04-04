"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ArrowLeft, ExternalLink, X } from "lucide-react";
import { aiCategories } from "@/data/Categories";
import { allToolsData } from "@/data/ai_tools";

// Import your background component
import ColorBends from "./Colorsbend";
export function ExpandableCardDemo() {
  const { categoryId } = useParams();
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  const categoryUI = aiCategories.find(c => c.path.includes(categoryId));
  const categoryData = allToolsData.find(item => 
    item.category.toLowerCase().replace(/\s+/g, '-') === categoryId || 
    item.slug === categoryId
  );
  const tools = categoryData ? categoryData.tools : [];

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-white/20">
      
      {/* 1. FIXED BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent={false} // Set to false to ensure it covers the black body
          autoRotate={0}
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 p-6 md:p-20">
        
        {/* Navigation */}
        <Link 
          to={-1} 
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-12 group px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Explorer
        </Link>

        {/* Header Section */}
        {categoryUI && (
          <div className="mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${categoryUI.accentColor} mb-6 shadow-2xl`}
            >
              <categoryUI.icon size={32} className="text-white" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-md"
            >
              {categoryUI.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl max-w-2xl font-light leading-relaxed drop-shadow-sm"
            >
              {categoryUI.description}
            </motion.p>
          </div>
        )}

        {/* Grid of Tools with Glassmorphism Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.length > 0 ? (
            tools.map((tool, index) => (
              <motion.div
                layoutId={`card-${tool.name}-${id}`}
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActive(tool)}
                className="group p-8 flex flex-col justify-between 
                           bg-white/5 backdrop-blur-xl border border-white/10 
                           hover:bg-white/10 hover:border-white/20 
                           rounded-[2.5rem] cursor-pointer transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <motion.h3 
                      layoutId={`title-${tool.name}-${id}`}
                      className="text-white text-2xl font-bold tracking-tight"
                    >
                      {tool.name}
                    </motion.h3>
                    <div className="p-2 rounded-full bg-white/10 text-white/50 group-hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-2 group-hover:text-white/80 transition-colors">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white/5 backdrop-blur-md border border-dashed border-white/20 rounded-[3rem]">
              <p className="text-white/50 italic text-lg">Updating library...</p>
            </div>
          )}
        </div>
      </div>

      {/* 3. EXPANDED OVERLAY (MODAL) */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            {/* Darkened backdrop for modal focus */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="relative w-full max-w-[550px] bg-zinc-900/90 backdrop-blur-2xl border border-white/20 rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="p-10">
                <div className="flex justify-between items-start mb-8">
                  <motion.h3 
                    layoutId={`title-${active.name}-${id}`}
                    className="font-bold text-white text-4xl tracking-tighter"
                  >
                    {active.name}
                  </motion.h3>
                  <button 
                    onClick={() => setActive(null)} 
                    className="p-2 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <X size={24} />
                  </button>
                </div>

                <motion.p className="text-white/80 text-lg leading-relaxed mb-12 font-light">
                  {active.description}
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={active.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
                  >
                    Launch Tool <ExternalLink size={20} />
                  </a>
                  <button 
                    onClick={() => setActive(null)}
                    className="px-8 py-4 bg-white/10 text-white rounded-2xl font-medium border border-white/10 hover:bg-white/20 transition-all"
                  >
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