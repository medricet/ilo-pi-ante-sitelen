import React, { useState } from 'react';

import { HexColorPicker } from 'react-colorful';

import DeselectDetector from './DeselectDetector';

import './ColorButton.css';

function ColorButton({ defaultColor, onChange }: ColorButtonProps) {
  const [isActive, setActive] = useState(false);
  const [color, setColor] = useState(defaultColor);

  function buttonOnClick(e: any) {
    // toggle active
    setActive(!isActive);
  }

  function hexColorPickerOnChange(color: string) {
    setColor(color);

    onChange(color);
  }

  return (
    <div className="parent">
      <button className="color-button" onClick={buttonOnClick} style={{"backgroundColor": color}}></button>
      
      <DeselectDetector callback={() => { setActive(false) }}>
        <div className="color-picker-box" style={{"display": isActive ? "inherit" : "none"}}>
          <HexColorPicker className="hex-color-picker" color={color} onChange={hexColorPickerOnChange} />
        </div>
      </DeselectDetector>
    </div>
  );
}

ColorButton.defaultProps = {
  defaultColor: "#ffffff",
  onChange: () => {}
};

interface ColorButtonProps {
  defaultColor: string,
  onChange: (color: string) => any,
}

export default ColorButton;