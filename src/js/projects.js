import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

export const projectsSwiper = new Swiper('.projects-swiper-container', {
  modules: [Navigation, Keyboard, ],
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
    onlyInViewport: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  
});
