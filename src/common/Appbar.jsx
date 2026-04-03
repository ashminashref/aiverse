// import React, { useState } from 'react';
import {Search} from 'lucide-react';
import { Menu } from '@/UI/Menu';
function Appbar() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='border-zinc-800 border-b lg:px-8 bg-black sticky top-0 z-50'>
      <div className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
        
        {/* Left: Logo */}
          <h3 className='text-white font-bold text-xl tracking-tight'>Aiverse</h3>
           
          {/* Desktop Navigation */}
            {/* {['Product', 'Resources', 'Contact'].map((item) => (
              <li key={item} className='text-zinc-400 text-sm font-medium transition duration-200 hover:text-white cursor-pointer'>
                {item}
              </li>
            ))} */}

            
            

        {/* Right: Actions */}
        <div className='flex items-center gap-3 sm:gap-4'>
            <Menu/>
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
          {/* <button className='hidden lg:block  bg-white text-black rounded-full px-5 py-1.5 text-sm font-semibold transition duration-300 hover:bg-zinc-200 active:scale-95'>
            Start now
          </button> */}

          {/* Mobile Menu Toggle */}
      
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
     
    </nav>
  );
}

export default Appbar;