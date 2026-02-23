import React, { useState, useMemo } from 'react';
import './index.css'

export default function ColorPicker() {
  const [bgColor, setBgColor] = useState("#ffffff")

  function handleColorChange(event) {
    console.log(event.target.value)
    setBgColor(event.target.value)
  }

  return (
    <>
      <div id="color-picker-container"
        style={{
          backgroundColor: bgColor
        }}>
        <input
          type="color"
          value={bgColor}
          id="color-input"
          onChange={handleColorChange}
        />
      </div>
    </>
  );
}
