//adding element under html body tag using JS
// const jsHeading = document.createElement("headingJS");
// jsHeading.innerHTML = "Hello World Js";
// document.getElementById('root').appendChild(jsHeading);

//adding element under html body tag using React
// const h1 = React.createElement("h1", { id: "heading" }, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);

//parent child tags
const child = React.createElement("h2", { id: "child" }, "Im an h2 Child Element");
const child2 = React.createElement("h2", { id: "child" }, "Im an h2 Child2 Element");
const parent = React.createElement("div", { id: "parent" }, [child, child2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
