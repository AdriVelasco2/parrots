/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_DII3hWHr.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$7 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Los parrots club"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/loroico.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Home/Documents/AAParrots/parrots/src/layouts/Layout.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`<!-- forked from: https://codepen.io/cuonoj/pen/JjPmMaB -->${maybeRenderHead()}<section class="relative h-screen flex flex-col items-center justify-center text-center text-white" data-astro-cid-bbe6dxrz> <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden" data-astro-cid-bbe6dxrz> <video id="video" class="video-no-controls min-w-full min-h-full absolute object-cover" src="/parrotshero2.mp4" autoplay muted loop data-astro-cid-bbe6dxrz></video> </div> <div class="video-content space-y-2 z-10" data-astro-cid-bbe6dxrz> <img class="" src="/logo.png" data-astro-cid-bbe6dxrz> </div> </section>  `;
}, "C:/Users/Home/Documents/AAParrots/parrots/src/components/Hero.astro", void 0);

const $$Astro$5 = createAstro();
const $$Quienes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Quienes;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-ruk33wt2> <h1 id="quienes" class="text-4xl items-center justify-center text-center mt-4 leading-10 tracking-wider text-amber-200 sm:text-5xl sm:leading-none md:text-6xl" data-astro-cid-ruk33wt2>
QUIÉNES SOMOS
</h1> </div> <div class="flex p-5 mt-2 justify-center content-center items-center w-full" data-astro-cid-ruk33wt2> <p class="text-center md:w-1/2 justify-center p-3 content-center text-sm md:text-xl text-slate-100 border-4 border-[#e3d779] rounded-lg" data-astro-cid-ruk33wt2>
Nuestro camino empezó en 2017. Ese verano dimos nuestro primer concierto en
    una celebración familiar y desde ahí no hemos parado. Se sumó Pedro naciendo
    así Parrots y los tres nos recorrimos numerosos bares, campings y
    chiringuitos de playa hasta nuestras primeras bodas tocando en acústico.
    Ahora centrados en Parrots Club junto a Julio y Santi nos hemos pasado a lo
    eléctrico para montar auténticos fiestones que por el momento no se nos da
    mal.
</p> </div> <div class="flex justify-center" data-astro-cid-ruk33wt2> <img src="/grupo.JPG" width="800" height="700" class="" data-astro-cid-ruk33wt2> </div> <div class="container mx-auto my-3 flex justify-center items-center" data-astro-cid-ruk33wt2> <div class="border-b border-[#e3d779] p-4 rounded-lg" data-astro-cid-ruk33wt2> <div class="overflow-auto" data-astro-cid-ruk33wt2> <p class="mb-4 text-center text-lg text-balance text-slate-100" data-astro-cid-ruk33wt2>
Santi, Asier, Julio y Manu. <br data-astro-cid-ruk33wt2> De izquierda a derecha esos son los nombres
        de los componentes de este nuestro grupo.
</p> </div> </div> </div> `;
}, "C:/Users/Home/Documents/AAParrots/parrots/src/components/Quienes.astro", void 0);

