import React from "react";
import { Link } from "react-router-dom";
import "./../footer.css";

const links = [
  {
    title: "logo",
    path: "/",
  },
  {
    title: "AboutUs",
    path: "/about",
  },
  {
    title: "support",
    path: "/support",
  },
  {
    title: "contact us",
    path: "/contact",
  },
  {
    title: "link4",
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
