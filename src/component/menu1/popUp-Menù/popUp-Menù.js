import React from "react";
import "./popUpMenù.css"

export default function MenùLeft(props) {
const [closeMenù, setCloseMenù] = React.useState(false)

function CloseMenù() {
    setCloseMenù(CloseMenù => !CloseMenù)
}

return(
    <nav className="nav-menù" style={{display: props.Visibility ? "block" : "none"}}>
                <ul className="ul-menù">
                    <li className="item-list">news</li>
                    <li className="item-list">business</li>
                    <li className="item-list">world</li>
                    <li className="item-list">u.s.</li>
                    <li className="item-list">n.y.</li>
                    <li className="item-list">scienze</li>
                    <li className="item-list">health</li>
                    <li className="item-list">sports</li>
                    <li className="item-list">book</li>
                    <li className="item-list">art</li>
                    <li className="item-list">style</li>
                    <li className="item-list">food</li>
                    <li className="item-list">travel</li>
                </ul>

                <img src="https://img.icons8.com/ios-glyphs/30/null/multiply.png" className="img-chiusuraMenù" onClick={CloseMenù}/>
                {/* <div className="container-articoli3">
                    <div className="subContainer-article1">
                        <h2>{props.titolo10}</h2>
                    </div>
                </div> */}
            </nav>
)
}