const $$Astro$4 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="cursor-example flex flex-wrap items-center justify-between fixed inset-x-0 z-50 p-3 bg-black bg-opacity-60"> <a href="#"><img src="/loroico.png" class="h-10 w-10" alt="ACME" width="120" class=""></a> <div class="flex md:hidden"> <button id="hamburger" class="bg-[#e3d779] rounded-lg"> <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40"> <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40"> </button> </div> <div class="toggle hidden gap-5 w-full ml-4 md:w-auto md:flex text-center text-bold mt-5 md:mt-0"> <a href="#quienes" class="block md:inline-block text-xl text-[#e3d779] hover:text-yellow-500 px-3 py-3">Quiénes somos
</a> <a href="#repertorio" class="block md:inline-block text-xl text-[#e3d779] hover:text-yellow-500 px-3 py-3">Qué hacemos
</a> <a href="#clientes" class="block md:inline-block text-xl text-[#e3d779] hover:text-yellow-500 px-3 py-3">Qué dicen
</a> </div> <a href="#contacto" class="toggle hidden md:flex w-full text-xl md:w-auto px-4 py-2 font-bold text-center transition-all duration-200 bg-[#e3d779] hover:bg-yellow-700 hover:text-white text-black md:rounded">¡CONTÁCTANOS!
</a> </nav> `;
}, "C:/Users/Home/Documents/AAParrots/parrots/src/components/Navbar.astro", void 0);

const $$Astro$3 = createAstro();
const $$Repertorio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Repertorio;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-g7hbrj26> <h1 id="repertorio" class="text-4xl items-center justify-center text-center mt-4 leading-10 tracking-wider text-amber-200 sm:text-5xl sm:leading-none md:text-6xl" data-astro-cid-g7hbrj26>
QUÉ HACEMOS
</h1> </div> <div class="text-white lg:mt-12 py-10" data-astro-cid-g7hbrj26> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-g7hbrj26> <div class="flex flex-col gap-10 lg:flex-row items-center" data-astro-cid-g7hbrj26> <div class="lg:w-1/2" data-astro-cid-g7hbrj26> <h1 class="md:text-4xl text-xl text-center text-balance font-bold leading-tight mb-4" data-astro-cid-g7hbrj26>
Nuestra muestra de versiones
</h1> <p class="text-lg text-center text-balance mb-8" data-astro-cid-g7hbrj26>
Os dejamos una lista a modo de muestra para que veáis algunos de los
          temas que versionamos. <br data-astro-cid-g7hbrj26> También atendemos peticiones personalizadas
</p> <div class="flex justify-center items-center" data-astro-cid-g7hbrj26> <div class="relative inline-flex group" data-astro-cid-g7hbrj26> <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#aca259] via-[#aca259] to-[#aca259] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" data-astro-cid-g7hbrj26></div> <a href="#contacto" title="Get quote now" class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#aca259] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button" data-astro-cid-g7hbrj26>Quiero contactaros
</a> </div> </div> </div> <div class="lg:w-1/2 lg:ml-12" data-astro-cid-g7hbrj26> <iframe class="md:w-96 h-80 w-96 md:h-96" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/244AQUwTpbnl9WjesQlYbQ?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" data-astro-cid-g7hbrj26></iframe> </div> </div> </div> </div> `;
}, "C:/Users/Home/Documents/AAParrots/parrots/src/components/Repertorio.astro", void 0);

function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
  <!-- Link Swiper's CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

  <!-- Demo styles -->
  <style>
    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      font-size: 22px;
      font-weight: bold;
      color: #fff;
      
    }
    .ancho{
      width: 19rem;
    }






    .swiper-slide:nth-child(5n) {
      background-color: rgb(118, 163, 12);
    }

    .swiper-slide:nth-child(6n) {
      background-color: rgb(180, 10, 47);
    }

    .swiper-slide:nth-child(7n) {
      background-color: rgb(35, 99, 19);
    }

    .swiper-slide:nth-child(8n) {
      background-color: rgb(0, 68, 255);
    }

    .swiper-slide:nth-child(9n) {
      background-color: rgb(218, 12, 218);
    }

    .swiper-slide:nth-child(10n) {
      background-color: rgb(54, 94, 77);
    }

    h1 {
      font-family: "Cinzel", serif;
    }
  </style>
</head>


<!-- Swiper -->
<div>
  <h1
  id="clientes"
    class="text-4xl items-center justify-center text-center mt-4 leading-10 tracking-wider text-amber-200 sm:text-5xl sm:leading-none md:text-6xl">
    QUÉ DICEN
  </h1>
</div>
<section class="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

  <div
    class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
    <div class="sm:text-center lg:text-left">
      <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
        <span class="block xl:inline">Esto es lo que opinan de </span>
        <span class="block text-[#dcd284] xl:inline">Parrots Club</span>
      </h1>
      <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Además, pulsando el botón de aquí abajo puedes acceder a nuestra sección de bodas.net y ver más.
      </p>
      <!-- Button Section -->
      <div class="mt-3 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div class="rounded-md shadow">
          <a href="https://www.bodas.net/musica/parrots--e179028"
            class="w-full flex items-center justify-center px-8 py-3 border-4 border-red-400 text-xl font-medium rounded-xl text-white bg-red-400 hover:bg-red-300 md:py-4 md:text-lg md:px-10">
            Bodas.net 🤍 
          </a>
        </div>

      </div>
    </div>
    <!-- End of Button Section -->
  </div>

  <!--   Image Section     -->
  <div class="  mySwiper ml-6  md:ml-10 h-96 w-80 md:w-96 ">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="/op2.JPG" class="" />

      </div>
      <div class="swiper-slide"> <img src="/op1.JPG" class="" />
      </div>
      <div class="swiper-slide"> <img src="/op3.JPG" class="" />
      </div>
      <div class="swiper-slide"> <img src="/op4.JPG" class="" />
      </div>

    </div>
  </div>
  <!--   End of Image Section     -->
   

