import React from 'react'
import Aurora from "../../UI/Aurora";

function Hero() {
  return (
    /* 1. The Parent: 'relative' creates a coordinate system for the Aurora */
    <div className="relative min-h-[80vh] w-full flex items-center overflow-hidden bg-black"> 
      
      {/* 2. The Background: 'absolute' takes it out of the flow so text can sit on top */}
      <div className="absolute inset-0 z-0">
        <Aurora 
          colorStops={["#7cff67","#B19EEF","#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
        {/* Optional: Dark overlay to make text more readable */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
      </div>

      {/* 3. The Content: 'relative' and higher 'z-index' keeps it in front */}
      <div className="relative z-20 py-12 px-6 md:px-12 max-w-7xl mx-auto w-full"> 
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl max-w-xl ">
          Stop searching, <br /> Start Creating With The Right
          <span className="text-indigo-300"> AI.</span>
        </h1>
        
        <p className="text-zinc-400 mt-5 text-lg md:text-xl max-w-2xl">
          We’ve categorized and ranked the world’s best AI models so you don’t have to. 
          Filter by use case, price, and performance to find your perfect match in seconds.
        </p>

        <div className="flex flex-col mt-8 md:flex-row gap-4">
          <button className="bg-zinc-100 disb  ease-in-out duration-200 hover:bg-zinc-400 text-black px-6 py-2 rounded-4xl w-full md:w-auto transition-transform active:scale-95">
            Proudly Open Sourced
          </button>
          
          <button className="border border-zinc-700 hover:bg-zinc-800 text-white px-6 py-2 rounded-4xl w-full md:w-auto transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero