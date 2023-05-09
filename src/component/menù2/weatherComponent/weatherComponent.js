import "./weather.css"

export default function Weather(props) {
return(
<div className="div-weather">
 <img src={props.icona} alt="" className="weather-icon"></img>
 <h3 className="weather-item">{props.temperature}° </h3>
 <h3 className="weather-item">{props.humidity}% </h3>
</div>
)
}


