const sketch = (p) => {
  let x = 0;
  p.draw = () => {
    if (++x > 100) {
      x = 0;
    }
    p.background(51);
    p.fill(255);
    p.text("Hello", x, 20);
  };
};

export default sketch;
