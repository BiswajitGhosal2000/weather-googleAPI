import React from 'react';
// import { useState } from 'react';

export default function Home(props) {

    return (
        <section style={{ height: "90vh" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-10 col-lg-8 col-xl-6">

                        <div className="card bg-dark text-white" style={{ borderRadius: "40px" }}>

                            <div className="bg-image" style={{ borderRadius: "35px" }}>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                                    className="card-img" alt="weather" />
                                <div className="mask" style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}></div>
                            </div>
                            <div className="card-img-overlay text-dark p-5" hidden={props.weather.name}>
                                <div className="card-header">
                                    <h1 className="display-4 text-center">Weather Report</h1>
                                </div>
                                <h1>Please search for a city name in the search bar to get result</h1>
                            </div>
                            <div className="card-img-overlay text-dark p-5" hidden={!props.weather.name}>
                                <div className="card-header d-flex">
                                    <h1 className="display-4 text-center">Weather Report</h1>
                                    <img src={props.weather.icon} alt="..." />
                                </div>
                                <h4 className="my-3"> Place: {props.weather.name}</h4>
                                <h4 className=" my-3">Temperature: {props.weather.temperature}</h4>
                                <h4 className="my-3">Feels Like: <strong>{props.weather.feelsLike}</strong></h4>
                                <h4 className='my-3'>Condition: {props.weather.condition}</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
