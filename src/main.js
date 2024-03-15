import axios from 'axios';
import { renderSlide } from './js/reviews';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

renderSlide();