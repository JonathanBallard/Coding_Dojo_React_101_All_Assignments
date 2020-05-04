import React from 'react'
import ReactDOM from 'react-dom'
import RenderSquares from "./app";

function app(){
    
    return ReactDOM.render(<RenderSquares />,document.getElementById("root"));
}
app()