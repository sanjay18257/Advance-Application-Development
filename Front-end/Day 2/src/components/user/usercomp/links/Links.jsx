import React from "react";
import { Link } from "react-router-dom";
import "../../user.css";

const links = [
  {
    title: "Enrolled courses",
    path: "/usercourse",
  },
  {
    title: "Academy",
    path: "/useracademy",
  },
];
const Links = () => {
  return (
    <div className="user-navlinks">
      {links.map((link) => (
        <Link to={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
