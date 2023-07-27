"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={4000}
      transitionTime={600}
    >
      <div>
        <img
         className="w-full h-[350px] md:h-[550px] lg:h-[650px] xl:h-[800px] object-cover"
          src="/assets/playa1.jpg"
          alt="Wild Landscape"
        />
      </div>
      <div>
        <img
         className="w-full h-[350px] md:h-[550px] lg:h-[650px] xl:h-[800px] object-cover"
          src="/assets/playa2.jpg"
          alt="Camera"
        />
      </div>
      <div>
        <img
         className="w-full h-[350px] md:h-[550px] lg:h-[650px] xl:h-[800px] object-cover"
          src="/assets/playa3.jpg"
          alt="Exotic Fruits"
        />
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
