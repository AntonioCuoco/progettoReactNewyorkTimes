import "./articoli3.css"
import React from "react"

export default function Articoli3(props) {

return(
    <div className="article-container3">
            <div className="article-one">
                <div className="article-paragraph">
                    <h3>{props.titolo4}</h3>
                    <p>{props.abstract4}</p>
                    </div>
                    <div className="image-container">
                        <img src={props.img1} alt="" className="image-container5"></img>
                    </div>
            </div>
            <div className="article-two">
                <div>
                    <h3>{props.titolo5}</h3>
                    <p>{props.abstract5}</p>
                </div>
                <div className="image-container2">
                    <img src={props.img2} alt="" className="image-container5"></img>
                </div>
            </div>
            <div className="article-three">
                <div>
                <h3>{props.titolo6}</h3>
                <p>{props.abstract6}</p>
                </div>
                <div className="image-container3">
                    <img src={props.img3} alt="" className="image-container5"></img>
                </div>
            </div>
    </div>
)
}