import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartOffcanvas from "../ItemCart/CartOffcanvas";
import LogoutMenu from "./LogoutMenu";

function Header() {
  const navLink = [
    { name: "Home", slug: "/" },
    { name: "About", slug: "/about" },
    { name: "Explore", slug: "/explore" },
    { name: "Contact", slug: "/contact" },
  ];

  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isCartOffCanvasOpen, setIsCartOffcanvasOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.cartItem);

  const handleCartButtonClick = () => {
    setIsCartOffcanvasOpen(true);
  };

  const handleCloseOffcanvas = () => {
    setIsCartOffcanvasOpen(false);
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark py-1 shadow-sm "
        style={{ backgroundColor: "azure" }}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="/logo.png"
              alt="Logo"
              width="50"
              height="50"
              className="me-2"
            />
            <span className=" fw-medium fs-6 text-dark">Jaman Enterprise</span>
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
            {/* <form
              className="d-flex mx-auto my-2 my-lg-0"
              style={{ maxWidth: "600px", width: "100%" }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products..."
                aria-label="Search"
                style={{ padding: "0.75rem" }}
              />
              <button className="btn btn-warning fw-bold" type="submit">
                Search
              </button>
            </form> */}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navLink.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link text-dark text-uppercase mx-lg-2 fw-medium"
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
              className="btn btn-outline-dark position-relative d-flex align-items-center mx-lg-2"
              onClick={handleCartButtonClick}
              style={{ padding: "0.2rem 1rem" }}
            >
              <i className="bi bi-cart-fill fs-5"></i>
              <span className="ms-2 fw-semibold">Cart</span>
              <span className="badge bg-danger text-white position-absolute top-0 start-100 translate-middle rounded-pill">
                {cartCount.length}
              </span>
            </button>

            {authStatus ? (
              <LogoutMenu />
            ) : (
              <button
                type="button"
                className="btn btn-dark ms-lg-3 fw-semibold"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      <CartOffcanvas
        isOpen={isCartOffCanvasOpen}
        onClose={handleCloseOffcanvas}
      />
    </header>
  );
}

export default Header;
