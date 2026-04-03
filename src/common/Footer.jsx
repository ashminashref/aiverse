import React from 'react';
// import { Twitter, Linkedin } from 'lucide-react';
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* 1. Logo & Brand */}
        <div className="flex items-center gap-2 mb-8 group cursor-pointer">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <span className="text-black font-black text-xl">A</span>
          </div>
          <h2 className="text-white text-xl font-bold tracking-tighter">Aiverse</h2>
        </div>

        {/* 2. Navigation Links */}
        <nav className="mb-12">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {['Products', 'Studio', 'Clients', 'Pricing', 'Blog', 'Privacy', 'Terms'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-zinc-500 text-sm font-medium hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3. The Dotted Separator (Signature Style) */}
        <div className="w-full h-px bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-transparent opacity-30 mb-8" />
        
        {/* 4. Bottom Row: Copyright & Socials */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between lg:gap-6 px-2">
        

         

        </div>
      </div>
    </footer>
  );
}

export default Footer;