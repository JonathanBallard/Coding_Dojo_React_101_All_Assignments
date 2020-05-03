
const title = React.createElement("h1", {className:"display-1"},"Hello Dojo!");
const todo1 = React.createElement("li", null, "Learn React");
const todo2 = React.createElement("li", null, "Climb Mt. Everest");
const todo3 = React.createElement("li", null, "Run A Marathon");
const todo4 = React.createElement("li", null, "Feed the cat");

const todoList = React.createElement("ul", {className:"text-primary"},
todo1,
todo2,
todo3,
todo4,

);

const outerDiv = React.createElement('div', null,
    title,
    todoList,
);



ReactDOM.render(outerDiv,document.getElementById("reactStuff"));






