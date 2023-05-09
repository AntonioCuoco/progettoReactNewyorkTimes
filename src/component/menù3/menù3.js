import React from "react"
import "./menù3.css"
import { Link } from "react-router-dom"

export default function Menù3() {
return(
    <div className="third-menù-container">
        <ul className="menù-list">
            <li className="menù-item"><Link to="/world" className="link-item">World</Link></li>
            <li className="menù-item"><Link to="/us" className="link-item">U.S</Link></li>
            <li className="menù-item"><Link to="/ny" className="link-item">N.Y.</Link></li>
            <li className="menù-item"><Link to="/business" className="link-item">Business</Link></li>
            <li className="menù-item"><Link to="/opinion" className="link-item">Opinion</Link></li>
            <li className="menù-item"><Link to="/scienze" className="link-item">Scienze</Link></li>
            <li className="menù-item"><Link to="/health" className="link-item">Health</Link></li>
            <li className="menù-item"><Link to="/sport" className="link-item">Sport</Link></li>
            <li className="menù-item"><Link to="/arts" className="link-item">Arts</Link></li>
            <li className="menù-item"><Link to="/books" className="link-item">Books</Link></li>
            <li className="menù-item"><Link to="/travel" className="link-item">Travel</Link></li>
            <li className="menù-item"><Link to="/food" className="link-item">Food</Link></li>
            <li className="menù-item"><Link to="style" className="link-item">Style</Link></li>
        </ul>
    </div>
)
}