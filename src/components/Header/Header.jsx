import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartOffcanvas from "../ItemCart/CartOffcanvas";
import LogoutMenu from "./LogoutMenu";
import TopHeader from "./TopHeader";

function Header() {
  const navLink = [
    { name: "Home", slug: "/" },
    { name: "About", slug: "/about" },
    { name: "Pages", slug: "/explore" },
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
      <div className="d-md-block d-none">
        <TopHeader />
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark py-1 shadow-sm"
        style={{ backgroundColor: "#12335A" }}
      >
        <div
          className="navbar-brand  me-auto rounded-end-pill"
          style={{
            backgroundColor: "#F11928",
            paddingRight: "20px",
            paddingLeft: "4px",
          }}
        >
          <a href="/">
            <h1 className="fw-bold fs-3 text-dark text-white">
              Jaman Enterprise
            </h1>
          </a>
        </div>

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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navLink.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link text-light text-uppercase mx-lg-2 fw-semibold"
                  aria-current="page"
                  to={link.slug}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-3 pe-lg-5 text-white">
            <i className="bi bi-search fs-5 icon"></i>
            <i
              className="bi bi-bag fs-5 icon"
              onClick={handleCartButtonClick}
            ></i>
            {authStatus ? (
              <LogoutMenu />
            ) : (
              <i
                className="bi bi-person fs-5 icon"
                onClick={() => navigate("/login")}
              ></i>
            )}
          </div>
          {/* previus navbar cart and login button */}
          {/* 
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-outline-light position-relative d-flex align-items-center mx-lg-2"
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
          </div> */}
        </div>
      </nav>

      <CartOffcanvas
        isOpen={isCartOffCanvasOpen}
        onClose={handleCloseOffcanvas}
      />
      {/* Custom Styles */}
      <style jsx>{`
        .icon {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .icon:hover {
          color: red;
        }
      `}</style>
    </header>
  );
}

export default Header;
