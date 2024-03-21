// import Herocolor5 from "../img/Herocolor5.png"
// import Herocolor4 from "../img/Herocolor4.png"
// import Herocolor3 from "../img/Herocolor3.png"
// import Herocolor2 from "../img/Herocolor2.png"
// import Herocolor from "../img/Herocolor.png"
// import Herocolor6 from "../img/Herocolor6.png"
// export const heroSection = document.querySelector('.section.hero');
// export const backgroundImages = [
//     Herocolor5,
//     Herocolor4,
//     Herocolor6,
//     Herocolor3,
//     Herocolor2,
//     Herocolor
// ];

// let i = 0;

// export function change() {
//    heroSection.style.opacity = 0;
//   setTimeout(() => {
//     heroSection.style.backgroundImage = `url(${backgroundImages[i]})`;
//     heroSection.style.opacity = 1; // Задаємо прозорість 1 після зміни фону
//     i++;
    
//     if(i > backgroundImages.length - 1) {
//       i = 0;
//     }
//   }, 500); // Затримка 500 мс, щоб забезпечити плавну анімацію
  
// }
// setInterval(change, 5000);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// export const heroSection = document.querySelector('.section.hero');

// function generateImageUrls(imageName) {
//   const imageRoot = `../img/${imageName}`;
//   return {
//     '1x': `${imageRoot}.png`,
//     '2x': `${imageRoot}@2x.png`,
//     '3x': `${imageRoot}@3x.png`
//   };
// }

// export const backgroundImages = [
//   generateImageUrls('Herocolor5'),
//   generateImageUrls('Herocolor4'),
//   generateImageUrls('Herocolor6'),
//   generateImageUrls('Herocolor3'),
//   generateImageUrls('Herocolor2'),
//   generateImageUrls('Herocolor')
// ];

// let i = 0;

// export function change() {
//   heroSection.style.opacity = 0;
//   setTimeout(() => {
//     let resolution;
//     if (window.devicePixelRatio >= 3) {
//       resolution = '3x';
//     } else if (window.devicePixelRatio >= 2) {
//       resolution = '2x';
//     } else {
//       resolution = '1x';
//     }
//     heroSection.style.backgroundImage = `url(${backgroundImages[i][resolution]})`;
//     heroSection.style.opacity = 1;
//     i++;
//     if(i > backgroundImages.length - 1) {
//       i = 0;
//     }
//   }, 500);
// }

// setInterval(change, 5000);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export const heroSection = document.querySelector('.section.hero');

// function generateImageUrls(imageName, deviceType) {
//   const imageRoot = `../img/${imageName}`;
//   return {
//     '1x': `${imageRoot}_${deviceType}_1x.png`,
//     '2x': `${imageRoot}_${deviceType}_2x.png`,
//     '3x': `${imageRoot}_${deviceType}_3x.png`
//   };
// }

// export const backgroundImages = [
//   generateImageUrls('Herocolor5', 'laptop'),
//   generateImageUrls('Herocolor4', 'laptop'),
//   generateImageUrls('Herocolor6', 'laptop'),
//   generateImageUrls('Herocolor3', 'laptop'),
//   generateImageUrls('Herocolor2', 'laptop'),
//     generateImageUrls('Herocolor', 'laptop'),
//   generateImageUrls('Herocolor5', 'tablet'),
//   generateImageUrls('Herocolor4', 'tablet'),
//   generateImageUrls('Herocolor6', 'tablet'),
//   generateImageUrls('Herocolor3', 'tablet'),
//   generateImageUrls('Herocolor2', 'tablet'),
//     generateImageUrls('Herocolor', 'tablet'),
//   generateImageUrls('Herocolor5', 'mobile'),
//   generateImageUrls('Herocolor4', 'mobile'),
//   generateImageUrls('Herocolor6', 'mobile'),
//   generateImageUrls('Herocolor3', 'mobile'),
//   generateImageUrls('Herocolor2', 'mobile'),
//   generateImageUrls('Herocolor', 'mobile')
// ];

// let i = 0;

