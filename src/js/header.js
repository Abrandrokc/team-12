const mobMenuItems = document.querySelectorAll('.header-list .header-link');
const menuOpenBtn = document.querySelector('.menu-open');
const menuCloseBtn = document.querySelector('.menu-close');
const mobMenuContainer = document.querySelector('.header-mob__menu');
const orderBtn = document.querySelector('.header-order');
const headerMenuBtn = document.querySelector('.header-nav__menu');
const headerList = document.querySelector('.header-list');

export function createMarkup() {
  const items = [...mobMenuItems];
  const mobMenuListHTML = `
       <ul class="mob-menu__list">
      ${items
        .map(
          item =>
            `<li class="mob-menu__item"><a class="mob-menu__link" href="${item.href}">${item.textContent}</a></li>`
        )
        .join('')}
    </ul>
  `;

  mobMenuContainer.innerHTML = mobMenuListHTML;
}

export function openMenu() {
  menuOpenBtn.classList.add('is-hidden');
  menuCloseBtn.classList.remove('is-hidden');
  createMarkup();
  mobMenuContainer.classList.remove('is-hidden');
  orderBtn.style.display = 'block';
}

export function closeMenu() {
  mobMenuContainer.classList.add('is-hidden');
  menuOpenBtn.classList.remove('is-hidden');
  menuCloseBtn.classList.add('is-hidden');
  orderBtn.style.display = 'none';
}

menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

headerMenuBtn.addEventListener('click', event => {
  headerList.classList.toggle('is-hidden');
});
