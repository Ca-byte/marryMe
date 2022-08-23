// grab everything we need
const crazyButtons = document.querySelectorAll('.btn-crazy');
const btnYes = document.querySelector('.left');
btnYes.addEventListener('click', goodChoice)

function goodChoice(){
  alert('Yeahhh I knew it 💑')
  alert('No choice Thaís! 😂')
}

// function definitions
function moveButton() {
  //random number for the left and top offset
  const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
  const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);
  
  // apply numbers to the button
  this.style.top = offsetTop + 'px';
  this.style.left = offsetLeft + 'px';
}

// event listeners
crazyButtons.forEach(button => button.addEventListener('mouseenter', moveButton));
