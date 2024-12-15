import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselViofit.css";

const CarouselViofit = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const arrowStyles = {
    position: "absolute",
    zIndex: 10,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };

  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ ...arrowStyles }}
        className="custom-arrow custom-arrow-left lg:!size-[61px] xmd:left-2 xmd:!top-40 lg:!top-[220px] mac:!top-[300px] left-4 mac:left-[-85px] hd:left-[-140px]"
      >
        <img src="/icons/arrow_left.svg" alt="Prev" />
      </button>
    );

  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ ...arrowStyles }}
        className="custom-arrow custom-arrow-right lg:!size-[61px] xmd:right-2 xmd:!top-40 lg:!top-[220px] mac:!top-[300px] right-4 mac:right-[-85px] hd:right-[-140px]"
      >
        <img src="/icons/arrow_right.svg" alt="Next" />
      </button>
    );

  return (
    <div
      className={`${
        isMobile ? "mt-2" : "xmd:mt-28 lg:mt-32"
      } rounded-lg mx-auto h-[90%] flex justify-center w-full mb-10 max-lg:w-[80%] max-xl:w-[90%] mac:px-20`}
    >
      <Carousel
        autoPlay
        showArrows={!isMobile}
        showThumbs={false}
        emulateTouch
        infiniteLoop
        className="custom-carousel w-[256px] xs:w-[300px] xmd:w-[640px] lg:w-[921px] mac:w-[1223px] rounded-lg"
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
      >
        <div>
          <img
            src={
              isMobile
                ? "https://sos.neowyze.tech/viofit/carousel/image_mb_1.webp"
                : "https://sos.neowyze.tech/viofit/carousel/image_1.webp"
            }
            alt="Carousel 1"
            className="rounded-lg"
          />
        </div>

        <div className="relative">
          <a
            href="https://www.instagram.com/viofit.rosario/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn_carousel_one rounded-lg ">
              <div className="btn_carousel_one_position flex items-center justify-center absolute top-48 right-7 w-[206px] py-2 border border-white/opacity-60 rounded-2xl backdrop-blur-lg gap-1 p-2 xs:top-[227px] xs:right-12 xsm:w-[245px] xsm:right-7 xsm:top-[220px] md:w-[280px] md:right-2 md:gap-1 xmd:p-2 xmd:right-44 xmd:top-[180px] xmd:!w-[290px] xmd:gap-2 lg:!w-[312px] lg:hover:bg-medium_gray lg:transition-all lg:duration-300 lg:gap-2 lg:py-5 lg:px-5 lg:right-[460px] lg:top-64 mac:top-[340px] mac:right-[700px] ">
                <img
                  src="/icons/vector.svg"
                  alt="Ear phones icon"
                  className="!h-7 !w-[22px]"
                />
                <p
                  style={{
                    color: "#3e3e3e",
                    background:
                      "linear-gradient(68deg, #47f6ab 14.39%, #60e3eb 79.59%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="text-[12px] xsm:text-[15px] md:text-base font-semibold"
                >
                  Te esperamos en{" "}
                  <span className="font-bold md:text-xl xmd:font-extrabold">
                    mitre 1380s
                  </span>
                </p>
              </div>
            </button>
          </a>

          <img
            src={
              isMobile
                ? "https://sos.neowyze.tech/viofit/carousel/image_mb_2.webp"
                : "https://sos.neowyze.tech/viofit/carousel/image_2.webp"
            }
            alt="Carousel 2"
            className="rounded-3xl object-cover"
          />
        </div>

        <div>
          <img
            src={
              isMobile
                ? "https://sos.neowyze.tech/viofit/carousel/image_mb_3.webp"
                : "https://sos.neowyze.tech/viofit/carousel/image_3.webp"
            }
            alt="Carousel 3"
            className="rounded-3xl object-cover"
          />
          <div className="carousel_content">
            <a
              href="https://api.whatsapp.com/send?phone=543415491078&text=Hola!%20Quiero%20m%C3%A1s%20info.%20sobre%20los%20entrenamientos%20de%20funcional%20adaptado"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn_carousel_one">
                <div className="btn_carousel_one_position flex items-center justify-center bg-medium_gray absolute top-56 right-10 w-[180px] border border-white/opacity-60 rounded-2xl backdrop-blur-md gap-2 p-2 xs:right-[60px] xs:top-[267px] xsm:w-[210px] xsm:right-11 xsm:top-[255px] md:w-[221px] md:right-10 xmd:right-52 xmd:w-[221px] xmd:top-52 lg:w-[253px] lg:hover:bg-medium_gray_2 lg:transition-all lg:duration-300  lg:py-6 lg:top-[300px] lg:right-[335px] mac:top-[420px] mac:right-[485px]">
                  <img
                    src="/icons/headset.svg"
                    alt="headset icon"
                    className="!size-7"
                  />
                  <p
                    style={{
                      color: "#3e3e3e",
                      background:
                        "linear-gradient(68deg, #47f6ab 14.39%, #60e3eb 79.59%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="text-[12px] xsm:text-[15px] md:text-base  font-semibold font-['SF Pro Display'] leading-[30px] lg:text-base"
                  >
                    Esperamos tu consulta
                  </p>
                </div>
              </button>
            </a>
          </div>
        </div>

        <div>
          <img
            src={
              isMobile
                ? "https://sos.neowyze.tech/viofit/carousel/image_mb_4.webp"
                : "https://sos.neowyze.tech/viofit/carousel/image_4.webp"
            }
            alt="Carousel 4"
            className="rounded-lg object-cover"
          />
          <div className="carousel_content">
            <a
              href="https://www.instagram.com/p/Cx6WLZ6Rgfl/?img_index=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn_carousel_one">
                <div className="btn_carousel_one_position flex items-center justify-center absolute top-[195px] right-4 w-[224px] border border-white/opacity-60 rounded-2xl backdrop-blur-lg gap-2 p-1 py-2 xs:right-10 xs:top-[230px] xsm:w-[267px] xsm:top-[220px] xsm:right-4 xmd:right-[175px] xmd:top-[180px] xmd:w-[300px] lg:py-6 lg:hover:bg-medium_gray lg:transition-all lg:duration-300  lg:w-[320px] lg:h-[82px] lg:right-[430px] lg:top-[250px] mac:top-[350px] mac:right-[660px]">
                  <img
                    src="/icons/instagram.svg"
                    alt="instagram icon"
                    className="!h-[25px] !w-6"
                  />
                  <p
                    style={{
                      color: "#3e3e3e",
                      background:
                        "linear-gradient(68deg, #47f6ab 14.39%, #60e3eb 79.59%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className=" text-[12px] xsm:text-[15px] xmd:text-base font-semibold lg:text-base mac:text-base"
                  >
                    Conocelos en nuestro{" "}
                    <span className="font-bold xmd:text-xl mac:text-[20px]">
                      Instagram
                    </span>
                  </p>
                </div>
              </button>
            </a>
          </div>
        </div>

        <div>
          <img
            src={
              isMobile
                ? "https://sos.neowyze.tech/viofit/carousel/image_mb_5.webp"
                : "https://sos.neowyze.tech/viofit/carousel/image_5.webp"
            }
            alt="Carousel 5"
            className="rounded-lg"
          />
          <div className="carousel_content">
            <a
              href="https://www.instagram.com/p/CtchzPYLujh/?img_index=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn_carousel_one">
                <div
                  style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                  className="btn_carousel_one_position bg-[#00000099] flex items-center justify-center absolute top-[200px] right-10 w-[181px] rounded-2xl xs:right-16 xs:top-[240px] xsm:w-[224px] xsm:right-10 xsm:top-[220px] sm:top-[220px] md:right-10 backdrop-blur-sm gap-2 p-1 py-2 xmd:right-52 xmd:top-[185px] lg:w-64 lg:py-6 lg:px-4 lg:top-[275px] lg:hover:bg-medium_gray lg:transition-all lg:duration-300 lg:right-[510px] mac:top-[380px] mac:right-[770px] fullhd:right-[863px]"
                >
                  <img
                    src="/icons/instagram.svg"
                    alt="Instagram icon"
                    className="!h-[25px] !w-6"
                  />
                  <p className="text-white text-[12px] xsm:text-base">
                    Agendá <span className="font-bold">tu próximo turno</span>
                  </p>
                </div>
              </button>
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselViofit;
