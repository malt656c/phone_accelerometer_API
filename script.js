
const x_dir = document.querySelector(".x-direction");
const y_dir = document.querySelector(".y-direction");
const arena = document.querySelector(".arena");
const player = document.querySelector(".player");

const maxX = arena.clientWidth - player.clientWidth;
const maxY = arena.clientHeight - player.clientHeight;

function orientering(event) {
  const x = event.beta;
  const y = event.gamma;


  x_dir.textContent = `x : ${x.toFixed(2)+= 90}`;
  y_dir.textContent = `y : ${y.toFixed(2)+= 90}`;

  x += 90;
  y += 90;

  player.style.top = `${((maxY * y) / 180) - 10}px`;
  player.style.left = `${((maxX * x) / 180) - 10}px`;
}

window.addEventListener("deviceorientation", orientering);
