
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
function itemsAccordion() {
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
export default itemsAccordion();

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
    },
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      swiper.slideNext();
    }
  });
});
