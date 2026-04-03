import React from "react";
import Appbar from "../common/Appbar";
import Hero from "../components/Home/Hero";
import People from "../components/Home/People";

function Home() {
  return (
    <div>
      <Appbar />
      <Hero />
      <People />
    </div>
  );
}

export default Home;
