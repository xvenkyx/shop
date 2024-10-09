import React from "react";
import HomeCarousel from "../../Customer/Components/Carousel/HomeCarousel";
import HomeProductSection from "../../Customer/Components/Home/HomeProductSection";

const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
      <div>
        <HomeProductSection />
      </div>
    </div>
  );
};

export default HomePage;
