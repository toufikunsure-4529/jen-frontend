import React from "react";

function Footer() {
  return (
    <div className="bg-black text-light py-5 fixed-bottom">
      <footer className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <img
              src="/logo.png"
              alt="Jaman Enterprise Logo"
              width="200"
              height="150"
              className="img-fluid"
            />
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="text-warning text-capitalize">Features</h5>
            <ul>
              <li>
                <a href="#" className="text-success">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-success">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="text-warning text-capitalize">Legal & Support</h5>
            <ul>
              <li>
                <a href="#" className="text-success">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-success">
                  Term & Condition
                </a>
              </li>
              <li>
                <a href="#" className="text-success">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="text-warning text-capitalize">Resources</h5>
            <ul>
              <li>
                <a href="#" className="text-success">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-success">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="py-3">
          <iframe
            title="Google Maps"
            width="100%"
            height="100%"
            className="rounded-1"
            src="https://maps.google.com/maps?q=Hariharpara&output=embed"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div> */}
      </footer>
    </div>
  );
}

export default Footer;
