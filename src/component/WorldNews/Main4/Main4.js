import React from "react"
import "./Main4.css"

export default function Main4(props) {
return(
    <div className="Main-articleContainer">
        <div className="article1-Container">
            <img src={props.multimedia1} alt="" className="img-Main4"></img>
            <h2>{props.titolo1}</h2>
            <p>{props.abstract1}</p>
        </div>
        <div className="article2-Container">
            <div className="article2-subContainer">
                <img src={props.multimedia2} alt="" className="img2-Main4"></img>
                <h2>{props.titolo2}</h2>
                <p>{props.abstract2}</p>
            </div>
            <div className="article2-subContainer2">
                <img src={props.multimedia3} alt="" className="img3-Main4"></img>
                <h2>{props.titolo3}</h2>
                <p>{props.abstract3}</p>
            </div>
        </div>
    </div>
)
}