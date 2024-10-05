import React from "react";

function LogoutModal({ onConfirmLogout }) {
  return (
    <div
      className="modal fade"
      id="logoutModal"
      tabIndex="-1"
      aria-labelledby="logoutModalLabel"
      aria-hidden="true"
      style={{
        paddingTop: "12px",
        paddingBottom: "11px",
        background: `linear-gradient(100deg, rgba(24, 50, 88, 1) 5%, rgba(24, 50, 88, 0.8436) 20%, rgba(110, 40, 69, 0.9136) 35%, rgba(237, 25, 41, 1) 91%)`,
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-info bg-gradient">
            <h5 className="modal-title text-light" id="logoutModalLabel">
              Confirm Logout
            </h5>
            <button
              type="button"
              className="btn-close text-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-dark bg-light bg-gradient">
            Are you sure you want to logout?
          </div>
          <div className="modal-footer  bg-light bg-gradient">
            <button
              type="button"
              className="btn btn-dark"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger bg-gradient"
              data-bs-dismiss="modal"
              onClick={onConfirmLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
