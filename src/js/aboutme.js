import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';

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
