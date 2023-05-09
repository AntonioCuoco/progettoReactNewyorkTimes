import React from "react"
import "./Sidebar2.css"

export default function Sidebar2(props) {
return(
    <div className="sidebar-articleContainer">
        <div className="container1">
            <img src={props.multimedia3}></img>
            <h2>{props.titolo3}</h2>
            <p>{props.abstract3}</p>
        </div>
        <div className="container2">
            <img src={props.multimedia4}></img>
            <h2>{props.titolo4}</h2>
            <p>{props.abstract4}</p>
        </div>

    </div>
)
}