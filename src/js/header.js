const menuOpenBtn = document.querySelector('.menu-open');
const menuCloseBtn = document.querySelector('.menu-close');
const mobMenuContainer = document.querySelector('.mobile-menu');
const orderBtn = document.querySelector('.header-order');
const headerMenuBtn = document.querySelector('.header-nav__menu');
const headerList = document.querySelector('.header-list');

export function openMenu() {
  menuOpenBtn.classList.add('is-hidden');
  menuCloseBtn.classList.remove('is-hidden');
  mobMenuContainer.classList.add('is-open');
}

export function closeMenu() {
  mobMenuContainer.classList.remove('is-open');
  menuOpenBtn.classList.remove('is-hidden');
  menuCloseBtn.classList.add('is-hidden');
  orderBtn.style.display = 'none';
}

menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

headerMenuBtn.addEventListener('click', event => {
  headerList.classList.toggle('is-hidden');
  headerList.style.opacity = 1;
});
