import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Info() {
    const [count, setCount] = useState(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0)


    const Clicked = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        document.onmousemove = function (e) {
            setX(e.pageX)
            setY(e.pageY)
        }
    })

    return (
        <div className='wrapper'>
            <p>You clicked <span>{count}</span> times</p>
            <button onClick={Clicked}>Click me</button>
            <p>X position: <span>{x}</span></p>
            <p>Y position: <span>{y}</span></p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Info />
    </React.StrictMode>
);


