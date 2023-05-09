import "./ThirdMain.css"

export default function ThirdMain(props) {
    return(
        <div className="article-container2">
            <div className="article-one2">
                <h3>{props.titolo3}</h3>
                {/* <p>{props.abstract3}</p> */}
                {/* aggiungere div per mettere l immagine e poi display flex column i due container */}
            </div>
            <div className="article-two2">
                    <h3>{props.titolo4}</h3>
                    {/* <p>{props.abstract4}</p> */}
            </div>
            <div className="article-three2">
                <h3>{props.titolo5}</h3>
                {/* <p>{props.abstract5}</p> */}
            </div>
            <div className="article-four2">
                <h3>{props.titolo6}</h3>
                {/* <p>{props.abstract6}</p> */}
            </div>
        </div>
    )
}