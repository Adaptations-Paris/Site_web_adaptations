import React from 'react';

const UI = ({ sliders, buttons }) => {
  return (
    <div id="ui">
      <div>
        <p>Couleur Fond</p>
        <input type="color" value={sliders.bgColor} onChange={sliders.handleBgColorChange} />
      </div>
      <div>
        <p>Couleur Forme</p>
        <input type="color" value={sliders.shapeColor} onChange={sliders.handleShapeColorChange} />
      </div>
      {buttons.map((button, index) => (
        <button key={index} onClick={button.onClick}>{button.label}</button>
      ))}
    </div>
  );
};

export default UI;
