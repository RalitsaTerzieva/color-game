import React from 'react';

function BoxColor({ color, text }) {
  const boxStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '20px',
    margin: '20px',
    textAlign: 'center',
    border: '1px solid black'
  };

  return (
    <div style={boxStyle}>
      {text}
    </div>
  );
}

export default BoxColor;