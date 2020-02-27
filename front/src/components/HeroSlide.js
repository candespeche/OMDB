import React, { useState } from "react";
import img1 from "../assets/slides-01.jpg";
import img2 from "../assets/slides-02.jpg";
import img3 from "../assets/slides-03.jpg";

const HeroSlide = () => {
  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    "min-width": "1920px",
    "min-height": "100%"
  };

  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 " src={img2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 " src={img3} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSlide;
