import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,Keyboard, Mousewheel } from 'swiper/modules';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export const reviewWrapper = document.querySelector('.reviews-wrapper');
const reviewsSwiper = document.querySelector('.reviews-swiper')


export async function fetchData() {
    try {
        const response = await axios.get('/reviews');
        return response.data;
    } catch (error) {
        reviewWrapper.insertAdjacentHTML('afterbegin', `<p class='review-error'>Not found</p>`);
        return null;
    }
}

export async function renderSlide() {
    let data = await fetchData();
    if (data) {
        const html = data.map(({ author, avatar_url, review }) => `<li class='swiper-slide  review-slide' style="box-sizing: border-box;">
            <img class="review-img" src="${avatar_url}" alt="${author}" />
            <h3 class="review-author">${author}</h3>
            <p class="review-text">${review}</p>
        </li>`).join('');

        reviewWrapper.insertAdjacentHTML('afterbegin', html)

        const swiperOptions = {
            modules: [Navigation, Keyboard, Mousewheel],
            initialSlide: 0,
            slidesPerView: 1,
            spaceBetween: 16,
           
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                onlyInViewport: true,
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            breakpoints: {
                375: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1440: { slidesPerView: 4 },
            },
           
            hashNavigation: {
                watchState: true,
                onlyInViewport: true,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
           mousewheel: {
               invert: true,
               onlyInViewport: true,
  },
            
        };

        new Swiper('.reviews-swiper', swiperOptions);
    }
}
