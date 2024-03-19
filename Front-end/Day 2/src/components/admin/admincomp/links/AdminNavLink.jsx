import React from "react";
import "../../admin.css";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Academy",
    path: "/academy",
  },
  {
    title: "Courses",
    path: "/courses",
  },
  {
    title: "Students",
    path: "/students",
  },
];

const AdminNavLink = () => {
  return (
    <div className="navlinkss">
      {links.map((link) => (
        <Link to={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default AdminNavLink;
