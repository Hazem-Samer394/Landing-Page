import React from "react";
import About from "../Components/About";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import HowItWorks from "../Components/HowItWorks";
import Navbar from "../Components/Navbar/Navbar";
import Products from "../Components/Products";
import Testimonials from "../Components/Testimonials";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
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
          <HowItWorks />
        </section>

        <section className="mb-20">
          <About />
        </section>

        <section className="mb-20">
          <Testimonials />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
