import React from "react"
import MenùWorldNews from "./menù-worldNEws/menù1"
// import Menù2World from "../menù-worldNEws/menù2-World/menù2"
// import Menù2 from "../menù2"
// import Menù3 from "../menù3"
import Sidebar2 from "../WorldNews/Sidebar2/Sidebar2"
import Main4 from "../WorldNews/Main4/Main4"
import "./businessNews.css"
import Footer from "../footer/footer"

export default function BusinessNews() {
    const [article, setArticle] = React.useState([])

    React.useEffect(() => {
        fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=${process.env.REACT_APP_API_KEY}`)
        .then(Response => Response.json())
        .then(data => setArticle([data]))
    },[])

    const mapItem = article.map(item => {
        return(
        <div className="article-container5">
            <Main4
                titolo1={item.results[8].title}
                abstract1={item.results[8].abstract}
                url1={item.results[8].url}
                multimedia1={item.results[8].multimedia[1].url}
                titolo2={item.results[9].title}
                abstract2={item.results[9].abstract}
                url2={item.results[9].url}
                multimedia2={item.results[9].multimedia[1].url}
                titolo3={item.results[2].title}
                abstract3={item.results[2].abstract}
                url3={item.results[2].url}
                multimedia3={item.results[2].multimedia[1].url}
            />
            <Sidebar2
                titolo3={item.results[3].title}
                abstract3={item.results[3].abstract}
                url3={item.results[3].url}
                multimedia3={item.results[3].multimedia[0].url}
                titolo4={item.results[1].title}
                abstract4={item.results[1].abstract}
                url4={item.results[1].url}
                multimedia4={item.results[1].multimedia[0].url}
            />
        </div>
        )
    })

return(
    <div className="worldNews-container">
        <MenùWorldNews /> 
        {/* <Menù2World /> */}
        {mapItem}
        <Footer />
    </div>
)
}