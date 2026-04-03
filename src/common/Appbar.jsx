import React, { useState } from 'react';
import {Search} from 'lucide-react';
function Appbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='border-zinc-800 border-b lg:px-8 bg-black sticky top-0 z-50'>
      <div className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
        
        {/* Left: Logo */}
          <h3 className='text-white font-bold text-xl tracking-tight'>Aiverse</h3>
         
          {/* Desktop Navigation */}
          <ul className='hidden md:flex items-center gap-8'>
            {['Product', 'Resources', 'Contact'].map((item) => (
              <li key={item} className='text-zinc-400 text-sm font-medium transition duration-200 hover:text-white cursor-pointer'>
                {item}
              </li>
            ))}
          </ul>

        {/* Right: Actions */}
        <div className='flex items-center gap-3 sm:gap-4'>
          
         {/* Search Container */}
<div className="relative hidden sm:flex items-center group">
  {/* The Icon */}
  <Search 
    size={16} 
    className="absolute z-10 text-zinc-600 left-3  transition-colors duration-300" 
  />
  
  {/* The Input */}
  <input 
    type="text" 
    className="
      bg-white/5 backdrop-blur-md rounded-full text-white 
      placeholder-zinc-500 font-light text-sm border border-white/10 
      outline-none transition-all duration-300 
      pl-10 pr-4 py-1.5
      w-32 focus:w-48 lg:focus:w-64 
    
      focus:border-white/30 focus:bg-white/10 focus:ring-4 focus:ring-white/5
    "
    placeholder="Search" 
  />
</div>
          
          {/* CTA Button */}
          <button className='hidden lg:block  bg-white text-black rounded-full px-5 py-1.5 text-sm font-semibold transition duration-300 hover:bg-zinc-200 active:scale-95'>
            Start now
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className='text-zinc-400 hover:text-white md:hidden p-1 transition-colors'
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`
        absolute top-full left-0 w-full bg-black border-b border-zinc-800 transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} 
        md:hidden
      `}>
        <ul className='flex flex-col p-6 gap-5'>
          {/* Mobile Search */}
          <li className="sm:hidden">
             <input 
              type="text" 
              className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 outline-none'
              placeholder='Search Aiverse...' 
            />
          </li>
          <li className='text-zinc-300 text-lg font-medium border-b border-zinc-900 pb-2 hover:text-white transition-colors'>Product</li>
          <li className='text-zinc-300 text-lg font-medium border-b border-zinc-900 pb-2 hover:text-white transition-colors'>Resources</li>
          <li className='text-zinc-300 text-lg font-medium border-b border-zinc-900 pb-2 hover:text-white transition-colors'>Contact</li>
          <li className='pt-2'>
              <button className='w-full bg-white text-black rounded-xl px-4 py-3 text-base font-bold shadow-xl active:scale-[0.98] transition-transform'>
                Start now
              </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Appbar;