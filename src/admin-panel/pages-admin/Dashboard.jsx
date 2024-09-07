import React from "react";

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3 mb-3">
          <div className="card text-bg-success text-center">
            <div className="card-body">
              <i
                className="bi bi-box-arrow-up mb-3"
                style={{ fontSize: "35px" }}
              ></i>
              <h5 className="card-title">Delivered Orders</h5>
              <p className="card-text">View details of delivered orders.</p>
              <a href="/delivered-orders" className="btn btn-outline-dark">
                View Details
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 mb-3">
          <div className="card text-bg-primary text-center">
            <div className="card-body">
              <i className="bi bi-box mb-3" style={{ fontSize: "35px" }}></i>
              <h5 className="card-title">Total Products</h5>
              <p className="card-text">View details of total products.</p>
              <a href="/total-products" className="btn btn-outline-dark">
                View Details
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 mb-3 ">
          <div className="card text-bg-warning text-center">
            <div className="card-body">
              <i
                className="bi bi-exclamation-triangle mb-3"
                style={{ fontSize: "35px" }}
              ></i>
              <h5 className="card-title">Pending Orders</h5>
              <p className="card-text">View details of pending orders.</p>
              <a href="/pending-orders" className="btn btn-outline-dark">
                View Details
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 mb-3">
          <div className="card text-bg-danger text-center">
            <div className="card-body">
              <i
                className="bi bi-x-circle mb-3"
                style={{ fontSize: "35px" }}
              ></i>
              <h5 className="card-title">Cancelled Order</h5>
              <p className="card-text">View details of cancelled orders.</p>
              <a href="/cancelled-orders" className="btn btn-outline-dark">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