// export function change() {
//   heroSection.style.opacity = 0;
//   setTimeout(() => {
//     let resolution;
//     if (window.innerWidth >= 1024) {
//       resolution = 'laptop';
//     } else if (window.innerWidth >= 768) {
//       resolution = 'tablet';
//     } else {
//       resolution = 'mobile';
//     }
//     if (window.devicePixelRatio >= 3) {
//       resolution += '_3x';
//     } else if (window.devicePixelRatio >= 2) {
//       resolution += '_2x';
//     } else {
//       resolution += '_1x';
//     }
//     heroSection.style.backgroundImage = `url(${backgroundImages[i][resolution]})`;
//     heroSection.style.opacity = 1;
//     i++;
//     if(i > backgroundImages.length - 1) {
//       i = 0;
//     }
//   }, 500);
// }

// setInterval(change, 5000);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const devices = ['laptop', 'tablet', 'mobile'];
// const resolutions = ['1x', '2x', '3x'];
// const heroColors = ['Herocolor', 'Herocolor2', 'Herocolor3', 'Herocolor4', 'Herocolor5', 'Herocolor6'];
// const importedImages = [];

// for (let color of heroColors) {
//   for (let device of devices) {
//     for (let resolution of resolutions) {
//       const importPath = `../img/${color}_${device}_${resolution}.png`;
//       importedImages.push(import(importPath));
//     }
//   }
// }

// export {
//   importedImages
// };

//     let i = 0;

// export function change() {
//   heroSection.style.opacity = 0;
//   setTimeout(() => {
//     let resolution;
//     if (window.innerWidth >= 1024) {
//       resolution = 'laptop';
//     } else if (window.innerWidth >= 768) {
//       resolution = 'tablet';
//     } else {
//       resolution = 'mobile';
//     }
//     if (window.devicePixelRatio >= 3) {
//       resolution += '_3x';
//     } else if (window.devicePixelRatio >= 2) {
//       resolution += '_2x';
//     } else {
//       resolution += '_1x';
//     }
//     heroSection.style.backgroundImage = `url(${backgroundImages[i][resolution]})`;
//     heroSection.style.opacity = 1;
//     i++;
//     if(i > backgroundImages.length - 1) {
//       i = 0;
//     }
//   }, 500);
// }

// setInterval(change, 5000);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import Herocolor6_laptop_1x from '../img/Herocolor6.png'
// import Herocolor6_laptop_2x from '../img/Herocolor6@2x.png'
// import Herocolor6_laptop_3x from '../img/Herocolor6@3x.png'
// import Herocolor6_tablet_1x from '../img/Herocolor6-tablet.png'
// import Herocolor6_tablet_2x from '../img/Herocolor6-tablet@2x.png'
// import Herocolor6_tablet_3x from '../img/Herocolor6-tablet@3x.png'
// import Herocolor6_mobile_1x from '../img/Herocolor6-mobile.png'
// import Herocolor6_mobile_2x from '../img/Herocolor6-mobile@2x.png'
// import Herocolor6_mobile_3x from '../img/Herocolor6-mobile@3x.png'

// import Herocolor5_laptop_1x from '../img/Herocolor5.png'
// import Herocolor5_laptop_2x from '../img/Herocolor5@2x.png'
// import Herocolor5_laptop_3x from '../img/Herocolor5@3x.png'
// import Herocolor5_tablet_1x from '../img/Herocolor5-tablet.png'
// import Herocolor5_tablet_2x from '../img/Herocolor5-tablet@2x.png'
// import Herocolor5_tablet_3x from '../img/Herocolor5-tablet@3x.png'
// import Herocolor5_mobile_1x from '../img/Herocolor5-mobile.png'
// import Herocolor5_mobile_2x from '../img/Herocolor5-mobile@2x.png'
// import Herocolor5_mobile_3x from '../img/Herocolor5-mobile@3x.png'

// import Herocolor4_laptop_1x from '../img/Herocolor4.png'
// import Herocolor4_laptop_2x from '../img/Herocolor4@2x.png'
// import Herocolor4_laptop_3x from '../img/Herocolor4@3x.png'
// import Herocolor4_tablet_1x from '../img/Herocolor4-tablet.png'
// import Herocolor4_tablet_2x from '../img/Herocolor4-tablet@2x.png'
// import Herocolor4_tablet_3x from '../img/Herocolor4-tablet@3x.png'
// import Herocolor4_mobile_1x from '../img/Herocolor4-mobile.png'
// import Herocolor4_mobile_2x from '../img/Herocolor4-mobile@2x.png'
// import Herocolor4_mobile_3x from '../img/Herocolor4-mobile@3x.png'

