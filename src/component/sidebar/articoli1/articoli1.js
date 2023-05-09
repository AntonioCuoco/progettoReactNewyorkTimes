import "./articoli.css"
import React from "react"

export default function Articoli1(props) {
return(
 <div className="articoli1-container">
   <div className="articolo1-container">
    <div className="articolo1">
        <img src={props.img} className="img-articoli1" alt=""></img>
        <h2>{props.titolo2}</h2>
        <p>{props.abstract2}</p>
    </div>
    <div className="right-article-container">
        <div className="right-article1">
          <img className="img-right-article" src={props.img2} alt=""></img>
          <h2>{props.titolo3}</h2>
        </div>
        <div className="right-article2">
          <img className="img-right-article" src={props.img3} alt=""></img>
          <h2>{props.titolo4}</h2>
        </div>

    </div>
   </div> 
 </div>
)
}