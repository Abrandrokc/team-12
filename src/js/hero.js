// // Get the element with the class "section" and "hero"
// const heroSection = document.querySelector('.section.hero');

// // Define an array of URLs for your background images
// const backgroundImages = [
//   '../img/Herocolor6.png',
//   '../img/Herocolor5.png',
//     '../img/Herocolor4.png',
//     '../img/Herocolor3.png',
//     '../img/Herocolor2.png',
//   '../img/Herocolor.png'
// ];

// // Initialize a variable to keep track of the current index of the backgroundImages array
// let currentIndex = 0;

// // Function to change the background image
// function changeBackgroundImage() {
//   // Update the background image URL using the currentIndex
//   heroSection.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
  
//   // Increment the currentIndex and loop back to 0 if it exceeds the array length
//   currentIndex = (currentIndex + 1) % backgroundImages.length;
// }

// // Call the changeBackgroundImage function initially
// changeBackgroundImage();

// // Set an interval to call the changeBackgroundImage function every 5 seconds (5000 milliseconds)
// setInterval(changeBackgroundImage, 1000);

