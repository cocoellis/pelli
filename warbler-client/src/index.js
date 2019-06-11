import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker();