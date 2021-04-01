import { StrictMode } from "react";
import ReactDOM from "react-dom";


import Board from "./board.jsx";



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Board />
  </StrictMode>,
  rootElement
);
