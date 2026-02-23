import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'

export const ColorPicker = () => {
  const [bgColor, setBgColor] = useState("#ffffff")

  function handleColorChange(event) {
    console.log(event.target.value)
    setBgColor(event.target.value)
  }

  return (
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
  )
};

export default App
