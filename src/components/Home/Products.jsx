import React from 'react';
// Import the icons from lucide-react
import { Palette, Terminal, Zap, Brain, Video, Search, ArrowUpRight } from 'lucide-react';

const aiCategories = [
  {
    id: 1,
    title: "Generative Art",
    count: "45+",
    description: "Create stunning visuals with state-of-the-art diffusion models.",
    accentColor: "from-purple-500 to-pink-500",
    icon: Palette,
    path: "/categories/art"
  },
  {
    id: 2,
    title: "Code Assistants",
    count: "12+",
    description: "Automate your workflow with AI-powered pair programming tools.",
    accentColor: "from-blue-500 to-cyan-500",
    icon: Terminal,
    path: "/categories/code"
  },
  {
    id: 3,
    title: "Productivity",
    count: "28+",
    description: "Supercharge your daily tasks with intelligent automation and LLMs.",
    accentColor: "from-amber-400 to-orange-600",
    icon: Zap,
    path: "/categories/productivity"
  },
  {
    id: 4,
    title: "Neural Search",
    count: "8+",
    description: "Deep semantic search capabilities for complex datasets.",
    accentColor: "from-emerald-400 to-teal-600",
    icon: Search,
    path: "/categories/search"
  }
];

const CategoryCard = ({ title, count, description, accentColor, icon: Icon, path }) => {
  return (
    <a 
      href={path}
      className="group block relative w-full bg-zinc-900/40 rounded-[2.5rem] p-2 border border-white/5 
                 transition-all duration-500 ease-out
                 hover:bg-zinc-900/60 hover:border-white/20 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
    >
      {/* 1. The Stage (Top Section) */}
      <div className="relative aspect-video rounded-4xl bg-black overflow-hidden border border-white/5">
        
        {/* Animated Background Stripes */}
        <div className="absolute inset-0 opacity-[0.1] bg-[repeating-linear-gradient(-45deg,transparent,transparent_12px,theme(colors.white)_12px,theme(colors.white)_13px)] group-hover:opacity-[0.2] transition-opacity duration-500"></div>
        
        {/* Visual Content Area */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-8 text-center">
          
          {/* Pulsing Glow behind icon */}
          <div className={`absolute w-24 h-24 blur-[60px] opacity-20 bg-gradient-to-r ${accentColor} group-hover:opacity-50 group-hover:scale-150 transition-all duration-700`}></div>
          
          {/* Category-Specific Icon */}
          <div className="relative mb-3 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
            <Icon size={44} className="text-white opacity-80 group-hover:opacity-100" strokeWidth={1.5} />
            <div className={`absolute inset-0 blur-2xl opacity-40 bg-gradient-to-r ${accentColor}`}></div>
          </div>

          <p className="relative z-10 text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-bold group-hover:text-zinc-300 transition-colors">
            
          </p>
        </div>

        {/* Top-Right "Arrow" Detail (Premium Touch) */}
        <div className="absolute top-4 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-white/50">
           <ArrowUpRight size={18} />
        </div>

        {/* Inner Glass Border */}
        <div className="absolute inset-0 rounded-4xl ring-1 ring-inset ring-white/10 group-hover:ring-white/25 transition-all pointer-events-none"></div>
      </div>

      {/* 2. Text Section */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white text-2xl font-bold tracking-tight group-hover:text-white transition-colors">
            {title}
          </h3>
          <span className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-500 text-[10px] font-bold border border-white/5 group-hover:border-zinc-700 group-hover:text-zinc-300 transition-all">
            {count}
          </span>
        </div>
        
        <p className="text-zinc-400 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
          {description}
        </p>
      </div>
    </a>
  );
};

function Products() {
  return (
    <div className="bg-black min-h-screen">
      {/* Decorative Top Divider */}
      <div className='bg-zinc-900/30 p-1 lg:mt-10 border-y border-white/5
        bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(255,255,255,0.02)_20px,rgba(255,255,255,0.02)_20px)]
      ' ></div>

      <div className='max-w-7xl mx-auto'>
        <div className="px-7 mt-16 mb-12">
          <h1 className='text-white lg:text-6xl text-4xl font-bold tracking-tighter leading-tight'>
            Everything AI, <br />
            <span className="bg-gradient-to-b from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
              Categorized for you.
            </span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg mt-6 font-light max-w-2xl leading-relaxed">
            Browse through 20+ specialized categories. From Generative Art to 
            Advanced Neural Search, we’ve mapped the entire intelligence landscape.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 p-7">
          {aiCategories.map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products;