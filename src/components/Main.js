import React from "react";

export default function Main(props){
    return (
        <div className="card--div">
            <img src={props.imageUrl} alt="main pic" className="card--image" />
            <div className="text--container">
                <div className="card--location--container">
                    <img src="/assets/locationicon.png" alt="location icon" className="card--icon"/>
                    <p className="location-description">{props.location}</p>
                    <a href={props.googleMapsUrl} className="hyperlink" target="_blank">View on Google Maps</a>
                </div>
                <div className="card--description--container">
                    <p className="card--title">{props.title}</p>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
           
            
        </div>
    )
}