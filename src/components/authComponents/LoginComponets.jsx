import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authServiceAppwrite from "../../backend/appwrite/auth";
import { login as storeLogin } from "../../store/AuthSlice";

function LoginComponets() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const session = await authServiceAppwrite.createSessionLogin(userData);
      if (session) {
        const userDataInfo = await authServiceAppwrite.getCurrentUser();
        if (userDataInfo) {
          dispatch(storeLogin({ userDataInfo }));
        }
        toast.success("Login Successfull");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit}>
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
                  id="floatingEmail"
                  name="email"
                  value={userData.email}
                  onChange={handleOnChange}
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingEmail">Email address</label>
              </div>

              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  value={userData.password}
                  name="password"
                  onChange={handleOnChange}
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="form-check text-start my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="remember-me"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
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
