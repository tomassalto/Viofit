/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_BcyZUC7G.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$Image } from '../chunks/_astro_assets_BbUSGejA.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="https://sos.neowyze.tech/viofit/gym-pass/viofit.webp"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/tomis/Desktop/viofit/src/layouts/Layout.astro", void 0);

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "hidden xmd:flex xmd:fixed justify-center items-center fixed top-0 left-[10%] h-[88px] w-[80%] mx-auto mt-5 z-50 gap-3 lg:gap-16 xl:gap-20 mac:gap-[170px] hd:gap-[250px] p-2 fullhd:gap-96 backdrop-blur-sm bg-white/80 rounded-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/icons/viofit_logo.png",
          alt: "viofit logo",
          loading: "eager",
          className: "xmd:w-[110px] lg:w-[150px] cursor-pointer max-w-[170px]"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "hidden xmd:flex w-full items-center justify-end text-white font-medium fullhd:justify-end", children: /* @__PURE__ */ jsxs("ul", { className: "flex text-center p-2 gap-3 lg:gap-5 xl:gap-8 mac:gap-[35px] items-center justify-center bg-none font-semibold leading-[29.709px] outline-none no-underline text-violet", children: [
        /* @__PURE__ */ jsx("a", { href: "#aboutus", className: "flex text-sm xl:text-lg ", children: /* @__PURE__ */ jsx("li", { className: "hover:rounded-lg hover:shadow-md p-1 lg:p-2 py-3", children: "Sobre VioFit" }) }),
        /* @__PURE__ */ jsx("a", { href: "#ourservices", className: "flex text-sm xl:text-lg ", children: /* @__PURE__ */ jsx("li", { className: "hover:rounded-lg hover:shadow-md p-1 lg:p-2 py-3", children: "Nuestros servicios" }) }),
        /* @__PURE__ */ jsx("a", { href: "#address", className: "flex text-sm xl:text-lg ", children: /* @__PURE__ */ jsx("li", { className: "hover:rounded-lg hover:shadow-md p-1 lg:p-2 py-3", children: "Sedes y horarios" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://api.whatsapp.com/send?phone=543415491078",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ jsx("button", { className: "text-white text-sm lg:text-md xl:text-[21px] w-[100px] p-2 lg:py-3 xl:py-4 lg:w-[130px] xl:w-[178px] xl:h-full text-center rounded-full bg-gradient-to-r from-[#47f6ab] via-[#47f6ab] to-[#60e3eb] font-semibold hover:bg-medium_gray  hover:text-medium_gray transition ease-linear duration-300 hover:shadow-md", children: "Contáctanos" })
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "xmd:hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between p-4 gap-10 pt-4", children: [
        /* @__PURE__ */ jsx("button", { className: "xmd:hidden", onClick: () => setOpenMenu(true), children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/icons/menu.svg",
            alt: "Menu Icon",
            loading: "eager",
            className: "h-[32px] w-[32px]"
          }
        ) }),
        /* @__PURE__ */ jsx("button", { className: "top-3 max-w-[130px]", children: /* @__PURE__ */ jsx("img", { src: "/icons/viofit_logo.png", alt: "header logo" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://api.whatsapp.com/send?phone=543415491078",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/icons/whatsapp_logo.png",
                alt: "Icono de WhatsApp",
                loading: "eager",
                className: "w-[40px] h-[40px]"
              }
            )
          }
        ) })
      ] }),
      openMenu && /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 bg-black opacity-40 z-30",
          onClick: () => setOpenMenu(false)
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `fixed top-0 left-0 h-screen w-[224px] xs:w-[273px] xsm:w-[350px] sm:w-[448px] md:w-[538px] bg-white transition-transform duration-500 ease-in-out z-40 lg:hidden ${openMenu ? "transform-none" : "-translate-x-full"}`,
          children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col p-4 text-center text-[18px] font-semibold", children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-end ", children: /* @__PURE__ */ jsx("button", { onClick: () => setOpenMenu(false), children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/icons/close_icon.svg",
                alt: "Close Icon",
                loading: "eager"
              }
            ) }) }),
            /* @__PURE__ */ jsx("a", { href: "#aboutus", className: "mt-10", children: /* @__PURE__ */ jsx("p", { className: "text-violet", children: "Sobre VioFit" }) }),
            /* @__PURE__ */ jsx("a", { href: "#ourservice", className: "mt-10", children: /* @__PURE__ */ jsx("p", { className: "text-violet", children: "Nuestros servicios" }) }),
            /* @__PURE__ */ jsx("a", { href: "#address", className: "mt-10", children: /* @__PURE__ */ jsx("p", { className: "text-violet", children: "Sedes y horarios" }) }),
            /* @__PURE__ */ jsx(
              "a",
              {
                style: {
                  background: "linear-gradient(68deg, #47f6ab 14.39%, #60e3eb 79.59%)"
                },
                href: "https://api.whatsapp.com/send?phone=543415491078",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-white text-[20px] mt-16 font-semibold rounded-[58px] p-[10px] flex justify-center w-[50%] mx-auto max-md:text-[16px] max-sm:w-[70%]",
                children: "Contáctanos"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.instagram.com/viofit.rosario/",
                target: "_blank",
                rel: "noopener noreferrer",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/icons/instagram.svg",
                    className: "w-fit mt-10 flex justify-center mx-auto",
                    alt: "instagram",
                    loading: "eager"
                  }
                )
              }
            )
          ] })
        }
      )
    ] })
  ] });
};

