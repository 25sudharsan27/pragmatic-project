import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router, Routes,Route } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Services from './Pages/Services/Services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
    <Routes>
        
        <Route exact path="/" element={<Home />}/>
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/services/:id" element={<Services/>} />
        <Route path="/blogs/:id" element={<Blogs/>} />

      </Routes>
      
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
