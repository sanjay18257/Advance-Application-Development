import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./home.css";
import HomeComp from "./HomeComp";
import About from "../aboutus/About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeComp />
      <section className="footer-section" id="/footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
