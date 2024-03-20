import Herocolor5 from "../img/Herocolor5.png"
import Herocolor4 from "../img/Herocolor4.png"
import Herocolor3 from "../img/Herocolor3.png"
import Herocolor2 from "../img/Herocolor2.png"
import Herocolor from "../img/Herocolor.png"
import Herocolor6 from "../img/Herocolor6.png"
export const heroSection = document.querySelector('.section.hero');
export const backgroundImages = [
    Herocolor5,
    Herocolor4,
    Herocolor6,
    Herocolor3,
    Herocolor2,
    Herocolor
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


