import React from "react";

function Preloader() {
  return (
    <div className="preloader-container d-flex justify-content-center align-items-center vh-100 flex-column">
      <div className="loading-dots mt-3">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <style jsx>{`
        /* Preloader.css */
        .preloader-container {
          background: linear-gradient(
            100deg,
            rgba(24, 50, 88, 1) 5%,
            rgba(24, 50, 88, 0.8436) 20%,
            rgba(110, 40, 69, 0.9136) 35%,
            rgba(237, 25, 41, 1) 91%
          );
          animation: fadeIn 1s ease-in-out;
        }

        /* Elegant loading dots */
        .loading-dots {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .dot {
          width: 15px;
          height: 15px;
          background-color: #fff;
          border-radius: 50%;
          margin: 0 5px;
          animation: bounce 1.5s infinite;
        }
        .preloader-text {
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          letter-spacing: 1px;
          color: #fff;
          animation: fadeInText 1.2s ease-in-out infinite alternate;
        }

        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Fade-in effect for the preloader container */
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Preloader;
