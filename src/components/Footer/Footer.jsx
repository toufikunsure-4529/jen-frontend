import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer
      className="text-light pt-5 pb-4"
      style={{
        backgroundImage: `url('./footer_bg.webp')`,
        backgroundColor: "#342D78",
        backgroundBlendMode: "overlay",
      }}
    >
      <Container>
        <div className="d-flex flex-column gap-3 mb-4 mt-4 text-center">
          <h1 className="fw-bold text-white">Jaman Enterprise</h1>

          <p className="text-white fs-6">
            <i className="bi bi-quote text-white me-2"></i>
            At Jaman Enterprise, we are passionate about delivering the best
            local restaurant foods right to your doorstep. We value your
            experience and are committed to providing top-notch customer
            service.
            <i className="bi bi-quote text-white ms-2"></i>
          </p>
        </div>

        {/* Footer Menu */}
        <Row className="mt-4">
          {[
            {
              title: "Information",
              links: [
                { label: "About Us", url: "/about" },
                { label: "Services", url: "/services" },
                { label: "Appointment", url: "/appointment" },
                { label: "Our Plans", url: "/plans" },
                { label: "Contact", url: "/contact" },
              ],
            },
            {
              title: "Products",
              links: [
                { label: "Home Connection", url: "/products/home" },
                { label: "Office Connection", url: "/products/office" },
                { label: "Mobile & Laptop", url: "/products/mobile-laptop" },
                { label: "Education", url: "/products/education" },
                { label: "Corporate", url: "/products/corporate" },
                { label: "Public", url: "/products/public" },
              ],
            },
            {
              title: "Quick Links",
              links: [
                { label: "Shop Page", url: "/shop" },
                { label: "FAQs", url: "/faqs" },
                { label: "Dashboard", url: "/dashboard" },
                { label: "Contact", url: "/contact" },
                { label: "Privacy Policy", url: "/privacy-policy" },
                { label: "Terms & Conditions", url: "/terms" },
              ],
            },
            {
              title: "Special Links",
              links: [
                { label: "Become a Partner", url: "/partner" },
                { label: "Our Customer", url: "/customer" },
                { label: "Disclaimer", url: "/disclaimer" },
                { label: "Support", url: "/support" },
              ],
            },
          ].map((menu, idx) => (
            <Col md={2} key={idx}>
              <h5 className="fw-semibold fs-6">{menu.title}</h5>
              <ul className="list-unstyled footer-menu">
                {menu.links.map((link, i) => (
                  <li key={i} className="footer-item">
                    <a
                      href={link.url}
                      className="text-decoration-none text-light footer-links"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}

          <Col md={4}>
            <h5 className="fw-semibold fs-6">Our Address</h5>
            <p className="footer-links">
              Near old Cinema House, Hariharpara, Murshidabad, WB, India, 742166{" "}
            </p>
            <p className="footer-links">Phone: +91 8001074096</p>
            <p className="footer-links"> info@example.com</p>
            <div className="d-flex gap-4">
              <i className="bi bi-facebook social-links"></i>
              <i className="bi bi-twitter social-links"></i>
              <i className="bi bi-instagram social-links"></i>{" "}
              <i className="bi bi-linkedin social-links"></i>
            </div>
          </Col>
        </Row>

        <hr className="border-white my-4" />

        <div className="d-flex justify-content-between align-items-center flex-md-row flex-column-reverse">
          <p>All Rights Reserved &copy; 2024 Jaman Enterprise </p>
          <img
            src="./footer_paymentgetway.PNG"
            alt="Payment Accepted Here"
            width={"300px"}
          />
        </div>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        .footer-menu {
          font-size: 0.9rem;
          line-height: 2;
        }

        .footer-item,
        .footer-links,
        .social-links {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .footer-links:hover {
          color: red !important;
        }

        .social-links:hover {
          color: red;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
