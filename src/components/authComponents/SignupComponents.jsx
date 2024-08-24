import React from "react";
import { Link } from "react-router-dom";

function SignupComponents() {
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
                class="mb-4 d-none d-md-block"
                src="/logo.png"
                alt="Jaman Enterprise"
                width="72"
                height="57"
              />
              <h1 class="h3 mb-3 fw-normal">Sign up</h1>

              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Enter your name"
                />
                <label for="floatingInput">Enter Name *</label>
              </div>

              <div class="form-floating">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Mobile Number"
                />
                <label for="floatingInput">Mobile No *</label>
              </div>

              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check text-start my-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="email-agree"
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  I want to receive inspiration, marketing promotions and
                  updates via email.
                </label>
              </div>
              <button class="btn btn-primary w-100 py-2 text-uppercase" type="submit">
                Sign Up
              </button>
              <Link to="/login">Already have an account? Sign in</Link>
              <p class="mt-5 mb-3 text-body-secondary text-center">
                &copy; Jaman Enterprise 2024
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupComponents;
