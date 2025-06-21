import { Route, Link, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import "./App.css";
import React, { useState, useEffect } from 'react';

import HomePage from "./Home";
import AboutPage from './About';
import NewsPage from './News';
import ContactPage from './Contact';
import Layout from './components/Layout';

function App() {
  const [theme, setTheme] = useState('black');

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return(
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage onThemeChange={setTheme} />} />
        <Route path="/about" element={<AboutPage onThemeChange={setTheme} />} />
        <Route path="/news" element={<NewsPage onThemeChange={setTheme} />} />
        <Route path="/contact" element={<ContactPage onThemeChange={setTheme} />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export function NewPage() {

}


export default App;
