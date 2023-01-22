
const x_dir = document.querySelector(".x-direction");
const y_dir = document.querySelector(".y-direction");
const arena = document.querySelector(".arena");
const player = document.querySelector(".player");

const maxX = arena.Width - player.Width;
const maxY = arena.Height - player.Height;

function orientering(event) {
  const x = event.beta;
  const y = event.gamma;
  x += 90;
  y += 90;

  x_dir.textContent = `x : ${x.toFixed(2)}`;
  y_dir.textContent = `y : ${y.toFixed(2)}`;


  player.style.top = `${((maxY * y) / 180) - 10}px`;
  player.style.left = `${((maxX * x) / 180) - 10}px`;
}

window.addEventListener("deviceorientation", orientering);
