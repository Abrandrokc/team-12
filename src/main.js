



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



const element = document.getElementById('your-element-id');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

if (isElementInViewport(element)) {
    console.log('Елемент видимий в вьюпорті');
} else {
    console.log('Елемент не видимий в вьюпорті');
}

window.visualViewport.addEventListener('scroll', function () {
    if (isElementInViewport(element)) {
        console.log('Елемент видимий в вьюпорті');
    } else {
        console.log('Елемент не видимий в вьюпорті');
    }
});
