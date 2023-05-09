import React from "react"
import "../crypto-component/Crypto.css"
import Articoli1 from "../articoli1/articoli1"
import Articoli2 from "../articoli2/articoli2"
import Articoli4 from "../articoli4/articoli4"

export default function Crypto() {
const [CryptoContainer, setCryptoContainer] = React.useState([])
const [counter2, setCounter2] = React.useState(0)
const [Topstories, setTopStories] = React.useState([])

React.useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
    .then(Response => Response.json())
    .then(data => setCryptoContainer(data.data[counter2]))
},[counter2])

React.useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ckWbHJh5FHfknu1LNNiwRv03F8tdT1og")
    .then(Response => Response.json())
    .then(data => setTopStories([data]))
  },[])

function augment() {

    setCounter2(prevCounter2 => prevCounter2 + 1)

}

const articoli1 = Topstories.map(item => {
    return(
      <Articoli1
        titolo2={item.results[18].title}
        abstract2={item.results[18].abstract}
        titolo3={item.results[2].title}
        // abstract3={item.results[2].abstract}
        titolo4={item.results[19].title}
        img={item.results[18].multimedia[2].url}
        img2={item.results[2].multimedia[2].url}
        img3={item.results[19].multimedia[2].url}
        key={1}
      />
    )
  })

  const articoli2 = Topstories.map(item => {
    return(
      <Articoli2
        titolo2={item.results[20].title}
        abstract2={item.results[20].abstract}
        img={item.results[20].multimedia[2].url}
        key={1}
      />
    )
  })

  const articoli3 = Topstories.map(item => {
    return(
      <Articoli4
        titolo8={item.results[12].title}
        abstract8={item.results[12].abstract}
        img1={item.results[12].multimedia[2].url}
        titolo9={item.results[13].title}
        abstract9={item.results[13].abstract}
        img2={item.results[13].multimedia[2].url}
        titolo10={item.results[11].title}
        abstract10={item.results[11].abstract}
        img3={item.results[11].multimedia[2].url}
        key={1}
      />
    )
  })

return(

    //    {cryptoMap}
<div className="sidebar2-container">
    <div>
      {articoli2}
    </div>
    <div className="crypto-container">
        <h1>{CryptoContainer.name} - {CryptoContainer.symbol}</h1>
        <h3>priceUsd : {CryptoContainer.priceUsd}</h3>
        <h3>changePercent24Hr : {CryptoContainer.changePercent24Hr}%</h3>
        <div className="OtherInformation-container">
            <button onClick={augment} className="btn-nextCrypto">Next Crypto</button>
            <a href={CryptoContainer.explorer} className="otherInformation">Other Information</a>
        </div>
    </div>
    <div className="articoli-container">
        {articoli1}
    </div>
    <div>
      {articoli3}
    </div>
</div> 
)
}