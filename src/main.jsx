import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import Film from './pages/Film';
import Likes from './pages/Likes';
import Header from './components/layout/header/Header';
import Search from './pages/Search';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/film/:id' element={<Film/>}/>
      <Route path='/likes' element={<Likes/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
  </BrowserRouter>
)
