import React from "react";
import "../../admin.css";
import { Link } from "react-router-dom";

const links = [
  {
    title: "My Activity",
    path: "/academy",
  },
  {
    title: "Analytics",
    path: "/analytics",
  },
  {
    title: "Todo",
    path: "/todo",
  },
  {
    title: "Payments and Billings",
    path: "/courses",
  },
  {
    title: "Settings",
    path: "/students",
  },
  
];

const AdminSidePanel = () => {
  return (
    <div className="panel-link">
      {links.map((link) => (
        <Link to={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default AdminSidePanel;
