import React from "react";
import "./Nav.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li id='title'><img src='/img/np_logo.png' id='nplogo' alt='NP Logo'/>National Park Memory Game</li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span>{props.curScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navpills;

