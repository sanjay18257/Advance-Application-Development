import React from "react";
import { Link } from "react-router-dom";
import "./../navbar.css";
const links = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "About us",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Courses",
    path: "/login",
  },
  {
    title: "Academys",
    path: "/login",
  },
];

const Navlink = () => {
  return (
    <div className="navlinks">
      {links.map((link) => (
        <Link to={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlink;
