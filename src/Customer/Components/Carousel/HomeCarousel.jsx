import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCaroselData";

const items = homeCarouselData.map((item) => (
  <img
    className="cursor-pointer rounded-md"
    // onClick={() => navigate(item.path)}
    src={item.image}
    alt=""
    // onDragStart={handleDragStart}
    role="presentation"
  />
));

const HomeCarousel = () => (
  <AliceCarousel
    disableButtonsControls
    disableDotsControls
    items={items}
    autoPlay
    autoPlayInterval={2000}
    infinite
  />
);

export default HomeCarousel;
