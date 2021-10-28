const sketch = (p) => {
  let x = 20;
  p.setup = () => {
      p.createCanvas(200, 100);
  };
  p.draw = () => {
    p.background(51);
    p.rect(x, 10, 20, 10);
    p.rect(x + 20, 30, 10, 30);
  };
  p.mouseClicked = () => {
    x += 2;
  };
};

export default sketch;
