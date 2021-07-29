import React from "react"; 

const Card = (props) => {

    return (
        <>
            <div className = "cards">
                <div className = "card">
                    <img src = {props.imgsrc} alt = "myPic" className = "card-img" />
                    <div className = "card-info">
                        <span className = "card-category"> {props.title} </span>
                        <h3 className = "card-title"> {props.sname} </h3>
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