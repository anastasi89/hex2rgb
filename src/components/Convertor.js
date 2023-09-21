import React, { useState } from "react";

export default function Convertor() {
  const [color, setInputColor] = useState("");

  const handleCahnge = (event) => {
    const colorIn = event.target.value;
    if (colorIn.length === 7) {
      if (/#[a-f0-9]{6}/gi.exec(colorIn)) {
        const colorOut = `rgb(${parseInt(colorIn.slice(1, 3), 16)}, ${parseInt(
          colorIn.slice(3, 5),
          16
        )}, ${parseInt(colorIn.slice(5, 7), 16)})`;
        setInputColor(colorOut);
      } else {
        setInputColor("Ошибка!");
      }
    } else if (colorIn.length > 7) {
      setInputColor("Ошибка!");
    } else {
      setInputColor(null);
    }
  };

  return (
    <div
      className='Convertor'
      style={{ backgroundColor: color === "Ошибка!" ? "rgb(255 0 0)" : color }}
    >
      <div className='containier'>
        <form className='form'>
          <input
            className='colorIn'
            type='text'
            onChange={handleCahnge}
            placeholder='Введите код цвета: #123456'
          />
        </form>
        <div className='colorOut' type='text' readOnly>
          {color}
        </div>
      </div>
    </div>
  );
}
