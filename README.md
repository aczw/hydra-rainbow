was playing around with [Hydra](https://hydra.ojack.xyz/docs/) and thought i did smth pretty cool. my [secondary domain](https://czw.sh) was missing a homepage so i quickly threw smth together. here's the Hydra script:

```js
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
```
