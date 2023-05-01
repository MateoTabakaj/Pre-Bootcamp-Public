import React, { useState } from 'react';
import './boxes.css';

function Box() {
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [boxes, setBoxes] = useState([]);

    const createColor = (e) => {
        e.preventDefault();

        const newBox = { color, size };
        setBoxes([...boxes, newBox]);
        setColor('');
        setSize('');
    };

    return (
        <>
            <form onSubmit={createColor}>
                <label htmlFor="color">
                    Color:
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                </label>
                <label htmlFor="size">
                    Size:
                    <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
                </label>
                <input type="submit" value="Add" />
            </form>
            {boxes.map((box, index) => (
                <div key={index} className="box" style={{ backgroundColor: box.color, height: box.size, width: box.size }}></div>
            ))}
        </>
    );
}

export default Box;