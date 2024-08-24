import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navLink = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "About",
      slug: "/about",
    },

    {
      name: "Explore",
      slug: "/explore",
    },
    {
      name: "Contact",
      slug: "/contact",
    },
  ];

  const navigate = useNavigate();

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/logo.png"
              alt="Logo"
              width="80"
              height="70"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!--NOTES: ms-auto className used to margin end right side shift ul element --> */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              {navLink.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link active text-capitalize text-success"
                    aria-current="page"
                    to={link.slug}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button type="button" className="btn btn-outline-warning m-lg-2">
              Cart <i className="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
