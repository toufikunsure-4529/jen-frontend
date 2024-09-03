import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authServiceAppwrite from "../../backend/appwrite/auth";

function SignupComponents() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      // Pass only the necessary fields to createAccount
      const accountData = await authServiceAppwrite.createAccount({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        mobileNo: formData.mobileNo,
      });

      if (accountData) {
        console.log("Form data:", formData);
        toast.success("Signup successful Please Login to Continue!");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during login.");
    } finally {
      setIsLoading(false);
    }

    // Clear input fields after form submission
    setFormData({
      name: "",
      mobileNo: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="container h-100 bg-body-tertiary d-flex justify-content-center align-items-center py-4">
      <div className="form-signin w-100 m-auto d-flex gap-5">
        <div className="w-50 d-none d-sm-flex">
          <div
            className="h-100 w-100 rounded bg-black bg-gradient d-flex justify-content-center align-items-center shadow-lg"
            // style={{ backgroundColor: "currentcolor" }}
          >
            <img
              src="/logo.png"
              alt="Jaman Enterprise"
              className="h-50 w-auto"
            />
          </div>
        </div>

        <div className="w-100">
          <form onSubmit={handleSubmit}>
            <img
              className="mb-4 d-none d-md-block"
              src="/logo.png"
              alt="Jaman Enterprise"
              width="72"
              height="57"
            />
            <h1 className="h5 mb-3 fw-medium">
              Sign Up to <span className="text-warning">Jaman Enterprise</span>
            </h1>
            <div className="form-floating">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                id="floatingName"
                placeholder="Enter your name"
                required
              />
              <label htmlFor="floatingName">Enter Name *</label>
            </div>

            <div className="form-floating">
              <input
                type="number"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className="form-control"
                id="floatingMobileNo"
                placeholder="Mobile Number"
                required
              />
              <label htmlFor="floatingMobileNo">Mobile No *</label>
            </div>

            <div className="form-floating">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
                id="floatingEmail"
                placeholder="name@example.com"
                autoComplete="off"
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-control"
                id="floatingConfirmPassword"
                placeholder="Confirm Password"
                required
              />
              <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                required
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Agree{" "}
                <span>
                  <Link to={""}>Term & Condition</Link>
                </span>
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
                "Sign Up"
              )}
            </button>

            <Link to="/login">Already have an account? Sign in</Link>
            <p className="mt-5 mb-3 text-body-secondary text-center">
              &copy; Jaman Enterprise 2024
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupComponents;