const $$AboutVioFit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <div class="m-4 rounded-lg xmd:mb-10 xmd:m-0 bg-medium_gray xmd:rounded-l-none xmd:rounded-r-lg text-white xmd:h-auto xmd:w-[60%] xmd:grid xmd:grid-cols-12 mac:w-[853px] hd:w-[911px] fullhd:w-[1141px]" id="aboutus"> <div class="xmd:col-span-2"></div> <div class="xmd:col-span-10 xmd:my-auto"> <p${addAttribute({
    background: "linear-gradient(68deg, #47f6ab 14.39%, #60e3eb 79.59%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }, "style")} class="font-bold text-[32px] aboutVioFitTitleMobile text-center pt-[48px] xmd:text-5xl xmd:mb-[25px] xmd:text-left">
Sobre Viofit
</p> <div class="xmd:hidden p-[16px]"> <p class="text-[16px] mt-5">
La idea surge de armar una institución donde podamos brindar el
          servicio al cual nos dedicamos dentro de la rehabilitación y el
          entrenamiento.
</p> <p class="text-[16px] mt-5">
Hay mucha gente que dejó el gimnasio convencional porque no tenía un
          profe atrás que lo guiara. Ellos no tienen por qué saber cómo entrenar
          o qué movimientos realizar.
</p> <p class="text-[18px] font-bold mt-5 mb-8">Nosotros estamos para eso</p> </div> <div class="hidden xmd:inline"> <p class="text-white text-[18px] max-w-[500px] mb-7 max-xl:max-w-[400px] max-lg:max-w-[300px]">
Éramos tres estudiantes que habían empezado a trabajar en la clínica
          de un profesor, haciendo unas pasantías. Entre ideas e ideas, nos
          fuimos reuniendo y surgió este proyecto.
</p> <p class="text-white text-[18px] max-w-[500px] mb-7 max-xl:max-w-[400px] max-lg:max-w-[300px]">
Surgió la idea de armar una institución donde podamos brindar el
          servicio al cual nos dedicamos dentro de la rehabilitación y el
          entrenamiento. Luego fue cuestión de encontrar un lugar hasta que
          llegamos a este de calle Montevideo y Corrientes, donde vimos un local
          con espacio para las instalaciones y fueron unos meses largos para
          poder construir todo
</p> <p class="text-white text-[18px] max-w-[500px] mb-9 max-xl:max-w-[400px] max-lg:max-w-[300px]">
Hay mucha gente que dejó el gimnasio convencional porque no tenía un
          profe atrás que lo guiara. Ellos no tienen por qué saber cómo entrenar
          o qué movimientos realizar.
</p> <p class="text-white text-[24px] font-bold pb-[48px]">
Nosotros estamos para eso
</p> </div> </div> <div class="pb-[48px] xmd:hidden"> ${renderComponent($$result, "Slide", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/tomis/Desktop/viofit/src/components/Slide", "client:component-export": "default" })} </div> </div> </div> <div class="hidden xmd:block absolute mt-[-500px] left-1/2 xmd:transform xmd:max-xmd:mt-[-650px] xmd:top-[1300px] lg:top-[1315px] xl:top-[1275px] mac:left-[720px] mac:top-[1440px] fullhd:left-[950px]"> ${renderComponent($$result, "Slide", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/tomis/Desktop/viofit/src/components/Slide", "client:component-export": "default" })} </div>`;
}, "C:/Users/tomis/Desktop/viofit/src/components/AboutVioFit.astro", void 0);

const our_services_data = [{"icon":"/icons/our-services/weights.svg","title":"Entrenamiento Funcional Adaptado","strong":"Una propuesta revolucionaria basada en evidencia científica.","description":"Es la adaptación a entornos variables y a circunstancias de esfuerzo aeróbico. En resumen, puede ser el entrenamiento que estas buscando."},{"icon":"/icons/our-services/equipment.svg","title":"Pilates Reformer","description":"Transforma tu cuerpo, fortalece tu mente. Descubre la revolución del fitness con la elegancia del Pilates Reformer."},{"icon":"/icons/our-services/line.svg","title":"Quiropraxia","description":"La clave para una espalda feliz. Recupera tu bienestar y movilidad con el poder de la quiropraxia."},{"icon":"/icons/our-services/time.svg","title":"Kinesología","description":"Tu camino hacia la recuperación. Restaura tu cuerpo, encuentra alivio y recupera tu calidad de vida con la ayuda de expertos en movimiento."},{"icon":"/icons/our-services/person.svg","title":"Yoga Hatha","description":"Encuentra equilibrio y paz en cada postura. Descubre la serenidad interior con la práctica del Yoga Hatha."},{"icon":"/icons/our-services/heartbeat.svg","title":"Medicina deportiva","description":"Estás en las mejores manos para alcanzar tu máximo potencial. ¡Potencia tu rendimiento con confianza!"},{"icon":"/icons/our-services/carrot.svg","title":"Nutrición","description":"Tu receta para una vida saludable. Dejá que los alimentos se conviertan en tus aliados en el camino hacia el bienestar."},{"icon":"/icons/our-services/smiley.svg","title":"Kinesiología Estética","description":"La kinesiología estética combina los principios de la kinesiología y técnicas estéticas no invasivas."}];

const $$OurServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="ourservices" class="hidden xmd:inline h-24"></div> <div class="px-4 xmd:pt-20 relative flex flex-col items-center overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/our-services/arrow_1.webp", "alt": "arrow_1", "loading": "eager", "width": 101, "height": 101, "class": "absolute right-[-30px] top-0 hidden xmd:block" })} ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/our-services/arrow_1.webp", "alt": "arrow_2", "loading": "eager", "width": 101, "height": 101, "class": "absolute right-20 top-20 hidden xmd:block" })} <div class="flex flex-col items-center xmd:items-start xmd:justify-center"> <h2 class="mb-[60px] text-[32px] text-center text-medium_gray font-bold w-full xmd:text-left lg:w-auto xmd:flex xmd:items-center xmd:text-5xl">
Nuestros servicios
</h2> <div class="w-full flex flex-col gap-4 xmd:grid xmd:grid-cols-2 xmd:gap-3 xmd:gap-y-6 hd:gap-x-6"> ${our_services_data.map((service) => renderTemplate`<div class="flex flex-col items-center text-center justify-center mb-4 xmd:flex-row xmd:justify-start xmd:items-start xmd:gap-3 xmd:mb-0 lg:justify-center hd:gap-x-6"> <div class="xmd:mt-1"> ${renderComponent($$result, "Image", $$Image, { "src": service.icon, "alt": "service icon", "loading": "eager", "width": 64, "height": 64 })} </div> <div class="flex flex-col text-center items-center xmd:text-left xmd:items-start text-medium_gray"> <h3 class="text-[18px] xmd:align-top xmd:top-0 py-4 font-bold w-[290px] xs:w-[358px] xsm:w-[468px] xmd:py-0 xmd:pb-2 xmd:w-[270px] lg:w-[350px] xl:w-[450px] mac:w-[550px] fullhd:w-[750px]"> ${service.title} </h3> ${service.strong && renderTemplate`<p class="font-bold text-[14px] w-[290px] xs:w-[358px] xsm:w-[468px] sm:w-full xmd:w-[270px] lg:w-[350px] xl:w-[450px] mac:w-[550px] fullhd:w-[750px]"> ${service.strong} </p>`} <p class="text-[14px] xs:w-[358px] w-[290px] xsm:w-[468px] sm:w-[500px] xmd:w-[270px] lg:w-[350px] xl:w-[450px] mac:w-[550px] fullhd:w-[750px]"> ${service.description} </p> </div> </div>`)} </div> </div> </div>`;
}, "C:/Users/tomis/Desktop/viofit/src/components/OurServices.astro", void 0);

