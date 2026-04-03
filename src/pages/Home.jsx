import React from "react";
import Appbar from "../common/Appbar";
import Hero from "../components/Home/Hero";
import People from "../components/Home/People";
import Products from "../components/Home/Products";

function Home() {
  return (
    <div>
      <Appbar />
      <Hero />
      <People />
      <Products/>
    </div>
  );
}

export default Home;
