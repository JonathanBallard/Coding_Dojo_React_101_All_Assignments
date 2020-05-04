import React from 'react';
import ReactDOM, { render } from 'react-dom';



const Square = (props) => {
    // const { color, textColor } = props;
    const BGcolor = props.BGcolor;
    const textColor = props.textColor;
    return React.createElement("div", {style:{width:"200px",height:"200px", backgroundColor: BGcolor, color: textColor}, className:"border border-dark d-inline-block"}, "This is a " + BGcolor + " square");
}

const redSquare = Square({BGcolor:"red", textColor:"black"});
const blueSquare = Square({BGcolor:"blue", textColor:"white"});
const yellowSquare = Square({BGcolor:"yellow", textColor:"green"});

const RenderSquares = (props) => {
    return React.createElement("div", null, 
        redSquare,
        blueSquare,
        yellowSquare,
    )
}

export default RenderSquares;



