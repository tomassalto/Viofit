import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div className="hidden xmd:flex xmd:fixed justify-center items-center fixed top-0 left-[10%] h-[88px] w-[80%] mx-auto mt-5 z-50 gap-3 lg:gap-16 xl:gap-20 mac:gap-[170px] hd:gap-[250px] p-2 fullhd:gap-96 backdrop-blur-sm bg-white/80 rounded-2xl">
        <div className="flex">
          <img
            src="/icons/viofit_logo.png"
            alt="viofit logo"
            loading="eager"
            className="xmd:w-[110px] lg:w-[150px] cursor-pointer max-w-[170px]"
          />
        </div>
        <div className="hidden xmd:flex w-full items-center justify-end text-white font-medium fullhd:justify-end">
          <ul className="flex text-center p-2 gap-3 lg:gap-5 xl:gap-8 mac:gap-[35px] items-center justify-center bg-none font-semibold leading-[29.709px] outline-none no-underline text-violet">
            <a href="#aboutus" className="flex text-sm xl:text-lg ">
              <li className="hover:rounded-lg hover:shadow-md p-1 lg:p-2 py-3">
                Sobre VioFit
              </li>
            </a>
            <a href="#ourservices" className="flex text-sm xl:text-lg ">
              <li className="hover:rounded-lg hover:shadow-md p-1 lg:p-2 py-3">
                Nuestros servicios
              </li>
            </a>
            <a href="#address" className="flex text-sm xl:text-lg ">
              <li className="hover:rounded-lg hover:shadow-md p-1 lg:p-2 py-3">
                Sedes y horarios
              </li>
            </a>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=543415491078"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white text-sm lg:text-md xl:text-[21px] w-[100px] p-2 lg:py-3 xl:py-4 lg:w-[130px] xl:w-[178px] xl:h-full text-center rounded-full bg-gradient-to-r from-[#47f6ab] via-[#47f6ab] to-[#60e3eb] font-semibold hover:bg-medium_gray  hover:text-medium_gray transition ease-linear duration-300 hover:shadow-md">
                  Contáctanos
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="xmd:hidden">
        <div className="flex w-full items-center justify-between p-4 gap-10 pt-4">
          <button className="xmd:hidden" onClick={() => setOpenMenu(true)}>
            <img
              src="/icons/menu.svg"
              alt="Menu Icon"
              loading="eager"
              className="h-[32px] w-[32px]"
            />
          </button>
          <button className="top-3 max-w-[130px]">
            <img src="/icons/viofit_logo.png" alt="header logo" />
          </button>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=543415491078"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/whatsapp_logo.png"
                alt="Icono de WhatsApp"
                loading="eager"
                className="w-[40px] h-[40px]"
              />
            </a>
          </div>
        </div>

        {openMenu && (
          <div
            className="fixed inset-0 bg-black opacity-40 z-30"
            onClick={() => setOpenMenu(false)}
          ></div>
        )}
        <div
          className={`fixed top-0 left-0 h-screen w-[224px] xs:w-[273px] xsm:w-[350px] sm:w-[448px] md:w-[538px] bg-white transition-transform duration-500 ease-in-out z-40 lg:hidden ${
            openMenu ? "transform-none" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col p-4 text-center text-[18px] font-semibold">
            <div className="flex justify-end ">
              <button onClick={() => setOpenMenu(false)}>
                <img
                  src="/icons/close_icon.svg"
                  alt="Close Icon"
                  loading="eager"
                />
              </button>
            </div>
            <a href="#aboutus" className="mt-10">
              <p className="text-violet">Sobre VioFit</p>
            </a>
            <a href="#ourservice" className="mt-10">
              <p className="text-violet">Nuestros servicios</p>
            </a>
            <a href="#address" className="mt-10">
              <p className="text-violet">Sedes y horarios</p>
            </a>
            <a
              style={{
                background:
                  "linear-gradient(68deg, #47f6ab 14.39%, #60e3eb 79.59%)",
              }}
              href="https://api.whatsapp.com/send?phone=543415491078"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[20px] mt-16 font-semibold rounded-[58px] p-[10px] flex justify-center w-[50%] mx-auto max-md:text-[16px] max-sm:w-[70%]"
            >
              Contáctanos
            </a>
            <a
              href="https://www.instagram.com/viofit.rosario/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/instagram.svg"
                className="w-fit mt-10 flex justify-center mx-auto"
                alt="instagram"
                loading="eager"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
