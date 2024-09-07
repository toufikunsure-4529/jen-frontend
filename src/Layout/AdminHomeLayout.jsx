import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../admin-panel/admin-components/AdminHeader";
import SideMenu from "../admin-panel/admin-components/SideMenu";
import "../admin-panel/custom-css/admin.css";

function AdminHomeLayout() {
  return (
    <>
      <AdminHeader />
      <SideMenu />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
}

export default AdminHomeLayout;
