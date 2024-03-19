import axios from 'axios';
import { renderSlide } from './js/reviews';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import { projectsSwiper } from './js/projects';
import 'swiper/swiper-bundle.css';
import { itemsAccordion } from './js/aboutme';
import { addAboutMeSwiper } from './js/aboutme';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import SHOWACC from './js/FAQ';
import { heroSection, backgroundImages, change } from './js/hero';


itemsAccordion();
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
SHOWACC;
addAboutMeSwiper();
renderSlide();

//JS code for cection "Work together"
import { formEmailInput } from './js/work-together';
const formEmail = document.getElementById('mail');
formEmail.addEventListener('input', formEmailInput);

import { formCommentlInput } from './js/work-together';
const formComment = document.getElementById('comment');
formComment.addEventListener('input', formCommentlInput);

import { closeModalWindow } from './js/work-together';
const buttonClose = document.querySelector('.button-close');
buttonClose.addEventListener('click', closeModalWindow);

import { submitForm } from './js/work-together';
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

import { backdropeClose } from './js/work-together';
const backdrope = document.querySelector('.backdrope');
backdrope.addEventListener('click', backdropeClose);

import { escapeClose } from './js/work-together';
document.addEventListener('keydown', escapeClose);
// End JS code for cection "Work together"


// HEADER JS
import {
  menuOpenBtn,
  menuCloseBtn,
  mobMenuContainer,
  orderBtn,
  headerMenuBtn,
  headerList,
  mobOrderBtn,
  closeMenu,
  openMenu,
} from './js/header';

menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

headerMenuBtn.addEventListener('click', event => {
  headerList.classList.toggle('is-hidden');
  headerList.style.opacity = 1;
});

// Js code for section "Covers"


mobOrderBtn.addEventListener('click', event => {
  closeMenu();
});

feature/reviews-header
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    closeMenu();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const element = document.querySelector('.covers');

projectsSwiper.on('keyPress', (projectsSwiper, keyCode) => {
  if (keyCode === 9) {
    projectsSwiper.slideNext();
  }
});

// if (isElementInViewport(element)) {
//     console.log('Елемент видимий в вьюпорті');
// } else {
//     console.log('Елемент не видимий в вьюпорті');
// }

console.log(CSS);

window.visualViewport.addEventListener('scroll', function () {
  if (isElementInViewport(element)) {
    console.log('Елемент видимий в вьюпорті');
    // element.animate(
    // [
    //     {
    //     // from
    //     opacity: 0,
    //     color: "#fff",
    //     },
    //     {
    //     // to
    //     opacity: 1,
    //     color: "#000",
    //     },
    // ],
    // 2000,
    // );
  } else {
    console.log('Елемент не видимий в вьюпорті');
  }
});

import { isElementInViewport, addKeyframesAnimation } from './js/covers'
const element = document.querySelector('.covers');
let isAnimationAdded = false;


