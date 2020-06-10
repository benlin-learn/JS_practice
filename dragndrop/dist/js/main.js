const empties = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach((empty) => {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
});

// Drag function
function dragStart(e) {
  // console.log('dragStart');
  this.className += ' hold';
  setTimeout(() => {
    this.className = 'invisible';
  }, 0);
  // e.preventDefault();
}
function dragEnd(e) {
  this.className = 'fill';
  // console.log('dragEnd');
  // e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}
function dragLeave() {
  this.className = 'empty';
}
function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
