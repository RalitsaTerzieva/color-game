
import { useState } from 'react';
import './color.css';


function BoxColor() {
  const initialColors = [
    "#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD",
    "#3498DB", "#1ABC9C", "#2ECC71", "#E67E22", "#E74C3C",
    "#D35400", "#2C3E50", "#F39C12", "#16A085", "#2980B9",
    "#34495E", "#27AE60", "#95A5A6", "#7F8C8D", "#C0392B",
    "#BDC3C7", "#9B59B6", "#3498DB", "#2ECC71", "#1ABC9C"
];

const [colors, setColors] = useState(initialColors);

const handleBoxClick = (index) => {
    const newColors = [...colors];
    newColors[index] = generateRandomColor();
    setColors(newColors);
};

const generateRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};

const generateBoxes = () => {
    return colors.map((color, index) => {
        const boxStyle = {
            backgroundColor: color,
            color: 'white',
            padding: '10px',
            margin: '2px',
            textAlign: 'center',
            border: '1px solid black',
            width: '50px',
            height: '50px',
            boxSizing: 'border-bopx'
        };

        return (
            <div 
                style={boxStyle} 
                key={index}
                onClick={() => handleBoxClick(index)}
            >
            </div>
        );
    });
};

return (
    <div className="boxesDiv">
        {generateBoxes()}
    </div>
);
}

export default BoxColor;