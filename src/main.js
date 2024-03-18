import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import { projectsSwiper } from './js/projects'

projectsSwiper.on('keyPress', (projectsSwiper, keyCode) => {
  if (keyCode === 9) {
    projectsSwiper.slideNext();
  }
});