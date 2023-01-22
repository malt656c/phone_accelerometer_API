
const x_dir = document.querySelector(".x-direction");
const y_dir = document.querySelector(".y-direction");
const arena = document.querySelector(".arena");
const player = document.querySelector(".player");

const maxX = arena.clientWidth - player.clientWidth;
const maxY = arena.clientHeight - player.clientHeight;

console.log(maxX, maxY)
function orientering(event) {
  const x = event.beta+90;
  const y = event.gamma+90;

  player.style.top = `${(maxX * x) / 90 - 10}px`;
  player.style.left = `${(maxY * y) / 360 - 10}px`;

   x_dir.textContent = `x : ${x.toFixed(2)} ${maxX}`;
 y_dir.textContent = `y : ${y.toFixed(2)} ${maxY}`;
}

window.addEventListener("deviceorientation", orientering);
