import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

// Définir ton sketch ici
const MySketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.background(200);
  };

  p5.draw = () => {
    p5.fill(255, 0, 0);
    p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
  };
};

// Composant principal de l'application
const App = () => {
  return (
    <div>
      <h1>Mon Sketch avec React et p5.js</h1>
      {/* Utilisation du wrapper pour afficher le sketch */}
      <ReactP5Wrapper sketch={MySketch} />
    </div>
  );
};

export default App;
