
import axios from 'axios';
import { renderSlide,  } from './js/reviews';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import itemsAccordion from './js/aboutme';
itemsAccordion;
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';


renderSlide(); 
  
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const SHOWACC = new Accordion('.accordion-container', {
    showMultiple: true,
});
export default SHOWACC;
