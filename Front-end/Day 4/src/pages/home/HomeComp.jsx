import React from "react";
import "./home.css";
import Lottie from "react-lottie";
import lotti from "../../assets/h2.json";
import { Link } from "react-router-dom";
import About from "../aboutus/About";
import "../aboutus/about.css";
import Contact from "../contactus/Contact";
import FooterLink from "../../components/footer/links/FooterLink";
import Footer from "../../components/footer/Footer";

const HomeComp = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationSpeed: 0.5,
  };
  return (
    <div>
      <section className="home-section" id="/home">
        <div className="home_container">
          <div className="home-content">
            <h1 className="heading">Be kind to yourself,</h1>
            <h1 className="heading2"> Do yoga Everyday</h1>

            <ul className="ul_list">
              <li>Morning Stretching: Begin your day with some stretching</li>
              <li>Sun Salutations : Perform a few rounds of sun</li>
              <li>Mindful Breathing: Dedicate some time to practice</li>
            </ul>

            <div className="home-btn">
              <Link to="/login">
                <button className="log-btn">Login</button>
              </Link>

              <div>
                <Link to="/register">
                  <button className="sup-btn">Register</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="lottie">
            <Lottie
              className="lottie"
              options={defaultOptions}
              height={500}
              width={500}
            />
          </div>
        </div>
      </section>
      <section className="about-section" id="/about">
        <About />
      </section>
      <section className="contact-section" id="/contact">
        <Contact />
      </section>
      
    </div>
  );
};

export default HomeComp;
