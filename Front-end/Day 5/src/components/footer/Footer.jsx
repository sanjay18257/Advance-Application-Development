import React from "react";
// import FooterLink from './links/FooterLink'
import "boxicons";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer_container">
        <div className="footer_content">
          <div className="footer-list1">
            <h1>Yogatren</h1>
            <p className="footer-l">
              We make online learning <br />
              engaging and compelling.
            </p>
            <div className="link-div">
            <i class="bx bxl-instagram"></i>
            <i class="bx bxl-facebook-circle"></i>
            <i class="bx bxl-linkedin"></i>
            <i class="bx bxl-google"></i>
            <i class='bx bxl-pinterest-alt' ></i>
            </div>
          </div>
          <div className="footer-list1">
            <p className="footercontent2">Our Mission</p>
            <a href="/contact">
              <p className="footercontent2">Contact us</p>
            </a>

            <p className="footercontent2">Help & FAQs</p>
            <p className="footercontent2">Topics</p>
            <p className="footercontent2">Videos</p>
          </div>
          <div className="footer-list1">
            <p className="footercontent2">Donate</p>
            <p className="footercontent2">Gift Cards</p>
            <p className="footercontent2">Outtakes</p>

            <p className="footercontent2">testimonials</p>

            <p className="footercontent2">Yoga styles</p>
          </div>
        </div>
        <p className="rights">@2024 YogaTren</p>
        <p className="prc">
          <a href="privacypolicy">Privacy Policy</a> |{" "}
          <a href="termsandconditions">Terms & Conditions</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
