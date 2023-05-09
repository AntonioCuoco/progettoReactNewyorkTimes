import React from "react";
import "./menù1.css"
import { Link } from 'react-router-dom';
import MenùLeft from "./popUp-Menù/popUp-Menù";
import newyorktimeImg from "../../../image/TheNewYorkTime.PNG"

export default function MenùWorldNews(props) {

    const [searchBarVisibility, setSearchBarVisibility] = React.useState(false)
    const [leftMenùVisibility, setleftMenùVisibility] = React.useState(false) 

    function switchVisibility() {
        setSearchBarVisibility(searchVisibility => !searchVisibility)
        
    }

    function switchMenùVisibility() {
        setleftMenùVisibility(MenùVisibility => !MenùVisibility)
    }

    // if (leftMenùVisibility === true) {
    //     return(
    //         {Menuleft}
    //     )
    // }

    return (
        <div className="menù4-container">
            <nav className="nav-menù" style={{display: leftMenùVisibility ? "block" : "none"}}>
                <img src={newyorktimeImg} className="img-logo2" alt=""></img>
                <ul className="ul-menù">
                    <li className="item-list"><Link to="/opinion" className="link-item">Opinion</Link></li>
                    <li className="item-list"><Link to="/business" className="link-item">Business</Link></li>
                    <li className="item-list"><Link to="/world" className="link-item">World</Link></li>
                    <li className="item-list"><Link to="/us" className="link-item">U.s.</Link></li>
                    <li className="item-list"><Link to="/ny" className="link-item">N.Y.</Link></li>
                    <li className="item-list"><Link to="/scienze" className="link-item">Scienze</Link></li>
                    <li className="item-list"><Link to="/health" className="link-item">Health</Link></li>
                    <li className="item-list"><Link to="/sport" className="link-item">Sport</Link></li>
                    <li className="item-list"><Link to="/books" className="link-item">Books</Link></li>
                    <li className="item-list"><Link to="/arts" className="link-item">Arts</Link></li>
                    <li className="item-list"><Link to="style" className="link-item">Style</Link></li>
                    <li className="item-list"><Link to="/food" className="link-item">Food</Link></li>
                    <li className="item-list"><Link to="/travel" className="link-item">Travel</Link></li>
                </ul>

                <img src="https://img.icons8.com/ios-glyphs/30/null/multiply.png" className="img-chiusuraMenù" onClick={switchMenùVisibility}/>
                {/* <div className="container-articoli3">
                    <div className="subContainer-article1">
                        <h2>{props.titolo10}</h2>
                    </div>
                </div> */}
            </nav>
            <div className="icon-container">
                <div>
                    <i className="icon fa-solid fa-bars" onClick={switchMenùVisibility}></i>
                    <i className="icon fa-solid fa-magnifying-glass" onClick={switchVisibility}></i>
                    <input type="search" className="SearchBar" name="q" placeholder="Search..." style={{visibility:searchBarVisibility && "visible",}}></input>
                </div>
                <h3 className="title-page">N.Y. News</h3>
            </div>
                
            <div className="logoNewsWorld">
                <Link to="/"><img src={newyorktimeImg} className="logo-newsWorld" alt=""></img></Link>
            </div>
            
            <div className="button-container">
                <button className="button-menù">SUBSCRIBE FOR $0.50/WEEK</button>
                <Link to="/login"><button className="button-menù">Login</button></Link>
            </div>
        </div>
    )
}