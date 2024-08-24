import React from "react";
import { Link } from "react-router-dom";

function LoginComponets() {
  return (
    <>
      <div className="container h-100 bg-body-tertiary d-flex justify-content-center align-items-center py-4">
        <div className="form-signin w-100 m-auto d-flex gap-5">
          <div className="w-50 d-none d-sm-flex">
            <div
              className="h-100 w-100 rounded  d-flex justify-content-center align-items-center shadow-lg"
              style={{ backgroundColor: "currentcolor" }}
            >
              <img
                src="/logo.png"
                alt="Jaman Enterprise"
                className="h-50 w-auto"
              />
              {/* <p className="text-white">Jaman Enterprise</p> */}
            </div>
          </div>

          <div className="w-100">
            <form action="">
              <img
                className="mb-4 d-none d-md-block"
                src="/logo.png"
                alt="Jaman Enterprise"
                width="72"
                height="57"
              />
              <h1 className="h5 mb-3 fw-medium">
                Login to <span className="text-warning">Jaman Enterprise</span>
              </h1>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>

              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div className="form-check text-start my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="remember-me"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <button
                className="btn btn-primary w-100 py-2 text-uppercase"
                type="submit"
              >
                Sign in
              </button>
              <div className="d-flex justify-content-between mt-2">
                <Link to="#">Forgot password?</Link>
                <Link to="/signup">Don't have an account? Sign Up</Link>
              </div>
              <p className="mt-5 mb-3 text-body-secondary text-center">
                &copy; Jaman Enterprise 2024
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComponets;
