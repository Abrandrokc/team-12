import axios from 'axios';
import { renderSlide,  } from './js/reviews';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';


renderSlide(); 
  
