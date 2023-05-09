import "./main.css"

export default function Main(props) {
return(
    <div className="main-container">
        <h3 className="titolo-article">{props.titolo3}</h3>
        <p className="paragraph-article">{props.abstract3}</p>
        <h3 className="titolo-article2">{props.titolo4}</h3>
    </div>
)
} 