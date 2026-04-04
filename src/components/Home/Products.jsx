import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Crucial for SPAs
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { aiCategories } from '@/data/Categories';
const CategoryCard = ({ title, count, description, accentColor, icon: Icon, path }) => {
  return (
    <Link 
      to={path} 
      className="group block relative w-full bg-zinc-900/40 rounded-[2.5rem] p-2 border border-white/5 
                 transition-all duration-500 ease-out
                 hover:bg-zinc-900/60 hover:border-white/20 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
    >
      <div className="relative aspect-video rounded-4xl bg-black overflow-hidden border border-white/5">
        <div className="absolute inset-0 opacity-[0.1] bg-[repeating-linear-gradient(-45deg,transparent,transparent_12px,var(--color-white)_12px,var(--color-white)_13px)] group-hover:opacity-[0.2] transition-opacity duration-500"></div>
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-8 text-center">
          <div className={`absolute w-24 h-24 blur-[60px] opacity-20 bg-linear-to-r ${accentColor} group-hover:opacity-50 group-hover:scale-150 transition-all duration-700`}></div>
          <div className="relative mb-3 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
            <Icon size={44} className="text-white opacity-80 group-hover:opacity-100" strokeWidth={1.5} />
            <div className={`absolute inset-0 blur-2xl opacity-40 bg-linear-to-r ${accentColor}`}></div>
          </div>
        </div>
        <div className="absolute top-4 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-white/50">
           <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white text-2xl font-bold tracking-tight">{title}</h3>
          <span className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-500 text-[10px] font-bold border border-white/5">
            {count}
          </span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default function Products() {
  const [visibleCount, setVisibleCount] = useState(10);

  return (
    <div className="bg-black min-h-screen pb-20">
      <div className='max-w-7xl mx-auto px-7 mt-16'>
        <h1 className='text-white lg:text-6xl text-4xl font-bold tracking-tighter'>
          Everything AI, <br />
          <span className="bg-linear-to-b from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
            Categorized for you.
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {aiCategories.slice(0, visibleCount).map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>

        {visibleCount < aiCategories.length && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => setVisibleCount(prev => prev + 10)}
              className="flex items-center gap-2 px-8 py-4 text-white rounded-xl border border-white/10 hover:bg-zinc-900 transition-all"
            >
              Show More Categories <ChevronDown size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}