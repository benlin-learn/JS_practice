const pics = document.querySelectorAll('.pic img');
pics.forEach((pic) => pic.addEventListener('click', addImage));
const display = document.querySelector('.display');
const opacity = 0.4;
pics[0].style.opacity = opacity;

function addImage(e) {
  // console.log(document.querySelector('.pic').children);
  pics.forEach((pic) => (pic.style.opacity = 1));
  const child = display.childNodes[0];
  if (display.childNodes.length !== 0) {
    display.removeChild(child);
  }
  const img = document.createElement('img');
  img.src = e.target.src;

  img.className = 'fade-in';

  setTimeout(() => {
    img.classList.remove('fade-in');
  }, 500);
  display.appendChild(img);

  e.target.style.opacity = opacity;
}
