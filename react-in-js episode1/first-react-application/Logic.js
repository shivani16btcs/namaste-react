//--------- tag in react-----------------
// <h1 id="head" xyx="xyx">hello world from React Application</h1> 

let heading = React.createElement(
  "h1",
  { id: "head", xyx: "xyx" },
  "hello world from React Application"
);
let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)


//---------nested tags-----------------
// <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//     </div>
// </div>

let parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am h1 tag")
  )
);
//root.render(parent);


//--------- siblings  tags ->  create array-----------------
// <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//         <h1>I am h1 tag</h1>
//     </div>
// </div>

let parent2 = React.createElement(
  "div",
  { id: "parent2" },
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);
//root.render(parent2);


//---------------- sibling child ->  create array-----------------
// <div id="parent">
//     <div id="child1">
//         <h1>I am h1 tag</h1>
//         <h1>I am h1 tag</h1>
//     </div>
//<     <div id="child2">
//         <h1>I am h1 tag</h1>
//         <h1>I am h1 tag</h1>
//     </div>
// </div>

let parent3 = React.createElement("div", { id: "parent3" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
root.render(parent3);