</section>


<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Initialize Swiper -->
<script>
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
</script>
</body>

</html>`
	}
render["astro:html"] = true;

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate(_a || (_a = __template(['<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">', '<div> <h1 id="contacto" class="text-4xl items-center justify-center text-center mt-4 leading-10 tracking-wider text-amber-200 sm:text-5xl sm:leading-none md:text-6xl">\nCONTACTO\n</h1> </div> <div class=""> <section class="text-gray-600 body-font"> <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center"> <div class="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"> <h1 class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">\n\xBFQuieres hablar?\n</h1> <p class="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed dark:text-gray-300">\nPuedes elegir la manera que prefieras, Whatsapp, llamarnos,\n          Instagram...\n</p> <div class="flex justify-center"> <a href="whatsapp://send?phone=671890022&text=Hola,%20me%20gustar\xEDa%20saber%20m\xE1s%20sobre%20Parrots" class="text-white bg-green-600 border-0 py-2 text-center self-center px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg"><i class="fab fa-whatsapp mr-1"></i>H\xE1blanos en whatsapp\n</a> <a href="tel:+34671890022" class="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg">Puedes llamarnos directamente</a> </div> </div> <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2"> <div> <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/losparrotsclub/" data-instgrm-version="13"></blockquote> <!-- Agrega el script de Instagram --> <script async src="//www.instagram.com/embed.js"><\/script> </div> </div> </div> </section> </div>'])), maybeRenderHead());
}, "C:/Users/Home/Documents/AAParrots/parrots/src/components/Contacto.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="mt-2 text-center"> <a href="#" class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900"> <img src="/loroico.png" class="h-12 mr-3 sm:h-9" alt="Landwind Logo"> </a> <span class="block text-md text-center text-gray-500">© 2024 Parrots Club. Todos los derechos reservados. Hecha en
<a href="https://astro.build/" class="text-indigo-300 hover:underline">Astro</a> por
<a href="https://www.linkedin.com/company/pavel-soft" class="text-white hover:underline "><span class="text-sky-400">P</span>a<span class="text-lime-400">V</span>el Soft.
</a>.
</span> </div>`;
}, "C:/Users/Home/Documents/AAParrots/parrots/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Parrots Club", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<div class="relative bg-zinc-950" data-astro-cid-j7pv25f6> <div class="sticky top-0 h-screen flex flex-col" data-astro-cid-j7pv25f6> <div class="" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })}</div> </div> <div class="sticky top-0 h-screen flex flex-col border-t-2 border-yellow-700 bg-zinc-950 text-white" data-astro-cid-j7pv25f6> <div class="mt-2" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Quienes", $$Quienes, { "data-astro-cid-j7pv25f6": true })}</div> </div> <div class="sticky top-0 h-screen flex flex-col border-t-2 border-yellow-700 bg-zinc-950 text-white" data-astro-cid-j7pv25f6> <p class="mt-2" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Repertorio", $$Repertorio, { "data-astro-cid-j7pv25f6": true })}</p> </div> <div class="sticky top-0 h-screen flex flex-col border-t-2 border-yellow-700 bg-zinc-950 text-white" data-astro-cid-j7pv25f6> <p class="mt-2" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Clientes", render, { "data-astro-cid-j7pv25f6": true })}</p> </div> <div class="sticky top-0 h-screen flex flex-col border-t-2 border-yellow-700 bg-zinc-950 text-white" data-astro-cid-j7pv25f6> <p class="mt-2" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Contacto", $$Contacto, { "data-astro-cid-j7pv25f6": true })}</p> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} 
../components/Clientes`;
}, "C:/Users/Home/Documents/AAParrots/parrots/src/pages/index.astro", void 0);

const $$file = "C:/Users/Home/Documents/AAParrots/parrots/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
