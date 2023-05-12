import React from "react"
import "./topBook.css"
import MapItem from "./mapItem"

export default function ToopBook() {
    const[bookContainer, setbookContainer] = React.useState([])

    React.useEffect(() => {  
             fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${process.env.REACT_APP_API_KEY}`)
            .then(Response => Response.json())
            .then(data => setbookContainer([data.results]))
    },[])

    const book = bookContainer.map(item => {
        return(
            <MapItem 
                libro1Titolo={item.lists[2].books[0].title}
                libro1Description={item.lists[2].books[0].description}
                libro1Img={item.lists[2].books[0].book_image}
                libro1Esplora = {item.lists[2].books[0].amazon_product_url}
                libro1Rank = {item.lists[2].books[0].rank}
                libro2Titolo={item.lists[2].books[1].title}
                libro2Description={item.lists[2].books[1].description}
                libro2Img={item.lists[2].books[1].book_image}
                libro2Esplora = {item.lists[2].books[1].amazon_product_url}
                libro2Rank = {item.lists[2].books[1].rank}
                libro3Titolo={item.lists[2].books[2].title}
                libro3Description={item.lists[2].books[2].description}
                libro3Img={item.lists[2].books[2].book_image}
                libro3Esplora = {item.lists[2].books[2].amazon_product_url}
                libro3Rank = {item.lists[2].books[2].rank}
                libro4Titolo={item.lists[2].books[3].title}
                libro4Description={item.lists[2].books[3].description}
                libro4Img={item.lists[2].books[3].book_image}
                libro4Esplora = {item.lists[2].books[3].amazon_product_url}
                libro4Rank = {item.lists[2].books[3].rank}
            />
        )
    })

    return(
        <div>
            {book}
        </div>
    )
}