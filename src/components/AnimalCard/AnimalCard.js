import React from "react";
import "./AnimalCard.css";

const AnimalCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectAnimal(props.animalType)} 
                className={props.currrentScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.animal} src={props.image} />
            </a>
        </div>
    </div>
);

export default AnimalCard;
