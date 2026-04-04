import React from 'react';
import PrismaticBurst from '../UI/Prismatic';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Top Decorative Divider */}
      <div className='bg-zinc-900/30 p-1 lg:mt-10 border-y border-white/5 
        bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(255,255,255,0.02)_20px,rgba(255,255,255,0.02)_20px)]' 
      />

      <footer className="pt-20 px-6 overflow-hidden relative">
        {/* Background Animation Container */}
        <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
          <PrismaticBurst
            animationType="rotate3d"
            intensity={2}
            speed={0.35}
            distort={3.2}
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            rayCount={0}
            mixBlendMode="lighten"
            colors={['#ff007a', '#4d3dff', '#ffffff']}
            color0=""
            color1=""
            color2=""
          />
        </div>

        <div className="max-w-7xl mx-auto relative mb-4">
          {/* 1. Logo & Brand */}
          <div className="gap-2  group cursor-pointer">
<h1 className="relative z-10 text-white lg:text-9xl text-6xl font-bold mix-blend-overlay tracking-tighter transform-gpu select-none">
  Aiverse
</h1>        </div>

          {/* Copyright Section with &copy; */}
          <p className='relative z-10 text-white  text-xl font-bold mix-blend-overlay tracking-tighter transform-gpu select-none'>
            &copy; {currentYear} Aiverse. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;