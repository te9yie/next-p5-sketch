import React from "react";
import p5 from "p5";

const P5Canvas = (props) => {
  const divRef = React.useRef(null);
  React.useEffect(() => {
      let sketch = new p5(props.sketch, divRef.current);
      const cleanup = () => {
        sketch.remove();
      };
      return cleanup;
  });
  return <div ref={divRef} />;
};

export default P5Canvas;