const $$GymPass = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full overflow-hidden my-20 flex justify-center items-center flex-col xmd:h-[370px] h-[200px] xmd:mt-[80px] xmd:mb-52"${addAttribute({
    background: "linear-gradient(68deg, #47f6ab 14.39%, #60e3eb 79.59%"
  }, "style")}> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/gym-pass/viofit.webp", "alt": "banner icon", "loading": "lazy", "width": 77, "height": 77, "class": "absolute xl:right-80 lg:right-40 right-20 w-[77px] h-[77px] 2xl:w-[130px] 2xl:h-[130px] xmd:block hidden" })} <div class="relative left-[46%] bottom-[30%] 2xl:bottom-[20%] xmd:block hidden"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/gym-pass/viofit.webp", "alt": "banner icon", "loading": "lazy", "width": 77, "height": 77, "class": "w-[171px] h-[171px]" })} </div> <div class="relative left-[46%] bottom-[-8%] xmd:block hidden"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/gym-pass/viofit.webp", "alt": "banner icon", "loading": "lazy", "width": 171, "height": 171, "class": "w-[171px] h-[171px]" })} </div> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/gym-pass/viofit.webp", "alt": "banner icon", "loading": "lazy", "width": 160, "height": 160, "class": "absolute left-[-20px] mt-72 w-[160px] h-[160px] xmd:block hidden" })} ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/gym-pass/viofit.webp", "alt": "banner icon", "loading": "lazy", "width": 77, "height": 77, "class": "absolute xl:left-80 lg:left-40 left-20 w-[77px] h-[77px] 2xl:w-[130px] 2xl:h-[130px] xmd:block hidden" })} ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/gym-pass/viofit.webp", "alt": "banner icon", "loading": "lazy", "width": 171, "height": 171, "class": "absolute left-[-20px] mb-72 w-[171px] h-[171px] xmd:block hidden" })} <div class="relative mt-[-300px] xmd:block hidden"> <p class="text-[52px] text-center text-white">Aceptamos</p> <p class="font-bold text-[120px] min-[1600px]:text-[140px] min-[1800px]:text-[180px] text-center text-white mt-[-50px]">
