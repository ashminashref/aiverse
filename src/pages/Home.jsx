import React from "react";
import Appbar from "../common/Appbar";
import Hero from "../components/Home/Hero";
import People from "../components/Home/People";
import Products from "../components/Home/Products";
import Footer from "../common/Footer";
import AnimatedList from "@/UI/Animatedlist";

const globalAiRankings = [
  {
    id: "chatgpt",
    rank: "#1",
    title: "ChatGPT",
    badge: "OpenAI",
    subtitle: "Still the most visited AI assistant globally across the AI chatbots and tools category.",
    meta: "Based on Similarweb AI category traffic snapshots, accessed April 7, 2026."
  },
  {
    id: "canva",
    rank: "#2",
    title: "Canva",
    badge: "Design AI",
    subtitle: "Strong mainstream adoption keeps it near the top thanks to embedded AI creation workflows.",
    meta: "Ranking source: Similarweb AI chatbots and tools category snapshot."
  },
  {
    id: "google-translate",
    rank: "#3",
    title: "Google Translate",
    badge: "Language AI",
    subtitle: "A globally used AI-powered translation product with massive recurring traffic volume.",
    meta: "Ranking source: Similarweb AI chatbots and tools category snapshot."
  },
  {
    id: "deepseek",
    rank: "#4",
    title: "DeepSeek",
    badge: "LLM Chat",
    subtitle: "One of the fastest-rising AI chat platforms in global web traffic rankings.",
    meta: "Ranking source: Similarweb AI chatbots and tools category snapshot."
  },
  {
    id: "character-ai",
    rank: "#5",
    title: "Character.AI",
    badge: "Companion AI",
    subtitle: "Continues to rank highly thanks to entertainment, roleplay, and creator-driven usage.",
    meta: "Ranking source: Similarweb AI chatbots and tools category snapshot."
  }
];

function Home() {
  return (
    <div>
      <Appbar />
      <Hero />
      <People />
      <Products/>
      <section className="bg-black py-20">
        <div className="px-7 md:px-10">
          <div className="mb-10 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Rankings
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tighter text-white md:text-6xl">
              Global ranking of AI tools
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
              A fast snapshot of the most visited AI products worldwide, shown here as a global leaderboard.
            </p>
          </div>
        </div>
        <AnimatedList items={globalAiRankings} />
      </section>
      <Footer/>
      {/* <List/> */}
      
    </div>
  );
}

export default Home;
