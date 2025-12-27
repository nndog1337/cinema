import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import Film from './pages/Film';
import Likes from './pages/Likes';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/film/:id' element={<Film/>}/>
      <Route path='/likes' element={<Likes/>}/>
    </Routes>
  </BrowserRouter>
)
