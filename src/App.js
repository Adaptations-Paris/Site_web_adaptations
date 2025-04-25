import React, { useState } from 'react';
import SketchComponent from './Sketch';
import UI from './components/UI';

const App = () => {
  const [bgColor, setBgColor] = useState("#acb8b5");
  const [shapeColor, setShapeColor] = useState("#caff00");

  const sliders = {
    bgColor: bgColor,
    shapeColor: shapeColor,
    handleBgColorChange: (e) => setBgColor(e.target.value),
    handleShapeColorChange: (e) => setShapeColor(e.target.value),
  };

  const buttons = [
    { label: 'Rotation', onClick: () => {/* toggle rotate */} },
    { label: 'Pulsation', onClick: () => {/* toggle scale */} },
    { label: 'Vague', onClick: () => {/* toggle wave */} },
  ];

  return (
    <div>
      <SketchComponent />
      <UI sliders={sliders} buttons={buttons} />
    </div>
  );
};

export default App;
