import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../admin-panel/admin-components/AdminHeader";
import SideMenu from "../admin-panel/admin-components/SideMenu";
import "../admin-panel/custom-css/admin.css";

function AdminHomeLayout() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll smooth
    });
  };

  return (
    <>
      <AdminHeader />
      <SideMenu />
      <div className="main-content">
        <Outlet />
      </div>

      <div className="text-center bg-body-tertiary">
        <p> © 2024 Jaman Enterprise .</p>
        <p>
          Designed and developed by <a href="#">Toufik</a>
        </p>
      </div>
      <div className=" d-flex justify-content-end px-4 pb-2">
        <button className="btn btn-warning " onClick={scrollToTop}>
          <i className="bi bi-arrow-up"></i>
        </button>
      </div>
    </>
  );
}

export default AdminHomeLayout;
