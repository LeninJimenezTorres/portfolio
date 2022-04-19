import './App.css';
import React , { useState } from "react";
import lottie from "lottie-web";
import useMouse from '@react-hook/mouse-position'
import anima from "../src/anima.json";
import introA from "../src/introA.json";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Technologies from "./Components/Technologies";
import ProfessionalLook from "./Components/ProfessionalLook";
import Works from "./Components/Works";


function App() {
    
    const [style, setStyle] = useState("circle");
    
    const cursor = React.useRef(null);

    const positionRef = useMouse(cursor, {
        enterDelay: 100,
        leaveDelay: 100,
    })

    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#animation"),
            animationData: introA,
            speed: 2,
            style: {position:'fixed',
            with:'auto',
            height: '100vh',
            "background-color": "transparent",
            },
        });
        
        
    }, []);

    // const estilosMouse = {
    //     display: "block",
    //     position: "relative",
    //     margin: "auto",
    //     "margin-top": "10px",
    //     width: "60px",
    //     height: "60px",
    //     "background-color": "rgba(0,0,20,0.5)",
    //     "border-radius": "50%",
    //     "box-shadow": "0px 0px 10px 4px rgba(255,255,255,1)",
    // };

    // function handleMouseDown() {     
    //     alert("onMouseDown");
    // };

    function mouseStyle(){
        setStyle("circle")
    }

    // function useMousePosition() {
    //     const [x, setX] = useState(null)
    //     const [y, setY] = useState(null)
        
    //     // We do not expose a way to update mouseX and mouseY
    //     // This will be handled within the hook itself
    //     return { mouseX: x, mouseY: y }
    // }
    
      
    return (
    <Router>
        <div className='contenedorAnimation' >
            {/* <div className='circle' ref={cursor}> </div> */}
            <div className='menu'>
                <ul className='lista'>
                    <li><Link to="/Technologies">Technologies</Link></li>
                    <li><Link to="/Works">Works</Link></li>
                    <li><Link to="/ProfessionalLook">Professional Look</Link></li>
                </ul> 
            </div>
            <div id='animation'></div>
            {/* 
            <lottie-player
            id='animation'
            src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
            >
            </lottie-player> 
            <h1 className='titulo'>Comming Soon</h1>
            <script crossorigin src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_dvy9mo06.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player>
        */}
        </div>
    </Router>

    );
}

export default App;
