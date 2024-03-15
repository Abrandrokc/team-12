import axios from 'axios';
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export const reviewWrapper = document.querySelector('.reviews-swiper-wrapper');

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
        const html = Array.from(data).map(({ author, avatar_url, review }) => `<li class='swiper-slide'>
            <img class="review-img" src="${avatar_url}" alt="${author}" />
            <h3 class="review-author">${author}</h3>
            <p class="review-text">${review}</p>
        </li>`).join('');
        reviewWrapper.insertAdjacentHTML("afterbegin", html);
    }
}
