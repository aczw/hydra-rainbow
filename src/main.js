import Hydra from "hydra-synth";
import "./style.css";

const canvas = document.querySelector("#hydra");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hydra = new Hydra({
  canvas,
  detectAudio: false,
  numSources: 1,
  numOutputs: 1,
});

window.addEventListener("resize", () => hydra.setResolution(window.innerWidth, window.innerHeight));

osc(6, 1, 5)
  .add(noise(0.7, 1), 1)
  .rotate(() => time % 360)
  .pixelate(30, [5, 10, 15, 20].fast(Math.PI))
  .modulatePixelate(osc(4), 4, [1, 20, -10, 5, 100, -17, 69, -420].fast(2))
  .out();