Gympass
</p> </div> <div class="xmd:hidden grid grid-cols-12 w-full h-[200px]"${addAttribute({
    background: "linear-gradient(68deg, #47f6ab 14.39%, #60e3eb 79.59%"
  }, "style")}> <div class="col-span-3 flex flex-col justify-around"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/gym-pass/viofit.webp", "alt": "banner icon", "class": "w-[60px] h-[60px]", "width": 60, "height": 60 })} ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/gym-pass/viofit.webp", "alt": "banner icon", "class": "w-[40px] h-[40px] ml-5 sm:ml-20", "width": 40, "height": 40 })} ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/gym-pass/viofit.webp", "alt": "banner icon", "class": "w-[60px] h-[60px]", "width": 60, "height": 60 })} </div> <div class="col-span-6 flex text-center flex-col my-auto"> <p class="text-[25px] sm:text-[45px] text-center text-white">Aceptamos</p> <p class="font-bold text-[40px] sm:text-[80px] text-center text-white">
Gympass
</p> </div> <div class="col-span-3 flex flex-col justify-around align-bottom"> <div class="flex justify-end"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/gym-pass/viofit.webp", "alt": "banner icon", "class": "w-[60px] h-[60px]", "width": 60, "height": 60 })} </div> <div class="flex justify-end sm:justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/gym-pass/viofit.webp", "alt": "banner icon", "class": "w-[40px] h-[40px] mr-5", "width": 40, "height": 40 })} </div> <div class="flex justify-end"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/gym-pass/viofit.webp", "alt": "banner icon", "class": "w-[60px] h-[60px]", "width": 60, "height": 60 })} </div> </div> </div> </div>`;
}, "C:/Users/tomis/Desktop/viofit/src/components/GymPass.astro", void 0);

const $$Address = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="address" class="w-full mb-20 xmd:mb-[400px]"> <div class="block xmd:hidden text-center"> <p class="text-[32px] text-medium_gray">Te esperamos en</p> <div class="text-[40px] font-light address-background-mobile text-white w-full"> <p>
Mitre <strong class="font-semibold">1380</strong> </p> <p>
Corrientes <strong class="font-semibold">1613</strong> </p> </div> <p class="text-[16px] text-medium_gray mt-[16px]">
Lunes a Viernes de 8 a 21hs.
</p> <div> <a href="https://api.whatsapp.com/send?phone=543415491078" target="_blank" rel="noopener noreferrer" class="text-medium_gray text-[24px] h-[56px] w-[266px] font-semibold p-[10px] flex justify-center items-center mx-auto address-button mt-[32px]">
Hacenos tu consulta
</a> </div> </div> <div class="hidden xmd:block"> <div class="w-full xmd:w-[95%] flex items-center mt-5 xmd:mt-0"> <div class="flex items-center text-center xmd:text-left xmd:pl-[70px] lg:pl-28 xl:h-[90px] xl:pl-24 mac:pl-32 hd:pl-40 fullhd:pl-64 2k:pl-[600px] 4k:pl-[1250px]"> <p class="font-medium text-medium_gray text-[32px] xmd:text-[28px] lg:text-[40px] xl:text-6xl">
Te esperamos en
</p> </div> </div> <div class="address-background bg-medium_gray w-full xmd:w-[95%] flex items-center mt-5 xmd:mt-0"> <div class="flex flex-col text-white text-center xmd:text-left xmd:pl-[70px] lg:pl-28 xl:pl-24 mac:pl-32 hd:pl-40 fullhd:pl-64 2k:pl-[600px] 4k:pl-[1250px]"> <p class="font-light text-[40px] xmd:text-[25px] lg:text-3xl xl:text-[40px] xl:h-[60px] flex items-center gap-2">
Mitre <strong class="font-semibold"> 1380</strong> </p> <p class="flex items-center gap-2 font-light text-[40px] xmd:text-[25px] lg:text-3xl xl:text-[40px] xl:h-[60px]">
Corrientes <strong class="font-semibold"> 1613</strong> </p> </div> <div class="absolute right-[180px] mt-[500px] max-lg:mt-[380px] max-xl:right-10 2xl:right-52 3xl:right-[380px] xl:right-14 2k:right-[450px] 4k:right-[980px]"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/address/image_2.webp", "alt": "stretching image-2", "loading": "eager", "width": 560, "height": 385, "class": "stretching-background-2 max-xl:h-[285px] max-xl:w-[460px] h-[385px] w-[560px] z-10 max-lg:w-[360px] max-lg:h-[230px]", "sizes": "(max-width: 768px) 100vw, (min-width: 769px) 560px", "style": { transform: "scaleX(-1)" } })} </div> <div class="address-custom absolute bg-black right-[150px] w-[200px] mb-32 z-40 flex justify-center items-center xmd:right-14 max-lg:h-[50px] lg:right-24 lg:p-2 lg:py-4 xl:w-[220px] xl:p-4 max-xl:right-[100px] hd:right-[280px] max-lg:mb-[50px] 3xl:right-[400px] gap-2 2k:right-[450px] 4k:right-[1020px]"> <div> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/address/play_circle.svg", "alt": "play circle icon", "loading": "eager", "width": 24, "height": 24 })} </div> <p class="address-custom-text text-[20px] max-xl:text-[18px]">
Personalizados
</p> </div> <div class="absolute right-52 xmd:right-36 xl:right-40 max-xl:right-40 hd:right-[300px] 2k:right-[550px] 4k:right-[1130px]"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/address/image_1.webp", "alt": "stretching image-1", "loading": "eager", "width": 560, "height": 385, "class": "stretching-background max-xl:h-[285px] max-xl:w-[460px] h-[385px] w-[560px] max-lg:w-[360px] max-lg:h-[230px]", "sizes": "(max-width: 768px) 100vw, (min-width: 769px) 560px" })} </div> <div class="address-custom absolute bg-black right-[305px] mt-[600px] z-40 flex justify-center items-center w-[180px] lg:right-[400px] xl:right-[520px] lg:p-2 lg:py-4 xl:w-[190px] xl:p-4 max-lg:mt-[400px] max-lg:h-[50px] 2xl:right-[680px] 3xl:right-[850px] gap-2 2k:right-[910px] 4k:right-[1440px]"> <div> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/address/stretching.svg", "alt": "stretching icon", "loading": "eager", "width": 24, "height": 24 })} </div> <p class="address-custom-text text-[20px] max-xl:text-[18px]">
Profesionales
</p> </div> </div> <div class="w-full xmd:w-[95%] flex items-center xmd:mt-[18px]"> <div class="flex flex-col text-center xmd:text-left xmd:pl-[71px] lg:pl-[114px] xl:pl-[98px] mac:pl-[131px] hd:pl-[163px] fullhd:pl-[258px] 2k:pl-[601px] 4k:pl-[1251px]"> <p class="text-medium_gray text-[16px] xmd:text-[18px] lg:text-2xl">
Lunes a Viernes de 8 a 21hs.
</p> <a href="https://api.whatsapp.com/send?phone=543415491078" target="_blank" rel="noopener noreferrer" class="address-button text-medium_gray text-[24px] xmd:text-[18px] h-[56px] w-[266px] xmd:max-lg:w-[220px] xmd:max-lg:h-[40px] font-semibold p-[10px] flex justify-center items-center rounded-full mx-auto xmd:mx-0 mt-[32px] xmd:mt-[50px] xmd:hover:bg-[#47f6ab] xmd:hover:text-white xmd:transition-all xmd:duration-500 lg:text-2xl">
Hacenos tu consulta
</a> </div> </div> </div> </div>`;
}, "C:/Users/tomis/Desktop/viofit/src/components/Address/Address.astro", void 0);

