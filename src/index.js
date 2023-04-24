import React from "react"; //View library
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from "./reportWebVitals";
import App from "./containers/App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
