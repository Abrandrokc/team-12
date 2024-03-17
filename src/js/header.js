const menuBtn = document.querySelector('.header-nav__menu');
const openMenuBtn = document.querySelector('.menu-open');
const closeMenuBtn = document.querySelector('.menu-close');
const menuList = document.querySelector('.header-list');

export function openMenu() {
  openMenuBtn.classList.add('is-hidden');
  closeMenuBtn.classList.remove('is-hidden');
  menuList.classList.remove('is-hidden');
}

export function closeMenu() {
  openMenuBtn.classList.remove('is-hidden');
  closeMenuBtn.classList.add('is-hidden');
  menuList.classList.add('is-hidden');
}

export function closeMenuClick(event) {
  const target = event.target;
  if (target.tagName === 'A') {
    closeMenu();
  }
}

openMenuBtn.addEventListener('click', openMenu);

closeMenuBtn.addEventListener('click', closeMenu);

menuList.addEventListener('click', closeMenuClick);
