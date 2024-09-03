import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-black bg-gradient text-light pt-5 pb-4">
      <Container>
        <Row className="gy-4">
          <Col md={3} lg={2} className="text-center text-md-start">
            <img
              src="/logo.png"
              alt="Jaman Enterprise Logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "150px" }}
            />
            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-4">
              <a href="#" className="text-warning">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-warning">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-warning">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </Col>

          <Col md={3} lg={2}>
            <h5 className="text-warning text-uppercase mb-3 fs-6">Contact</h5>
            <address className="mb-0">
              <p className="mb-1">
                Hariharpara, Murshidabad, West Bengal, 742166
              </p>
              <a className="text-success d-block" href="tel:+918001074096">
                +91 8001074096
              </a>
              <a
                className="text-success d-block"
                href="mailto:toufiksk.ab3@gmail.com"
              >
                toufiksk.ab3@gmail.com
              </a>
            </address>
          </Col>

          <Col md={3} lg={2}>
            <h5 className="text-warning text-uppercase mb-3 fs-6">Features</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-success">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-success">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3} lg={2}>
            <h5 className="text-warning text-uppercase mb-3 fs-6">
              Legal & Support
            </h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-success">
                  Return Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-success">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-success">
                  FAQ
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3} lg={2}>
            <h5 className="text-warning text-uppercase mb-3 fs-6">Resources</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-success">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-success">
                  Help Center
                </a>
              </li>
            </ul>
          </Col>

          <Col md={12} lg={2} className="text-center text-md-start">
            <iframe
              title="Google Maps"
              width="100%"
              height="150"
              className="rounded-1 border-0"
              src="https://maps.google.com/maps?q=Jaman Enterprise&output=embed"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <p className="text-center mb-0">
          Designed and Developed by{" "}
          <a href="#" className="text-success fw-bold">
            Toufik
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
