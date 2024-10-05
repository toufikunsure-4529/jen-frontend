import React from "react";

function OurTeam() {
  const team = [
    {
      name: "John Doe",
      designation: "CEO & Founder",
      img: "/team.webp",
    },
    {
      name: "Jane Smith",
      designation: "CTO & Co-Founder",
      img: "/team.webp",
    },
    {
      name: "Alice Johnson",
      designation: "Project Manager",
      img: "/team.webp",
    },
  ];
  return (
    <div className="w-100 d-flex justify-content-center flex-lg-row flex-column">
      <div className="w-100">
        <img src="/team.webp" alt="Our Team" className=" img-fluid" />
      </div>
      <div
        style={{ backgroundColor: "#352E7B" }}
        className="w-100 h-auto text-light d-flex flex-column p-5"
      >
        <p>Our Team</p>
        <h4 className="display-6 fw-bold">Meet Our Team</h4>
        <p>
          We are a dedicated team committed to delivering exceptional products
          and innovative solutions across various platforms. Our collaborative
          approach fosters creativity and excellence, ensuring that we
          consistently meet and exceed client expectations.{" "}
        </p>
        <div className="row justify-content-center" data-aos="fade-up-left">
          {team.map((member, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div
                className="card text-light"
                style={{ backgroundColor: "#352E7B" }}
              >
                <div className="text-center">
                  <img
                    src={member.img}
                    className="img-fluid rounded-circle mt-3"
                    alt={member.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
