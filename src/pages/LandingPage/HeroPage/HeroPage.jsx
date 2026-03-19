import React from "react";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Slider = SliderImport.default || SliderImport;

const slides = [
  {
    image: "https://cdn-img.oraimo.com/2025/09/11/PC-oraimo-OBS-682-SALE.jpg",
  },
  {
    image: "https://cdn-img.oraimo.com/2025/07/11/oraimo-audio-3.jpg",
  },
  {
    image: "https://cdn-img.oraimo.com/2025/05/26/1920-820-PC.jpg",
  },
];

const HeroPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full h-screen">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="h-screen bg-fit md:bg-cover bg-center bg-no-repeat flex items-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <MdOutlineKeyboardArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <MdOutlineKeyboardArrowLeft />
  </div>
);

export default HeroPage;