// import Herocolor3_laptop_1x from '../img/Herocolor3.png'
// import Herocolor3_laptop_2x from '../img/Herocolor3@2x.png'
// import Herocolor3_laptop_3x from '../img/Herocolor3@3x.png'
// import Herocolor3_tablet_1x from '../img/Herocolor3-tablet.png'
// import Herocolor3_tablet_2x from '../img/Herocolor3-tablet@2x.png'
// import Herocolor3_tablet_3x from '../img/Herocolor3-tablet@3x.png'
// import Herocolor3_mobile_1x from '../img/Herocolor3-mobile.png'
// import Herocolor3_mobile_2x from '../img/Herocolor3-mobile@2x.png'
// import Herocolor3_mobile_3x from '../img/Herocolor3-mobile@3x.png'

// import Herocolor2_laptop_1x from '../img/Herocolor2.png'
// import Herocolor2_laptop_2x from '../img/Herocolor2@2x.png'
// import Herocolor2_laptop_3x from '../img/Herocolor2@3x.png'
// import Herocolor2_tablet_1x from '../img/Herocolor2-tablet.png'
// import Herocolor2_tablet_2x from '../img/Herocolor2-tablet@2x.png'
// import Herocolor2_tablet_3x from '../img/Herocolor2-tablet@3x.png'
// import Herocolor2_mobile_1x from '../img/Herocolor2-mobile.png'
// import Herocolor2_mobile_2x from '../img/Herocolor2-mobile@2x.png'
// import Herocolor2_mobile_3x from '../img/Herocolor2-mobile@3x.png'

// import Herocolor_laptop_1x from '../img/Herocolor.png'
// import Herocolor_laptop_2x from '../img/Herocolor@2x.png'
// import Herocolor_laptop_3x from '../img/Herocolor@3x.png'
// import Herocolor_tablet_1x from '../img/Herocolor-tablet.png'
// import Herocolor_tablet_2x from '../img/Herocolor-tablet@2x.png'
// import Herocolor_tablet_3x from '../img/Herocolor-tablet@3x.png'
// import Herocolor_mobile_1x from '../img/Herocolor-mobile.png'
// import Herocolor_mobile_2x from '../img/Herocolor-mobile@2x.png'
// import Herocolor_mobile_3x from '../img/Herocolor-mobile@3x.png'

// export const heroSection = document.querySelector('.section.hero');
// export const backgroundImages = [
//     Herocolor6_laptop_1x,
// Herocolor6_laptop_2x,
// Herocolor6_laptop_3x,
// Herocolor6_tablet_1x,
// Herocolor6_tablet_2x,
// Herocolor6_tablet_3x,
// Herocolor6_mobile_1x,
// Herocolor6_mobile_2x,
//     Herocolor6_mobile_3x,
// Herocolor5_laptop_1x,
// Herocolor5_laptop_2x,
// Herocolor5_laptop_3x,
// Herocolor5_tablet_1x,
// Herocolor5_tablet_2x,
// Herocolor5_tablet_3x,
// Herocolor5_mobile_1x,
// Herocolor5_mobile_2x,
//     Herocolor5_mobile_3x,
// Herocolor4_laptop_1x,
// Herocolor4_laptop_2x,
// Herocolor4_laptop_3x,
// Herocolor4_tablet_1x,
// Herocolor4_tablet_2x,
// Herocolor4_tablet_3x,
// Herocolor4_mobile_1x,
// Herocolor4_mobile_2x,
//     Herocolor4_mobile_3x,
// Herocolor3_laptop_1x,
// Herocolor3_laptop_2x,
// Herocolor3_laptop_3x,
// Herocolor3_tablet_1x,
// Herocolor3_tablet_2x,
// Herocolor3_tablet_3x,
// Herocolor3_mobile_1x,
// Herocolor3_mobile_2x,
//     Herocolor3_mobile_3x,
// Herocolor2_laptop_1x,
// Herocolor2_laptop_2x,
// Herocolor2_laptop_3x,
// Herocolor2_tablet_1x,
// Herocolor2_tablet_2x,
// Herocolor2_tablet_3x,
// Herocolor2_mobile_1x,
// Herocolor2_mobile_2x,
//     Herocolor2_mobile_3x,
// Herocolor_laptop_1x,
// Herocolor_laptop_2x,
// Herocolor_laptop_3x,
// Herocolor_tablet_1x,
// Herocolor_tablet_2x,
// Herocolor_tablet_3x,
// Herocolor_mobile_1x,
// Herocolor_mobile_2x,
// Herocolor_mobile_3x
// ];

