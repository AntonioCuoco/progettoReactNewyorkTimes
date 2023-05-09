import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MenùLogin from './component/loginPage/MenùLogin';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import WorldNews from './component/WorldNews/WorldNews';
import USnews from './component/u.sNews/U.S-News';
import NYnews from './component/nyNews/nyNews';
import OpinionNews from './component/opinionNews/opinionNews';
import ScienzeNews from './component/scienzeNews/scienzeNews';
import HealthNews from './component/healthNews/healthNews';
import SportsNews from './component/sportNews/sportNews';
import BooksNews from './component/booksNews/booksNews';
import FoodNews from './component/foodNews/foodNews';
import StyleNews from './component/styleNews/styleNews';
import TravelNews from './component/travelNews/travelNews';
import BusinessNews from './component/businessNews/businessNews';
import ArtsNews from './component/artsNews/artsNews';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/login' element={<MenùLogin />}/>
      <Route path='/world' element={<WorldNews />}/>
      <Route path='/us' element={<USnews />}/>
      <Route path='/ny' element={<NYnews />}/>
      <Route path='/business' element={<BusinessNews />}/>
      <Route path='/opinion' element={<OpinionNews />}/>
      <Route path='/scienze' element={<ScienzeNews />}/>
      <Route path='/health' element={<HealthNews />}/>
      <Route path='/sport' element={<SportsNews />}/>
      <Route path='/arts' element={<ArtsNews />}/>
      <Route path='/books' element={<BooksNews />}/>
      <Route path='/travel' element={<TravelNews />}/>
      <Route path='/food' element={<FoodNews />}/>
      <Route path='/style' element={<StyleNews />}/>
  1  </Routes>
    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}
  </BrowserRouter>
);
