import React from "react";
import "./menù2.css"
import GetMonth from "./getMonth/getMonth";
import Weather from "./weatherComponent/weatherComponent";
import newyorktimeImg from "../../image/TheNewYorkTime.PNG"

export default function Menù2(props) {
const[WeatherData, setWeatherData] = React.useState([])

React.useEffect(() => {
fetch("https://api.weatherapi.com/v1/current.json?key=c812c24a649942ff86f81911230204&q=Salerno&aqi=no")
.then(Response => Response.json())
.then(data => setWeatherData([data.current.temp_c,data.current.condition.icon,data.current.humidity]))
},[])

return(
<div className="menù2-container">
    <div className="date-container">
        <GetMonth />
    </div>
    <div className="title-container">
       <img src={newyorktimeImg} className="img-logo" alt=""></img>
    </div>
    <div className="weather-container">
        <Weather temperature={WeatherData[0]} icona={WeatherData[1]} humidity={WeatherData[2]}/>
    </div>
</div>
)
}