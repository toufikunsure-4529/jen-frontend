import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function SideMenu() {
  return (
    <div
      className="offcanvas offcanvas-start bg-primary text-white sidebar-nav"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-body p-0">
        <nav className="navbar-dark">
          <div className="d-flex justify-content-center align-items-center mt-5">
            <img
              src="/logo.png"
              alt="Jaman Enterprise"
              style={{ width: "70px" }}
            />
          </div>
          <ul className="navbar-nav pt-4">
            {/* Dashboard */}
            <li className="nav-item mb-3">
              <a href="#" className="nav-link px-3 py-2 active">
                <span className="me-2">
                  <i className="bi bi-speedometer2"></i>
                </span>
                <span className="menu-text">Dashboard</span>
              </a>
            </li>
            {/* Orders */}
            <li className="nav-item mb-3">
              <a href="#" className="nav-link px-3 py-2">
                <span className="me-2">
                  <i className="bi bi-cart"></i>
                </span>
                <span className="menu-text">Orders</span>
              </a>
            </li>
            {/* Products */}
            <li className="nav-item mb-3">
              <a href="#" className="nav-link px-3 py-2">
                <span className="me-2">
                  <i className="bi bi-box-seam"></i>
                </span>
                <span className="menu-text">Add Products</span>
              </a>
            </li>
            {/* Customers */}
            <li className="nav-item mb-3">
              <a href="#" className="nav-link px-3 py-2">
                <span className="me-2">
                  <i className="bi bi-people"></i>
                </span>
                <span className="menu-text">Customers</span>
              </a>
            </li>
            {/* Settings */}
            <li className="nav-item mb-3">
              <a href="#" className="nav-link px-3 py-2">
                <span className="me-2">
                  <i className="bi bi-gear"></i>
                </span>
                <span className="menu-text">Settings</span>
              </a>
            </li>
            {/* Logout */}
            <li className="nav-item mb-3">
              <a href="#" className="nav-link px-3 py-2">
                <span className="me-2">
                  <i className="bi bi-box-arrow-right"></i>
                </span>
                <span className="menu-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideMenu;
