import axios from 'axios';
import { renderSlide } from './js/reviews';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import { projectsSwiper } from './js/projects';
import 'swiper/swiper-bundle.css';
import itemsAccordion from './js/aboutme';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

itemsAccordion;
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
renderSlide();
const SHOWACC = new Accordion('.accordion-container', {
  showMultiple: true,
});
export default SHOWACC;
projectsSwiper.on('keyPress', (projectsSwiper, keyCode) => {
  if (keyCode === 9) {
    projectsSwiper.slideNext();
  }
});
