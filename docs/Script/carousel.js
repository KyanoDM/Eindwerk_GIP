const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Counter
let counter = 0;
const size = carouselImages[0].clientWidth;

// Slide the carousel when the page loads
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button listeners
nextButton.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Loop the carousel back to the beginning
carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'last-clone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'first-clone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
