import React, { useState } from "react";
import { toast } from "react-toastify";

function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (
        loginInfo.email === "jamanenterprise2021@gmail.com" &&
        loginInfo.password === "1234"
      ) {
        toast.success("Login Successfully");
      } else {
        toast.error("Invalid Credentials to access the admin panel");
      }

      setIsLoading(false);
    }, 2000); // 2 second delay
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };
  return (
    <>
      <div className="bg-light bg-gradient vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 d-flex">
              {/* Left component */}
              <div className="d-none d-md-flex flex-column justify-content-center align-items-center bg-dark text-white p-4 rounded-start shadow-lg w-75">
                <h4 className="text-center mb-3">
                  Welcome to Jaman Enterprise Admin Panel
                </h4>
                <p className="text-center">
                  Manage your business with ease. Enter your credentials to
                  access the admin panel.
                </p>
              </div>

              {/* Login Form  */}
              <div className="w-100 bg-white p-4 rounded-end shadow-lg">
                <form className="" onSubmit={handleSubmit}>
                  <img
                    className="mb-4 mx-auto d-block d-none d-md-block"
                    src="/logo.png"
                    alt="Jaman Enterprise"
                    width="72"
                    height="57"
                  />
                  <h4 className="mb-3 text-center">Admin Login</h4>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="adminEmail"
                      name="email"
                      value={loginInfo.email}
                      onChange={handleOnChange}
                      placeholder="name@example.com"
                      aria-label="Email address"
                    />
                    <label htmlFor="adminEmail">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={loginInfo.password}
                      onChange={handleOnChange}
                      id="adminPassword"
                      placeholder="Password"
                      aria-label="Password"
                    />
                    <label htmlFor="adminPassword">Password</label>
                  </div>
                  <div className="form-check text-start mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="remember-me"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    className="btn btn-primary w-100 py-2 text-uppercase"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          aria-hidden="true"
                        ></span>
                        <span role="status" className="text-capitalize">
                          Please Wait...
                        </span>
                      </>
                    ) : (
                      "Sign in"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