// let i = 0;

// // export function change() {
// //     heroSection.style.opacity = 0;
// //     setTimeout(() => {
// //         let resolution;
// //         if (window.innerWidth >= 1024) {
// //             resolution = 'laptop';
// //         } else if (window.innerWidth >= 768) {
// //             resolution = 'tablet';
// //         } else {
// //             resolution = 'mobile';
// //         }

// //         const currentImage = backgroundImages[i][resolution][0]; 
// //         heroSection.style.backgroundImage = `url(${currentImage})`;

// //         heroSection.style.opacity = 1;
// //         i++;
        
// //         if(i > backgroundImages.length - 1) {
// //             i = 0;
// //         }
// //     }, 500);
// // }

// export function change() {
//    heroSection.style.opacity = 0;
//   setTimeout(() => {
//     heroSection.style.backgroundImage = `url(${backgroundImages[i]})`;
//     heroSection.style.opacity = 1;
//     i++;
    
//     if(i > backgroundImages.length - 1) {
//       i = 0;
//     }
//   }, 500);
  
// }
// setInterval(change, 5000);

//////////////////////////////////////////////////////////////////////////////////////////////////

import Herocolor6_laptop_1x from '../img/Herocolor6.png'
import Herocolor6_laptop_2x from '../img/Herocolor6@2x.png'
import Herocolor6_laptop_3x from '../img/Herocolor6@3x.png'
import Herocolor6_tablet_1x from '../img/Herocolor6-tablet.png'
import Herocolor6_tablet_2x from '../img/Herocolor6-tablet@2x.png'
import Herocolor6_tablet_3x from '../img/Herocolor6-tablet@3x.png'
import Herocolor6_mobile_1x from '../img/Herocolor6-mobile.png'
import Herocolor6_mobile_2x from '../img/Herocolor6-mobile@2x.png'
import Herocolor6_mobile_3x from '../img/Herocolor6-mobile@3x.png'

import Herocolor5_laptop_1x from '../img/Herocolor5.png'
import Herocolor5_laptop_2x from '../img/Herocolor5@2x.png'
import Herocolor5_laptop_3x from '../img/Herocolor5@3x.png'
import Herocolor5_tablet_1x from '../img/Herocolor5-tablet.png'
import Herocolor5_tablet_2x from '../img/Herocolor5-tablet@2x.png'
import Herocolor5_tablet_3x from '../img/Herocolor5-tablet@3x.png'
import Herocolor5_mobile_1x from '../img/Herocolor5-mobile.png'
import Herocolor5_mobile_2x from '../img/Herocolor5-mobile@2x.png'
import Herocolor5_mobile_3x from '../img/Herocolor5-mobile@3x.png'

import Herocolor4_laptop_1x from '../img/Herocolor4.png'
import Herocolor4_laptop_2x from '../img/Herocolor4@2x.png'
import Herocolor4_laptop_3x from '../img/Herocolor4@3x.png'
import Herocolor4_tablet_1x from '../img/Herocolor4-tablet.png'
import Herocolor4_tablet_2x from '../img/Herocolor4-tablet@2x.png'
import Herocolor4_tablet_3x from '../img/Herocolor4-tablet@3x.png'
import Herocolor4_mobile_1x from '../img/Herocolor4-mobile.png'
import Herocolor4_mobile_2x from '../img/Herocolor4-mobile@2x.png'
import Herocolor4_mobile_3x from '../img/Herocolor4-mobile@3x.png'

import Herocolor3_laptop_1x from '../img/Herocolor3.png'
import Herocolor3_laptop_2x from '../img/Herocolor3@2x.png'
import Herocolor3_laptop_3x from '../img/Herocolor3@3x.png'
import Herocolor3_tablet_1x from '../img/Herocolor3-tablet.png'
import Herocolor3_tablet_2x from '../img/Herocolor3-tablet@2x.png'
import Herocolor3_tablet_3x from '../img/Herocolor3-tablet@3x.png'
import Herocolor3_mobile_1x from '../img/Herocolor3-mobile.png'
import Herocolor3_mobile_2x from '../img/Herocolor3-mobile@2x.png'
import Herocolor3_mobile_3x from '../img/Herocolor3-mobile@3x.png'

