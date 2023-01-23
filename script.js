const x_dir = document.querySelector(".x-direction");
const y_dir = document.querySelector(".y-direction");
const arena = document.querySelector(".arena");
const player = document.querySelector(".player");

const maxX = arena.clientWidth - player.clientWidth;
const maxY = arena.clientHeight - player.clientHeight;

function orientering(event) {
  const x = event.beta;
  const y = event.gamma;

  if (y < 0) {
    player.style.left = `-10px`;
  }
  if (y > 0) {
    player.style.left = `${maxX - 10}px`;
  }

  if (x < 0) {
    player.style.top = `-10px`;
  }
  if (x > 0) {
    player.style.top = `${maxY - 10}px`;
  }

/*   player.style.transitionDuration = `${Math.abs(10/y)}s, ${Math.abs(10/x)}s` */

  x_dir.textContent = `x : ${x.toFixed(2)} ${maxX}`;
  y_dir.textContent = `y : ${y.toFixed(2)} ${maxY}`;

}

window.addEventListener("deviceorientation", orientering);
