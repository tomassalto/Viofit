import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SlideAboutVioFit = () => {
  const slides = [
    {
      src: "https://sos.neowyze.tech/viofit/about-viofit-carousel/image_1.webp",
    },
    {
      src: "https://sos.neowyze.tech/viofit/about-viofit-carousel/image_2.webp",
    },
    {
      src: "https://sos.neowyze.tech/viofit/about-viofit-carousel/image_3.webp",
    },
    {
      src: "https://sos.neowyze.tech/viofit/about-viofit-carousel/image_4.webp",
    },
  ];

  return (
    <div className="mx-auto flex justify-center max-sm:w-[80%] max-sm:h-[80%] h-[80%] w-[80%] xs:w-[255px] xs:h-[256px] sm:size-[400px] xmd:max-h-[200px] xmd:w-[430px] xmd:max-lg:w-[350px] xmd:max-lg:h-[180px]">
      <Carousel
        autoPlay
        interval={3000}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        emulateTouch
        className="max-w-5xl"
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={slide.src}
              className="rounded-lg object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SlideAboutVioFit;
