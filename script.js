const z_dir = document.querySelector(".z-direction");
const x_dir = document.querySelector(".x-direction");
const y_dir = document.querySelector(".y-direction");

function orientering(event) {
  const z = event.alpha;
  const x = event.beta;
  const y = event.gamma;

  z_dir.textContent = `z : ${z.toPrecision()}\n`;
  x_dir.textContent = `x : ${x.toPrecision()}\n`;
  y_dir.textContent = `y : ${y.toPrecision()}\n`;
}

window.addEventListener("deviceorientation", orientering);
