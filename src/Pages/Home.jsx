import React from "react";
import Footer from "../Components/Footer";
import Features from "../Components/Features";
import Hero from "../Components/Hero";
import Inspirations from "../Components/Inspirations";
import Navbar from "../Components/Navbar/Navbar";
import Products from "../Components/Products";
import Tips from "../Components/Tips";

function Home() {
  return (
    <div className="min-h-screen bg-[#faf2e6] flex flex-col">
      <Navbar />

      <div className="pt-24 px-4 sm:px-6 md:px-10 lg:px-16 flex-1">
        <section className="mb-20">
          <Hero />
        </section>

        <section className="mb-20">
          <Features />
        </section>

        <section className="mb-20">
          <Products />
        </section>

        <section className="mb-20">
          <Inspirations />
        </section>

        <section className="mb-20">
          <Tips />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
