
export const heroSection = document.querySelector('.section.hero');
export const backgroundImages = [
    './img/Herocolor5.png',
    './img/Herocolor4.png',
    './img/Herocolor6.png',
    './img/Herocolor3.png',
    './img/Herocolor2.png',
    './img/Herocolor.png'
];
  
let i = 0;

export function change() {
  heroSection.style.backgroundImage = `url(${backgroundImages[i]})`;
  i++;
  
  if(i > backgroundImages.length - 1) {
    i = 0;
  }
}

setInterval(change, 5000);


