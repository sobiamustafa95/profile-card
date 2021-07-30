import React from "react"; 
import Heading from "./Heading";
import Images from "./Images";

const Card = (props) => {

    return (
        <>
            <div className = "cards">
                <div className = "card">
                    <Images imgsrc = {props.imgsrc} />
                    <div className = "card-info">
                        <span className = "card-category"> {props.title} </span>
                        <Heading sname = {props.sname} />
                        <a href = {props.link} target = "-blank">
                            <button> watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;