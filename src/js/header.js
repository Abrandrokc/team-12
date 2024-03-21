export const menuOpenBtn = document.querySelector('.menu-open');
export const menuCloseBtn = document.querySelector('.menu-close');
export const mobMenuContainer = document.querySelector('.mobile-menu');
export const orderBtn = document.querySelector('.header-order');
export const headerMenuBtn = document.querySelector('.nav-menu__btn');
export const headerList = document.querySelector('.header-list');
export const mobOrderBtn = document.querySelector('.mobile-btn');

export function openMenu() {
  menuOpenBtn.classList.add('is-hidden');
  menuCloseBtn.classList.remove('is-hidden');
  mobMenuContainer.classList.add('is-open');
}

export function closeMenu() {
  mobMenuContainer.classList.remove('is-open');
  menuOpenBtn.classList.remove('is-hidden');
  menuCloseBtn.classList.add('is-hidden');
}