import Herocolor2_laptop_1x from '../img/Herocolor2.png'
import Herocolor2_laptop_2x from '../img/Herocolor2@2x.png'
import Herocolor2_laptop_3x from '../img/Herocolor2@3x.png'
import Herocolor2_tablet_1x from '../img/Herocolor2-tablet.png'
import Herocolor2_tablet_2x from '../img/Herocolor2-tablet@2x.png'
import Herocolor2_tablet_3x from '../img/Herocolor2-tablet@3x.png'
import Herocolor2_mobile_1x from '../img/Herocolor2-mobile.png'
import Herocolor2_mobile_2x from '../img/Herocolor2-mobile@2x.png'
import Herocolor2_mobile_3x from '../img/Herocolor2-mobile@3x.png'

import Herocolor_laptop_1x from '../img/Herocolor.png'
import Herocolor_laptop_2x from '../img/Herocolor@2x.png'
import Herocolor_laptop_3x from '../img/Herocolor@3x.png'
import Herocolor_tablet_1x from '../img/Herocolor-tablet.png'
import Herocolor_tablet_2x from '../img/Herocolor-tablet@2x.png'
import Herocolor_tablet_3x from '../img/Herocolor-tablet@3x.png'
import Herocolor_mobile_1x from '../img/Herocolor-mobile.png'
import Herocolor_mobile_2x from '../img/Herocolor-mobile@2x.png'
import Herocolor_mobile_3x from '../img/Herocolor-mobile@3x.png'

export const heroSection = document.querySelector('.section.hero');

export const backgroundImagesLaptop = [
    Herocolor6_laptop_1x,
    Herocolor6_laptop_2x,
    Herocolor6_laptop_3x,
    Herocolor5_laptop_1x,
    Herocolor5_laptop_2x,
    Herocolor5_laptop_3x,
    Herocolor4_laptop_1x,
    Herocolor4_laptop_2x,
    Herocolor4_laptop_3x,
    Herocolor3_laptop_1x,
    Herocolor3_laptop_2x,
    Herocolor3_laptop_3x,
    Herocolor2_laptop_1x,
    Herocolor2_laptop_2x,
    Herocolor2_laptop_3x,
    Herocolor_laptop_1x,
    Herocolor_laptop_2x,
    Herocolor_laptop_3x
];

export const backgroundImagesTablet = [
    Herocolor6_tablet_1x,
    Herocolor6_tablet_2x,
    Herocolor6_tablet_3x,
    Herocolor5_tablet_1x,
    Herocolor5_tablet_2x,
    Herocolor5_tablet_3x,
    Herocolor4_tablet_1x,
    Herocolor4_tablet_2x,
    Herocolor4_tablet_3x,
    Herocolor3_tablet_1x,
    Herocolor3_tablet_2x,
    Herocolor3_tablet_3x,
    Herocolor2_tablet_1x,
    Herocolor2_tablet_2x,
    Herocolor2_tablet_3x,
    Herocolor_tablet_1x,
    Herocolor_tablet_2x,
    Herocolor_tablet_3x
];

export const backgroundImagesMobile = [
    Herocolor6_mobile_1x,
    Herocolor6_mobile_2x,
    Herocolor6_mobile_3x,
    Herocolor5_mobile_1x,
    Herocolor5_mobile_2x,
    Herocolor5_mobile_3x,
    Herocolor4_mobile_1x,
    Herocolor4_mobile_2x,
    Herocolor4_mobile_3x,
    Herocolor3_mobile_1x,
    Herocolor3_mobile_2x,
    Herocolor3_mobile_3x,
    Herocolor2_mobile_1x,
    Herocolor2_mobile_2x,
    Herocolor2_mobile_3x,
    Herocolor_mobile_1x,
    Herocolor_mobile_2x,
    Herocolor_mobile_3x
];

let i = 0;

export function change() {
    heroSection.style.opacity = 0;

    let resolution;
    if (window.innerWidth >= 1024) {
        resolution = backgroundImagesLaptop;
    } else if (window.innerWidth >= 768) {
        resolution = backgroundImagesTablet;
    } else {
        resolution = backgroundImagesMobile;
    }

    const currentImage = resolution[i]; 
    const nextIndex = (i + 1) % resolution.length;
    const nextImage = resolution[nextIndex];

    const tempImg = new Image();
    tempImg.src = nextImage;

    tempImg.onload = function() {
        setTimeout(() => {
            heroSection.style.backgroundImage = `url(${nextImage})`;
            heroSection.style.opacity = 1;
        }, 500);
    };

    i = nextIndex;
}

setInterval(change, 4000);