const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"}, [
        React.createElement("h1",{}, "i a Bhargav"),
        React.createElement("h1",{},"this is Palav"),
    ]),

    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{}, "This is bhargav"),
        React.createElement("h2",{}, "This is bhargav"),
    ])
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent)