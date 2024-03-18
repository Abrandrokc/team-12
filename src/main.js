


import axios from 'axios';
import { renderSlide,  } from './js/reviews';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import itemsAccordion from './js/aboutme';
itemsAccordion;
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';


renderSlide(); 
  
//JS code for cection "Work together"
import { formEmailInput } from './js/work-together';
const formEmail = document.getElementById('mail');
formEmail.addEventListener('input', formEmailInput);

import { formCommentlInput } from './js/work-together';
const formComment = document.getElementById('comment');
formComment.addEventListener('input', formCommentlInput);

import { closeModalWindow } from './js/work-together';
const buttonClose = document.querySelector(".button-close");
buttonClose.addEventListener('click', closeModalWindow);

import { submitForm} from './js/work-together';
const form = document.querySelector("form");
form.addEventListener('submit',submitForm);

import { backdropeClose} from './js/work-together';
const backdrope = document.querySelector(".backdrope");
backdrope.addEventListener('click', backdropeClose);

import { escapeClose} from './js/work-together';
document.addEventListener('keydown', escapeClose);
// End JS code for cection "Work together"



// covers code



// const covers = document.querySelector(".section.covers")
// window.visualViewport.addEventListener("scroll",(event)=> {
//     // console.log(event)
//     // console.log(covers.getBoundingClientRect())
//     isElementInViewport(covers)
// });

// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     console.log(visualViewport)
//     console.log(rect.top)
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || covers.clientHeight) &&
//         rect.right <= (window.innerWidth || covers.clientWidth)
//     );
// }

 // Виберіть елемент, який ви хочете відстежувати
const element = document.querySelector('.section.covers');
// Функція для перевірки, чи елемент видимий в вьюпорті
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Перевірка, чи елемент видимий при завантаженні сторінки
// if (isElementInViewport(element)) {
//     console.log('Елемент видимий в вьюпорті');
// } else {
//     console.log('Елемент не видимий в вьюпорті');
// }
// Слухач подій для перевірки, чи елемент видимий при прокрутці або зміні розміру вікна
window.visualViewport.addEventListener('scroll', () => {
    console.log("scroll!")
    if (isElementInViewport(element)) {
        console.log('Елемент видимий в вьюпорті');
    } else {
        console.log('Елемент не видимий в вьюпорті');
    }
});
