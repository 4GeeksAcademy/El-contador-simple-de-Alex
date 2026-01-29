import React from 'react'
import ReactDOM from 'react-dom/client'
import SecondsCounter from "./components/SecondsCounter.jsx";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

let seconds = 0;

const renderCounter = () => {
  root.render(
      <React.StrictMode>
        <SecondsCounter seconds={seconds} />
      </React.StrictMode>
  );
};

renderCounter();

setInterval(() => {
  seconds++;
  renderCounter();
}, 1000);