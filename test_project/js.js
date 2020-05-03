

console.log(React);
console.log(ReactDOM);


const helloReact = React.createElement("div", null, 
    React.createElement("h1", null, "HiHi"),
    React.createElement("p", null, "cool stuff"),
);


ReactDOM.render(helloReact, document.getElementById("root"));


