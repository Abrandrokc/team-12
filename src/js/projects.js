import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

export const projectsSwiper = new Swiper('.projects-swiper-container', {
  modules: [Navigation, Keyboard, Mousewheel],
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    320: {
        spaceBetween: 80,
    },
    375: {
      spaceBetween: 100,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    invert: true,
  },
});
