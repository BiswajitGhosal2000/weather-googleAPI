import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  const apiKey = process.env.WEATHER_API;
  const [weather, setWeather] = useState({
    name: "",
    temperature: 0,
    feelsLike: 0,
    condition: "",
    icon: "",
  });
  return (

    <BrowserRouter>
      <NavBar weather={weather} setWeather={setWeather} apiKey={apiKey} />
      <Routes>
        <Route path="/" element={<Home weather={weather} />} />
        <Route path="/result" element={<Home weather={weather} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
