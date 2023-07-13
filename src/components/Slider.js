import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../assets/portfolio-img2.png";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={img2} alt="high" className="w-[200px] h-[200px]" />
      </div>
      <div>
        <img src={img2} alt="high" className="w-[200px] h-[200px]" />
      </div>
    </Slider>
  );
};

export default SliderComponent;
