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

// Js code for section "Covers"


import { isElementInViewport, addKeyframesAnimation } from './js/covers'
const element = document.querySelector('.covers');
let isAnimationAdded = false;
 

