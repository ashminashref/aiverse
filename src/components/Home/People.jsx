import React from 'react'
import { BadgeCheck } from 'lucide-react'

const testimonials = [
  { id: 1, name: "Richelsen", text: "Finally, a centralized hub for AI. Aiverse's categorization is a lifesaver when you're tired of scrolling through 100 different 'GPT-wrappers' to find actual utility.", isLarge: true },
  { id: 2, name: "Abin Krishna", text: "Looks sick 🤙" },
  { id: 3, name: "Ajay", text: "The search UX is buttery smooth. Found a niche LLM for coding in seconds. 🤙" },
  { id: 4, name: "Sneha", text: "You can't imagine how much time I spent to find the right Ai. Super useful!", isLarge: true },
  { id: 5, name: "Oamar", text: "Man this is awesome" },
  { id: 6, name: "Fidha Fathwima", text: "Wow, this is awesome! Most AI directories are cluttered, but Aiverse feels like the high-end boutique version. Love the 'New' tag interactions!", },
  { id: 7, name: "Ashmin",text: "I used to bookmark 50 different AI tabs. Now I just keep Aiverse open. The way they category 'Generative Video' vs 'Motion' is exactly how a pro's brain works.", },
  { id: 8, name: "Adarsh P", text: "Man, the glassmorphism on these cards is top-tier. Premium look for premium tools.", },
  { id: 9, name: "Habeebu",text: "So happy to see the 'Open Source' category getting some love here. Found 3 new models I'd never heard of. 🚀", },


]

function People() {
  return (
    <div className='p-6 md:p-10 bg-black min-h-screen'> 
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-white text-4xl font-bold md:text-center lg:mt-10 tracking-tight'>
          Loved by thousands of people
        </h1>
        <p className='text-zinc-400 mt-4 md:text-center max-w-2xl mx-auto'>
          Here's what thousands of people around the world say about Aiverse
        </p>

        {/* Masonry Layout Container */}
        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
                relative group break-inside-avoid mb-4 p-6 rounded-2xl 
                bg-zinc-900/40 border border-white/10 
                hover:border-white/20 transition-all duration-300
                flex flex-col
              "
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-linear-to-tr from-zinc-700 to-zinc-800 border border-white/10" />
                <div>
                  <h4 className="text-white text-sm font-bold flex items-center gap-1">
                    {item.name} <BadgeCheck size={14} className="text-blue-500 fill-blue-500/10" />
                  </h4>
                  <p className="text-zinc-500 text-xs">@{item.name.toLowerCase().replace(/\s/g, '')}</p>
                </div>
              </div>

              {/* Body */}
              <p className="text-zinc-300 text-sm leading-relaxed">
                {item.text}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
      <p className='text-zinc-600 lg:text-center text-sm lg:mt-20'>These are some of the selected feedback received on our end</p>
    </div>
  )
}

export default People