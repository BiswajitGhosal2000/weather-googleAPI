import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// const fetch = require('node-fetch');

export default function NavBar(props) {
    const [place, setPlace] = useState("");
    const handleChange = (e) => {
        setPlace(e.target.value)
    };
    const fetchWeatherData = async () => {
        const url = `http://api.weatherapi.com/v1/current.json?key=5fa5a03590e646cd9d855545232109&q=${place}&aqi=no`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        if (parsedData.error) {
            alert("Please enter a valid city name");
            return;
        }
        props.setWeather(
            {
                name: parsedData.location.name,
                temperature: parsedData.current.temp_c,
                feelsLike: parsedData.current.feelslike_c,
                condition: parsedData.current.condition.text,
                icon: parsedData.current.condition.icon,
            }
        );
    }
    // useEffect(() => {
    //     fetchWeatherData();
    //     //eslint-disable-next-line
    // }, [place])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container-fluid ">
                <img className="rounded" src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png" alt="logo" height={50} width={50} />
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <form className="d-flex ">
                        <input className="form-control me-2" type="search" onChange={handleChange} placeholder="Search" aria-label="Search" value={place} />
                        <Link to="/result" ><button className="btn btn-outline-light" onClick={fetchWeatherData} >Search</button></Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}
