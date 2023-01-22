const z_dir = document.querySelector(".z-direction");
const x_dir = document.querySelector(".x-direction");
const y_dir = document.querySelector(".y-direction");

function orientering(event) {
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  z_dir.innerText(alpha)
  x_dir.innerText(beta)
  y_dir.innerText(gamma)
}
