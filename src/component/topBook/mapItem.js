import "./mapItem.css"

export default function MapItem(props) {
    return(
    <div className="topBookPrincipalContainer">
       <h2 className="title-toopBook">Top Book</h2>
        <div className="topBookWrapper">
            <div className="topBook-container1">
                <div className="subTopBook-container1">
                    <img src={props.libro1Img} alt="" className="img-toopBook"></img>
                    <h2 className="titolo-libro">{props.libro1Rank}) {props.libro1Titolo}</h2>
                    <h4 className="description-toopBook">{props.libro1Description}</h4>
                    <p><a href={props.libro1Esplora} className="esplora-topBook">scopri di più</a></p>
                </div>
                <div className="subTopBook-container2">
                    <img src={props.libro2Img} alt="" className="img-toopBook"></img>
                    <h2 className="titolo-libro">{props.libro2Rank}) {props.libro2Titolo}</h2>
                    <h4 className="description-toopBook">{props.libro2Description}</h4>
                    <p><a href={props.libro2Esplora} className="esplora-topBook">scopri di più</a></p>
                </div>
            </div>
            <div className="topBook-container2">
                <div className="subTopBook-container3">
                    <img src={props.libro3Img} alt="" className="img-toopBook"></img>
                    <h2 className="titolo-libro">{props.libro3Rank}) {props.libro3Titolo}</h2>
                    <h4 className="description-toopBook">{props.libro3Description}</h4>
                    <p><a href={props.libro3Esplora} className="esplora-topBook">scopri di più</a></p>
                </div>
                <div className="subTopBook-container4">
                    <img src={props.libro4Img} alt="" className="img-toopBook"></img>
                    <h2 className="titolo-libro">{props.libro4Rank}) {props.libro4Titolo}</h2>
                    <h4 className="description-toopBook">{props.libro4Description}</h4>
                    <p><a href={props.libro4Esplora} className="esplora-topBook">scopri di più</a></p>
                </div>
            </div>
        </div>
    </div> 
    )
}