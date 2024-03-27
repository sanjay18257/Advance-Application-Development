import React from "react";
import Navlink from "./links/Navlink";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav_content">
        <div className="logo">YogaTren</div>
        <div>
          <Navlink />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
