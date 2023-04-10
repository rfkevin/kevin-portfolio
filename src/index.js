import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
 console.log(process.env.REACT_APP_OTHER_OTHER_THING, 'DOTENV')
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
