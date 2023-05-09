import React from "react"
import "../sidebar/sidebar.css"
import Crypto from "./crypto-component/Crypto"

export default function Sidebar() {
// const [TopStories2, setTopStories2] = React.useState([])
// React.useEffect(() => {
//     fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ckWbHJh5FHfknu1LNNiwRv03F8tdT1og")
//     .then(Response => Response.json())
//     .then(data => setTopStories2([data]))
// },[])

// const articoli1 = TopStories2.map(item => {
//     return(
//       <Articoli1
//         titolo1={item.results[6].title}
//         abstract1={item.results[6].abstract}
//         titolo2={item.results[7].title}
//         abstract2={item.results[7].abstract}
//         img={item.results[6].multimedia[1].url}
//         key={6}
//       />
//     )
//   })

return(
    <div className="sidebar-container">
        <Crypto />
    </div>
)
}