const $$FollowUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hidden xmd:block"> <div class="grid grid-cols-12 mb-10"> <div class="col-span-1 max-lg:col-span-full"></div> <div class="col-span-3 max-lg:col-span-4"> <div class="bg-white w-fit h-fit rounded-[225px] follow-us-bg mx-auto lg:mr-1"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/follow-us/image_1.webp", "alt": "follow-us image-1", "loading": "eager", "width": 281, "height": 422, "class": "follow-us-images p-2 w-[281px] h-[422px] max-lg:w-[180px] max-lg:h-[300px]" })} </div> </div> <div class="col-span-4 max-lg:col-span-4"> <div class="text-[60px] max-xl:text-[60px] max-lg:text-[40px] flex justify-center flex-col text-center"> <p class="text-medium_gray">Seguinos en</p> <p class="font-semibold text-medium_gray">Instagram</p> <div class="bg-medium_gray rounded-2xl w-[90%] mx-auto"> <p class="follow-us-viofit max-lg:text-[32px] max-xl:text-[42px] text-[50px] max-md:text-[30px]">
@viofit.rosario
</p> </div> <a class="w-[120px] h-[120px] mx-auto group inline-block rounded-full bg-gradient-to-r from-[#47f6ab] via-[#47f6ab] to-[#60e3eb] mt-[60px] text-white focus:outline-none focus:ring active:text-opacity-75" href="https://www.instagram.com/viofit.rosario/"> <span class="block rounded-full w-[120px] h-[120px] bg-medium_gray px-8 py-3 text-sm font-medium group-hover:bg-transparent hover:text-medium_gray transition ease-linear duration-300"> <p class="pt-5 text-[20px] font-semibold">Seguir</p> <p class="pt-5 text-[40px] font-semibold">+</p> </span> </a> </div> </div> <div class="col-span-3 max-lg:col-span-4"> <div class="bg-white w-fit h-fit rounded-[225px] follow-us-bg mx-auto lg:ml-1"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/follow-us/image_2.webp", "alt": "follow-us image-2", "loading": "eager", "width": 281, "height": 422, "class": "follow-us-images p-2 w-[281px] h-[422px] max-lg:w-[180px] max-lg:h-[300px]" })} </div> </div> </div> <div class="grid grid-cols-12 mb-[100px]"> <div class="col-span-1 xl:col-span-2"></div> <div class="bg-white w-fit h-fit rounded-[225px] follow-us-bg col-span-5 xl:col-span-4 mx-auto rotate-[10deg] max-lg:mt-4 max-xl:mt-4"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/follow-us/image_3.webp", "alt": "follow-us image-3", "loading": "eager", "width": 551, "height": 422, "class": "follow-us-images p-2 h-full w-[551px] max-lg:w-[350px] max-xl:w-[450px] max-md:w-[350px] followUs3" })} </div> <div class="bg-white w-fit h-fit rounded-[225px] follow-us-bg col-span-5 xl:col-span-4 mx-auto rotate-[-10deg] max-lg:mt-4 max-xl:mt-4"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/follow-us/image_4.webp", "alt": "follow-us image-4", "loading": "eager", "width": 551, "height": 422, "class": "p-2 h-full w-[551px] max-lg:w-[350px] max-xl:w-[450px] max-md:w-[350px] follow-us-images" })} </div> <div class="col-span-1 xl:col-span-2"></div> </div> </div> <div class="block xmd:hidden"> <div class="text-[40px] text-medium_gray flex justify-center flex-col mx-auto items-center mt-28 pb-[80px] overflow-x-hidden"> <p>Seguinos en</p> <p class="font-semibold">Instagram</p> <div class="bg-medium_gray rounded-3xl w-fit"> <p class="follow-us-viofit">@viofit.rosario</p> </div> <button class="rounded-full w-[120px] h-[120px] bg-medium_gray mx-auto mt-[45px]"> <a href="https://www.instagram.com/viofit.rosario/" target="_blank" rel="noopener noreferrer"> <p class="text-[20px] text-white font-semibold">Seguir</p> <p class="text-white font-semibold">+</p> </a> </button> <div class="relative z-10 left-28 bg-white w-[481px] rounded-[225px] follow-us-bg rotate-[-10deg]"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/follow-us/image_4.webp", "alt": "follow-us image-4", "loading": "eager", "width": 551, "height": 422, "class": "p-2 w-fit follow-us-images" })} </div> </div> </div>`;
}, "C:/Users/tomis/Desktop/viofit/src/components/FollowUs/FollowUs.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-medium_gray text-[#A6A6A6]"> <div class="block xmd:hidden"> <div class="flex flex-col justify-center text-center"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/footer/viofit_logo_2.webp", "alt": "viofit logo", "class": "pt-[60px] w-fit h-fit mx-auto max-w-[150px]", "width": 24, "height": 24 })} <div class="h-[1px] w-[80%] mx-auto bg-[#A59C9C] mt-[20px] mb-[63px]"></div> <div class="sm:flex sm:flex-row items-start justify-center sm:gap-14 md:gap-20"> <div class="flex flex-col items-center justify-center sm:items-start"> <p class="text-white text-[29px] pb-5">Sedes</p> <a class="link link-hover flex" href="https://maps.app.goo.gl/fFwfdgv21dgNLCe88" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/footer/pin.svg", "alt": "pin icon", "width": 16, "height": 24 })} <p>Corrientes 1613</p> </a> <a class="link link-hover flex text-center justify-center sm:text-left sm:items-start sm:justify-start" href="https://maps.app.goo.gl/i29sRP1mXNNWctJm7" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/footer/pin.svg", "alt": "pin icon", "width": 16, "height": 24 })} <p>Mitre 1380</p> </a> </div> <div class="flex flex-col items-center justify-center sm:items-start"> <p class="text-white text-[29px] mt-[44px] sm:mt-0 pb-5">Horarios</p> <p>Lunes a Viernes</p> <p>de 8 a 21hs.</p> </div> <div class="flex flex-col items-center justify-center sm:items-start"> <p class="text-white text-[29px] mt-[44px] sm:mt-0 pb-5">Contacto</p> <p>+341 549-1078</p> </div> </div> <div class="w-[80%] flex justify-center mx-auto gap-[32px] mt-[80px] pb-20"> <a href="https://www.instagram.com/viofit.rosario/" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/footer/instagram.svg", "alt": "instagram icon", "width": 24, "height": 24 })} </a> <a href="https://www.linkedin.com/company/viofit-salud-entrenamiento/about/" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/footer/linkedin.svg", "alt": "linkedin icon", "width": 24, "height": 24 })} </a> </div> </div> </div> <div class="hidden xmd:flex flex-col items-center justify-center"> <footer class="footer py-10 text-base-content w-[600px] lg:w-[790px] xl:w-[1008px] mac:w-[1144px] hd:w-[1225px] fullhd:w-[1552px] fullhd:max-w-[1552px]"> <div class="flex gap-6 justify-between"> <div> <a href="/"> ${renderComponent($$result, "Image", $$Image, { "src": "https://sos.neowyze.tech/viofit/footer/viofit_logo_2.webp", "alt": "viofit logo", "class": "min-w-[150px] max-lg:min-w-[120px] max-w-[170px]", "width": 170, "height": 60 })} </a> </div> <div class="flex gap-4 lg:gap-12 text-[#969797]"> <div> <div class="text-[18px] text-white pb-5 lg:text-[29px]">Sedes</div> <div class="flex flex-col"> <a class="link link-hover flex text-[14px] lg:text-base" href="https://maps.app.goo.gl/fFwfdgv21dgNLCe88" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/footer/pin.svg", "alt": "pin icon", "width": 16, "height": 24 })}
Corrientes 1613
</a> <a class="link link-hover flex text-[14px] lg:text-base" href="https://maps.app.goo.gl/i29sRP1mXNNWctJm7" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/footer/pin.svg", "alt": "pin icon", "width": 16, "height": 24 })}
Mitre 1380
</a> </div> </div> <div class="w-[135px]"> <div class="text-[18px] lg:text-[29px] text-white pb-5">
Horarios
</div> <p class="text-[14px] lg:text-base">Lunes a Viernes de 8 a 21hs.</p> </div> <div> <div class="text-[18px] lg:text-[29px] text-white pb-5">
Contacto
</div> <a class="link link-hover text-[14px] lg:text-base" href="https://api.whatsapp.com/send?phone=543415491078" target="_blank">+341 549-1078</a> </div> </div> </div> </footer> <div class="h-[1px] w-[600px] lg:w-[790px] xl:w-[1008px] mac:w-[1144px] hd:w-[1225px] fullhd:w-[1552px] mx-auto bg-[#A59C9C]"></div> <div class="w-[600px] lg:w-[790px] xl:w-[1008px] mac:w-[1144px] hd:w-[1225px] fullhd:w-[1552px] flex mx-auto gap-[32px] mt-[20px] pb-10"> <a href="https://www.instagram.com/viofit.rosario/" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/footer/instagram.svg", "alt": "instagram icon", "width": 24, "height": 24 })} </a> <a href="https://www.linkedin.com/company/viofit-salud-entrenamiento/about/" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/footer/linkedin.svg", "alt": "linkedin icon", "width": 24, "height": 24 })} </a> </div> </div> </div>`;
}, "C:/Users/tomis/Desktop/viofit/src/components/Footer.astro", void 0);

