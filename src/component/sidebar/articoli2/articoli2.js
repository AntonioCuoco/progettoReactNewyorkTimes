import "./articoli2.css"
import React from "react"

export default function Articoli2(props) {
return(
 <div className="articoli2-container">
    <div className="articolo2">
        <img src={props.img} className="img-articoli2" alt=""></img>
        <h2>{props.titolo2}</h2>
        <p>{props.abstract2}</p>
    </div>
 </div>
)
}