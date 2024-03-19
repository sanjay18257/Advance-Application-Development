import React from "react";
import "../../admin/admin.css";
import AdminNavLink from "./links/AdminNavLink";
import AdminSidePanel from "./links/AdminSidePanel";

const AdminPanel = () => {
  return (
    <div className="pannel-container">
      <div className="adminlogo">admin</div>
      <div>
        <AdminNavLink />
        <AdminSidePanel />
      </div>
      <li className="logout">logout</li>
    </div>
  );
};

export default AdminPanel;