const $$WhatsappButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="hidden xmd:block fixed xmd:right-4 bottom-4 z-30"> <a href="https://api.whatsapp.com/send?phone=543415491078" target="_blank"> <img src="/icons/whatsapp_logo.png" alt="whatsapp logo" class="size-[50px]"> </a> </button>`;
}, "C:/Users/tomis/Desktop/viofit/src/components/WhatsappButton.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Viofit - Centro de Rehabilitaci\xF3n y Entrenamiento" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/tomis/Desktop/viofit/src/components/Navbar", "client:component-export": "default" })} ${renderComponent($$result2, "WhatsappButton", $$WhatsappButton, {})} ${renderComponent($$result2, "Carousel", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/tomis/Desktop/viofit/src/components/Carousel/Carousel", "client:component-export": "default" })} ${renderComponent($$result2, "AboutVioFit", $$AboutVioFit, {})} ${renderComponent($$result2, "OurServices", $$OurServices, {})} ${renderComponent($$result2, "GymPass", $$GymPass, {})} ${renderComponent($$result2, "Address", $$Address, {})} ${renderComponent($$result2, "FollowUs", $$FollowUs, {})} ${renderComponent($$result2, "ContactForm", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/tomis/Desktop/viofit/src/components/ContactForm/ContactForm", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/tomis/Desktop/viofit/src/pages/index.astro", void 0);

const $$file = "C:/Users/tomis/Desktop/viofit/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
