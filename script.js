const x_dir = document.querySelector(".x-direction");
const y_dir = document.querySelector(".y-direction");
const arena = document.querySelector(".arena");
const player = document.querySelector(".player");

const maxX = arena.clientWidth - player.clientWidth;
const maxY = arena.clientHeight - player.clientHeight;
let currentY = 0;
let currentX = 0;
let speedY = 0;
let speedX = 0;
window.addEventListener("deviceorientation", orientering);

function orientering(event) {
  let x = event.beta;
  let y = event.gamma;
  let gravityX = y / 500;
  let gravityY = x / 500;

  interval = setInterval(newPos(), 50);
  clearInterval(interval);
  function newPos() {
    speedY += gravityY;
    speedX += gravityX;
    currentY += speedY;
    currentX += speedX;
  }
  if (currentY > maxY-10) {
    currentY = maxY-10;
    speedY = 0;
  }
  if (currentY < 10) {
    currentY = 10;
    speedY = 0;
  }

  if (currentX > maxX-10) {
    currentX = maxX-10;
    speedX = 0;
  }
  if (currentX < -10) {
    currentX = -10;
    speedX = 0;
  }
  player.style.top = `${currentY}px`;
  player.style.left = `${currentX}px`;
  x_dir.textContent = `x : ${x.toFixed(2)} ${maxX} ${gravityY.toFixed(2)} ${currentY.toFixed(2)}`;
  y_dir.textContent = `y : ${y.toFixed(2)} ${maxY} ${gravityX.toFixed(2)} ${currentX.toFixed(2)}`;
}
