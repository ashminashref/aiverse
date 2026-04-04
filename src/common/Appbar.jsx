"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Search, ArrowUpRight, Command } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Menu } from '@/UI/Menu';
import { aiCategories } from '@/data/Categories';
import { useOutsideClick } from '@/hooks/use-outside-click';

function Appbar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  // Focus search on Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useOutsideClick(dropdownRef, () => setShowDropdown(false));

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.length > 0) {
      const filtered = aiCategories.filter(cat => 
        cat.title.toLowerCase().includes(val.toLowerCase())
      ).slice(0, 5);
      setResults(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  return (
    <nav className='border-zinc-800 border-b bg-black/80 backdrop-blur-md sticky top-0 z-[100]'>
      <div className='flex justify-between items-center px-6 py-3 max-w-7xl mx-auto'>
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
            <span className="text-black font-black text-xl">A</span>
          </div>
          <h3 className='text-white font-bold text-xl tracking-tight hidden md:block'>Aiverse</h3>
        </Link>

        {/* Center/Right: SaaS Search Bar */}
        <div className='flex items-center gap-6'>
          <div className="relative" ref={dropdownRef}>
            <div className="relative flex items-center">
              <Search 
                size={15} 
                className="absolute left-3 text-zinc-500 pointer-events-none" 
              />
              <input 
                ref={inputRef}
                type="text" 
                value={query}
                onChange={handleSearch}
                onFocus={() => query.length > 0 && setShowDropdown(true)}
                placeholder="Search categories..." 
                className="
                  bg-zinc-900/50 border border-zinc-800 
                  text-zinc-200 text-sm rounded-xl
                  pl-10 pr-12 py-2 w-48 md:w-80
                  focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-zinc-600
                  transition-all duration-200 placeholder:text-zinc-600
                "
              />
              {/* Keyboard Shortcut Hint */}
              <div className="absolute right-2 hidden md:flex items-center gap-0.5 px-1.5 py-1 rounded border border-zinc-700 bg-zinc-800 text-[10px] font-medium text-zinc-500 pointer-events-none uppercase">
                <Command size={10} /> K
              </div>
            </div>

            {/* Results Dropdown */}
            {showDropdown && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-zinc-950 border border-zinc-800 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,1)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="p-1.5">
                  <div className="px-3 py-2 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
                    Categories
                  </div>
                  {results.length > 0 ? (
                    results.map((result) => (
                      <Link
                        key={result.id}
                        to={result.path}
                        onClick={() => { setShowDropdown(false); setQuery(""); }}
                        className="flex items-center gap-3 p-2.5 hover:bg-white/5 rounded-lg transition-all group"
                      >
                        <div className={`p-2 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600`}>
                          <result.icon size={16} className="text-zinc-400 group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-zinc-200 text-sm font-medium">{result.title}</p>
                        </div>
                        <ArrowUpRight size={14} className="text-zinc-700 group-hover:text-zinc-400 transition-colors" />
                      </Link>
                    ))
                  ) : (
                    <div className="p-4 text-center text-zinc-500 text-xs">
                      No matches for "{query}"
                    </div>
                  )}
                </div>
                <div className="bg-zinc-900/50 p-2 border-t border-zinc-800 flex justify-end gap-3 text-[10px] text-zinc-500">
                  <span className="flex items-center gap-1"><Command size={10}/>K to focus</span>
                  <span className="flex items-center gap-1">↵ to select</span>
                </div>
              </div>
            )}
          </div>

          {/* <Menu /> */}
        </div>
      </div>
    </nav>
  );
}

export default Appbar;