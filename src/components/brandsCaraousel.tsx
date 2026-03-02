"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const BrandCarousel = () => {
  return (
    <div className="w-full">
      <Carousel autoPlay showThumbs={false} showArrows={false}>
        <div className="relative">
          <img src="/heroimages/holi.png" alt="Image 1" className="w-full h-min " />
        </div>
        <div>
          <img src="/heroimages/hero2.png" alt="Image 2" className="w-full h-auto" />
        </div>
        <div>
          <img src="/heroimages/hero3.png" alt="Image 3" className="w-full h-auto" />
        </div>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;