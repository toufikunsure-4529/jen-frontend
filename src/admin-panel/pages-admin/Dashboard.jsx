import React from "react";

function Dashboard() {
  const cardContent = [
    {
      title: "Delivered Orders",
      description: "View details of delivered orders.",
      slug: "/delivered-orders",
      icon: "bi-box-arrow-up ",
      cardBg: "text-bg-success ",
    },
    {
      title: "Total Products",
      description: "View details of total products.",
      slug: "/total-products",
      icon: "bi-box ",
      cardBg: "text-bg-primary",
    },
    {
      title: "Pending Orders",
      description: "View details of pending orders.",
      slug: "/pending-orders",
      icon: "bi-exclamation-triangle ",
      cardBg: "text-bg-warning ",
    },
    {
      title: "Cancelled Order",
      description: "View details of cancelled orders.",
      slug: "/cancelled-orders",
      icon: "bi-x-circle",
      cardBg: "text-bg-danger ",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardContent.map((cardData, index) => (
          <div className="col-12 col-md-3 mb-3" key={index}>
            <div className={`card ${cardData.cardBg} text-center`}>
              <div className="card-body">
                <i
                  className={`bi ${cardData.icon} mb-3`}
                  style={{ fontSize: "35px" }}
                ></i>
                <h5 className="card-title">{cardData.title}</h5>
                <p className="card-text">{cardData.description}</p>
                <a href={cardData.slug} className="btn btn-outline-dark">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
