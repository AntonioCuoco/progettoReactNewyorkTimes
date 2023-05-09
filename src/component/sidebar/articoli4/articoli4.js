import "./articoli4.css"
import React from "react"

export default function Articoli4(props) {
return(
 <div className="articoli4-container">
 <div className="articolo4-container">
    <div className="articolo4">
        <img src={props.img1} className="img-articoli4" alt=""></img>
        <h2>{props.titolo8}</h2>
        <p>{props.abstract8}</p>
    </div>
 </div>

<div className="articolo4-container">
<div className="articolo4">
    <img src={props.img2} className="img-articoli4" alt=""></img>
    <h2>{props.titolo9}</h2>
    <p>{props.abstract9}</p>
</div>
</div>

<div className="articolo4-container">
    <div className="articolo4">
        <img src={props.img3} className="img-articoli4" alt=""></img>
        <h2>{props.titolo10}</h2>
        <p>{props.abstract10}</p>
    </div>
 </div>
 </div>
)
}