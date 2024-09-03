import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authServiceAppwrite from "../../backend/appwrite/auth";
import { logout as storeLogout } from "../../store/AuthSlice";
import LogoutModal from "./LogoutModal";

function LogoutMenu() {
  const userInfo = useSelector((state) => state.auth.userData);
  const userFristName =
    userInfo && userInfo.name ? userInfo.name.split(" ")[0] : "Welcome";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      const sessionDeleted = await authServiceAppwrite.logoutSession();
      if (sessionDeleted) {
        dispatch(storeLogout());
        toast.success("Logout Successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during logout.");
    }
  };

  return (
    <div className="">
      <div className="dropdown-center">
        <button
          className="btn btn-success dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {userFristName}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Order
            </a>
          </li>
          <li>
            <button
              className="dropdown-item"
              data-bs-toggle="modal"
              data-bs-target="#logoutModal"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <LogoutModal onConfirmLogout={logout} />
    </div>
  );
}

export default LogoutMenu;
