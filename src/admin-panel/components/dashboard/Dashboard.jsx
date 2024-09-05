import React from "react";
import AdminHeader from "./AdminHeader";
import SideMenu from "./SideMenu";

const Dashboard = () => {
  return (
    <div>
      <AdminHeader />
      {/* Off-canvas trigger button for smaller screens */}
      <div className="container-fluid">
        <button
          className="btn btn-primary d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sideMenuCanvas"
          aria-controls="sideMenuCanvas"
        >
          Open Menu
        </button>

        <div className="row">
          {/* Off-canvas side menu for mobile screens */}
          <div
            className="offcanvas offcanvas-start col-lg-2"
            id="sideMenuCanvas"
            aria-labelledby="sideMenuCanvasLabel"
            tabIndex="-1"
          >
            <div className="offcanvas-header">
              <h5 id="sideMenuCanvasLabel">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <SideMenu />
            </div>
          </div>

          {/* Main content area */}
          <div className="col-lg-10 col-md-9 col-sm-12 p-4">
            <h1>Dashboard Content</h1>
            <p>Welcome to the dashboard. You can add your main content here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
