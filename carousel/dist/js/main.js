// .carousel-slide
// .carousel-container
const carouselSlider = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

let counter = 1;

console.log(carouselSlider);

const size = carouselImages[0].clientWidth;
console.log(carouselImages[0].clientWidth);
console.log(size);
// prettier-ignore
carouselSlider.style.transform = 'translateX('+(-size*counter)+'px)';

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

carouselSlider.addEventListener('transitionend', () => {
  // console.log('fired');
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlider.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlider.style.transform = 'translateX(' + -size * counter + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlider.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlider.style.transform = 'translateX(' + -size * counter + 'px)';
  }
});

function prevImage() {
  if (counter <= 0) return;
  // console.log('prev fired');
  carouselSlider.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  console.log(counter);
  // prettier-ignore
  carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
function nextImage() {
  if (counter >= carouselImages.length - 1) return;
  // console.log('next fired');
  carouselSlider.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  console.log(counter);
  // prettier-ignore
  carouselSlider.style.transform = 'translateX('+ (-size * counter) + 'px)';
}
