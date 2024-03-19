import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

export function itemsAccordion() {
  const buttonAccordion = document.querySelector('.button-up-down');

  new Accordion('.info-list', {
    duration: 700,
    showMultiple: true,
    openOnInit: [0],
    onOpen: currentElement => {
      currentElement.querySelector('.ac-trigger').classList.add('button-roll');
    },
    onClose: currentElement => {
      currentElement
        .querySelector('.ac-trigger')
        .classList.remove('button-roll');
    },
  });
}

export async function addAboutMeSwiper() {
  const swiper = new Swiper('.skills-container', {
    modules: [Navigation, Keyboard],
   
    navigation: {
      nextEl: '.skills-button-next',
      prevEl: '.skills-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      375: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1440: { slidesPerView: 6 },
    },
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      swiper.slideNext();
    }
    if (event.key === 'ArrowRight') {
      swiper.slideNext();
    }
    if (event.key === 'ArrowLeft') {
      swiper.slidePrev();
    }
  });
}
