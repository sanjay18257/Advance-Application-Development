import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img className="about-img" src="/src/assets/register1.png" alt="" />
      </div>

      <div className="content-container">
        <h1 className="heading">About us</h1>
        <p className="about-intro">
          We're thrilled to welcome you to our yoga courses admission portal,
          designed specifically for students in Coimbatore, Tamil Nadu, India.
          Whether you're a complete beginner or have some prior experience, we
          offer a variety of courses to suit your needs and you embark on a
          transformative yoga practice.
        </p>

        <p className="about-intro">
          We're thrilled to welcome you to our yoga courses admission portal,
          designed specifically for students in Coimbatore, Tamil Nadu, India.
          Whether you're a complete beginner or have some prior experience, we
          offer a variety of courses to suit your needs and you embark on a
          transformative yoga practice.
        </p>
      </div>
    </div>
  );
};

export default About;
