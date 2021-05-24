import "./assets/fonts/Rota/Rota-Black.otf";
import "./assets/fonts/Rota/Rota-ExtraBold.otf";
import "./assets/fonts/Rota/Rota-Regular.otf";
import "./assets/fonts/Monserrat/Montserrat-SemiBold.ttf";
import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
