import React from "react";
import { Link } from "react-router-dom";
import "./../footer.css";

const links = [
  {
    title: "logo",
    path: "/",
  },
  {
    title: "Terms and conditions",
    path: "/about",
  },
  {
    title: "privacy policy",
    path: "/support",
  },
  {
    title: "Contact us",
    path: "/contact",
  },
  {
    title: "Help",
    path: "/",
  },
];

const FooterLink = () => {
  return (
    <div className="footer">
      {links.map((link) => (
        <Link to={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default FooterLink;
