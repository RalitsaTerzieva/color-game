import React from 'react';

function BoxGame({ color, text }) {
    const boxStyle = {
      backgroundColor: color,
      color: 'white',
      padding: '20px',
      margin: '20px',
      textAlign: 'center',
      border: '1px solid black'
    };
  
    return (
      <div>
        <BoxColor color="blue" text="This is a blue box!" />
        <BoxColor color="red" text="This is a red box!" />
        <BoxColor color="green" text="This is a green box!" />
      </div>
    );
  }
  
  export default BoxGame;