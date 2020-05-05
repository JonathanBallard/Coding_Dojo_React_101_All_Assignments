import React from 'react';


function InfoCard(props){
    // Outer Card Div
    return React.createElement('div', {className:"card"},
        // Card-Img-Top
        React.createElement('img', {src:props.image.path , alt:props.image.alt, className:"card-img-top", style:{width:"10%", height:"10%"}}),
        // Card Body
        React.createElement('div', {className:"card-body"},
            // Card-Title
            React.createElement('h5', {className:"card-title"}, props.title),
            // Card-Text
            React.createElement('p', {className:"card-text"}, props.text),
        )
    )
}






export default InfoCard;


