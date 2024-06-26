import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.component";

const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App /> //jsx element
);
{
  /* <App/> --> this app means, see below
React.createElement(element,null,innerText)
 
Example : 
<App/> ==> <h1>Hello Shakil</h1>
React.createElement(h1,null,Hello Shakil) */
}
