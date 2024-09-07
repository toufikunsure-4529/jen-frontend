import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";

function SideMenu() {
  const menu = [
    {
      name: "Dashboard",
      icon: "bi-speedometer2",
      slug: "/admin/dash",
    },
    {
      name: "Orders",
      icon: "bi-cart",
      slug: "",
    },
    {
      name: "Add Products",
      icon: "bi-box-seam",
      slug: "/admin/dash/addproduct",
    },
    {
      name: "Upload Thamble",
      icon: "bi-cloud-arrow-up-fill",
      slug: "",
    },
    {
      name: "Customers",
      icon: "bi-people",
      slug: "",
    },
    {
      name: "Settings",
      icon: "bi-gear",
      slug: "",
    },
    {
      name: "Logout",
      icon: "bi-box-arrow-right",
      slug: "",
    },
  ];

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
            {menu.map((menu, index) => (
              <li className="nav-item mb-3" key={index}>
                <Link to={menu.slug} className="nav-link px-3 py-2 active">
                  <span className="me-2">
                    <i className={`bi ${menu.icon}`}></i>
                  </span>
                  <span className="menu-text">{menu.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideMenu;
