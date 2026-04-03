import React from "react";
import Appbar from "../common/Appbar";
import Hero from "../components/Home/Hero";
import People from "../components/Home/People";
import Products from "../components/Home/Products";
import Footer from "../common/Footer";

function Home() {
  return (
    <div>
      <Appbar />
      <Hero />
      <People />
      <Products/>
      <Footer/>
    </div>
  );
}

export default Home;
