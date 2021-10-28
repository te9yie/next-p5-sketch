import React from "react";
import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("./P5Canvas"), { ssr: false });

const Sketch = (props) => {
  const [sketch, setSketch] = React.useState(null);
  React.useEffect(() => {
    const importSketch = async () => {
      setSketch(await import(`../sketch/${props.name}`));
    };
    importSketch();
  }, []);
  return sketch ? <Canvas sketch={sketch.default} /> : null;
};

export default Sketch;
