import logo from './logo.svg';
import './App.css';
import React from "react";
import lottie from "lottie-web";
import anima from "../src/anima.json";

function App() {
 
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#contenedorFondo"),
      animationData: anima
    });
  }, []);

  return (
    <div id='contenedorFondo'>
      <h1 className='titulo'>Comming Soon</h1>
    </div>
      
  );
}

export default App;
