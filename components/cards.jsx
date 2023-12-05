import React from "react"

function Cards(props){
    return(
        <>
  
            <section className="cards-section">
                <img src={props.imageUrl}/>
                <div className="location">
                   <i className="fa-solid fa-location-dot fa-xs" style={{color: "#F55A5A",}}></i>
                   <p> {props.location} </p>
                   <a href = {props.googleMapsUrl}> View on Google Maps </a>
                    <h1>{props.title} </h1>
                </div>
                <div className="content">
                    <p id="dates"> {props.startDate} - {props.endDate} </p> 
                    <p> {props.description}</p> 
                </div>
            </section>
        </>
    )
    
}

export default Cards