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

osc([2, 8, 5].fast(1.5), [1, 2].fast(0.5), 5)
  .add(noise(0.5, 1), 1)
  .rotate(time)
  .pixelate([50, 15, 30].fast(1), [5, 20, 10, 50, 15].fast(3))
  .modulatePixelate(
    osc(4),
    [1, 4, 3, 5, 2].fast(0.7),
    [1, 25, 10, 2, 3, 100, 4, 200, 5, 50].fast(2),
  )
  .out();
