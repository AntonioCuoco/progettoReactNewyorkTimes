import React from 'react';
import './App.css';
import MenùLogin from './component/loginPage/MenùLogin';
import Menù1 from './component/menu1/menù1';
import Menù2 from './component/menu2/menù2';
import Menù3 from './component/menu3/menù3';
import Sidebar from './component/sidebar/sidebar';
import Main from "./component/mainArticle/mainArticle1/Main";
import SecondMain from "./component/mainArticle/mainArticle2/Main2";
import ThirdMain from "./component/mainArticle/mainArticle3/ThirdMain";
import FourMain from './component/mainArticle/mainArticle4/Main4';
import Crypto from './component/sidebar/crypto-component/Crypto';
import MenùMobile from './component/menuHomeMobile/menùMobile';
import Footer from './component/footer/footer';
import ToopBook from './component/topBook/topBook';
import Articoli3 from './component/sidebar/articoli3/articoli3';

export default function App() {
  const [TopStories, setTopStories] = React.useState([])
  const [Counter, setCounter] = React.useState(0)

  React.useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(Response => Response.json())
    .then(data => setTopStories([data]))
  },[])

//  const sidebar = TopStories.map(item => {
//    return(
//      <Sidebar
//        key={item.results[0].id}
//        titolo={item.results[0].title}
//        abstract={item.results[0].abstract}
//        img1="https://static01.nyt.com/images/2023/04/02/fashion/00MINI-LIU-KLINKER/00MINI-LIU-KLINKER-mediumThreeByTwo440.jpg"
//      />
//    )
//  })

  const Main2 = TopStories.map(item => {
    return(
      <SecondMain
        titolo2={item.results[1].title}
        abstract2={item.results[1].abstract}
        titolo3={item.results[2].title}
        abstract3={item.results[2].abstract}
        img={item.results[1].multimedia[1].url}
        key={item.results[4].id}
      />
    )
  })

   const Main3 = TopStories.map(item => {
     return(
       <Main
         key={8}
        titolo3={item.results[6].title}
        abstract3={item.results[6].abstract}
        titolo4={item.results[7].title}
        abstract4={item.results[7].abstract}
       />
     )
   }
   )

   const Main4 = TopStories.map(item => {
     return(
       <ThirdMain
         key={9}
         titolo3={item.results[8].title}
         abstract3={item.results[8].abstract}
         titolo4={item.results[9].title}
         abstract4={item.results[9].abstract}
         titolo5={item.results[10].title}
         abstract5={item.results[10].abstract}
         titolo6={item.results[22].title}
         abstract6={item.results[22].abstract}
       />
     )
   }
   )

   const Main5 = TopStories.map(item => {
     return(
       <FourMain
         key={item.results[1].id}
         titolo4={item.results[3].title}
         abstract4={item.results[3].abstract}
         img1={item.results[3].multimedia[1].url}
         titolo5={item.results[4].title}
         abstract5={item.results[4].abstract}
         img2={item.results[4].multimedia[1].url}
         titolo6={item.results[5].title}
         abstract6={item.results[5].abstract}
         img3={item.results[5].multimedia[1].url}
       />
     )
   })

   const Main6 = TopStories.map(item => {
    return(
      <Articoli3 
        key={item.results[1].id}
        titolo4={item.results[14].title}
        abstract4={item.results[14].abstract}
        img1={item.results[14].multimedia[1].url}
        titolo5={item.results[15].title}
        abstract5={item.results[15].abstract}
        img2={item.results[15].multimedia[1].url}
        titolo6={item.results[16].title}
        abstract6={item.results[16].abstract}
        img3={item.results[16].multimedia[1].url}
      />
    )
  })
 
  return (
    
    <div className="App">
      <div className='menùMobile-APP'>
        <MenùMobile />
      </div>
      <div className='menùDesktop'>
        <Menù1 />
      </div>
      <Menù2 />
      <Menù3 />
      <div className='split-view-container'>
        <div className='split1'>
         <div className='split1-container'> 
          <div className='subSplit1'>
              {Main2}  
          </div>
          <div className='subsplit3'>
             {Main3} 
          </div>
         </div>
         </div>
         <div className='split1-container2'>
             {Main4}
         </div>
         <div className='crypto-mobile'>
            <Crypto />
         </div>
         <div className='split2-container'>
         <div className='Subsplit2-container'>
            <div className='Article-Container'>
                {Main5}
            </div>
            <div className='crypto-container2'>
                <ToopBook />
            </div>
            <div className='Article-Container2'>
                {Main6}
            </div>
          </div>
         <div className='split2'>
                <Sidebar /> 
        </div>
        </div>
        </div>
        <Footer />
      </div>
      
  );
}


