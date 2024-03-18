
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';



import axios from 'axios';
import { renderSlide,  } from './js/reviews';
import Swiper from 'swiper';
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

