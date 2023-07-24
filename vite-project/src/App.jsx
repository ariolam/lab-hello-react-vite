import { useState } from "react";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menu from "./assets/menu-top-xs.png";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <img src={ironhackLogo} alt="logo" className="icon" />
            <img src={menu} alt="menu" />
            <div className="content">
                <h1> Say hello to ReactJS</h1>
                <p>
                    We will learn how to use the most popular frontend librar,
                    and become super Ninja developer.{" "}
                </p>
                <button> Awesome! </button>
            </div>
            <div>
                <img src={icon1} alt="icon1" />
                <img src={icon2} alt="icon2" />
                <img src={icon3} alt="icon3" />
                <img src={icon4} alt="icon4" />
            </div>
        </div>
    );
}

export default App;
