import axios from 'axios';
import { API } from "../../../App"
import { useState, useEffect } from "react";
import { EditFlightModal } from '../flight-modals/edit-flight-modal/EditFlightModal';
import { PilotIcon, DateIcon, AirportIcon, DepartingFlightIcon, ArrivingFlightIcon } from '../../../assets/svg-icons-new';
import './FlightCard.css';

export const FlightCard = (props) => {
      
  const flight = props.flight;
  console.log(flight.flightNumber);
  
   const [editFlightModal, setEditFlightModal] = useState(false);

  //saving airport to local variable incase
  //airport gets deleted
  const departureAirport = flight.departureAirport.map((airport) => {
     return airport.code;
  })

  console.log(departureAirport);

  useEffect(() => {
    console.log('Flight data:', flight);
  }, [flight]);


  // Format date using the slice method, original format: yyyy-mm-dd
  // slice syntax: slice(indexStart) or slice(indexStart, indexEnd) */    
  const formatDate = (date) => {
      //         month                  day               year: slicing from 0 up to but not including 4
      date = date.slice(5, 7) + '/' + date.slice(8) + '/' + date.slice(0, 4);
      return date;
  }

  // Format time     
  const formatTime = (time) => {

      // Splitting the time into hours and minutes
      const [hours, minutes] = time.split(':');
      
      // Formatting the time with AM/PM
      let formattedTime = '';
      if (hours < 12) {
          formattedTime = hours + ':' + minutes + ' AM';
      } else {
          formattedTime = (hours - 12) + ':' + minutes + ' PM';
      }
      
      return formattedTime;
  }

  return (
    <>
      <div onClick={() => setEditFlightModal(true)} key={flight._id} className="flight-card">        
        <div className="flight-info">  
          <div className="flight-header">                    
            <div className="flightnumber">
              <p>Flight {flight.flightNumber}</p>
            </div>           
            <div className="flight-card-airports">
              <AirportIcon />
              <div className="flight-airport-names">
                <div className="departure-airport">         
                  {flight.departureAirport && flight.departureAirport.map(airport=>(
                    <div className="departure-airport-name" key={airport._id}>{airport.code}  -{'>'}</div>                    
                  ))}{/*because returning array, had to map through it */}
                </div>
                {/*<div className="arrow-airports"> -{'>'} </div>*/}
                <div className="arrival-airport-name">
                  {flight.arrivalAirport && flight.arrivalAirport.map(airport =>
                    <div key={airport._id}> { airport.code}</div>
                  )}{/*will not load without flight.arrivalAirport && first */}
                </div>
              </div>
            </div>          
          </div>   
          <div className="flight-details">
            <div className="flight-details-headers">
              <div className="flight-details-title">
                <PilotIcon />
                <p className="flight-details-header-title">Pilot</p>
              </div>
              <div className="flight-details-title">
                <DepartingFlightIcon />
                <p className="flight-details-header-title">Departs</p>
              </div>
              <div className="flight-details-title">
                <ArrivingFlightIcon />  
                <p className="flight-details-header-title">Arrives</p>
              </div>
            </div>

            <div className="flight-details-content">
              <div className="pilot-date-time">
                {flight.pilot && flight.pilot.map(pilot =>
                  <p className="flight-pilot-name"key={pilot._id}>{pilot.firstName} {pilot.lastName}</p>
                )}
              </div>
              <div className="pilot-date-time">
                 <div className="date-icon-container"><DateIcon /></div>
                 <p>{formatDate(flight.departureDate)} - {formatTime(flight.departureTime)}</p></div>
                
                <div className="pilot-date-time">
                  <div className="date-icon-container"><DateIcon /></div>
                  <p>{formatDate(flight.arrivalDate)} - {formatTime(flight.arrivalTime)}</p>
                </div> 
              </div>
            </div>
            

            {/*
            <div className="pilot-departure-arrival">
              <div className="flight-details-header">
                <PilotIcon />
                <p className="flight-details-header-title">Pilot</p>
              </div>
              {flight.pilot && flight.pilot.map(pilot =>
                <p className="flight-pilot-name"key={pilot._id}>{pilot.firstName} {pilot.lastName}</p>
                )}
            </div>
            <div className="pilot-departure-arrival">
              <div className="flight-details-header">
                <DepartingFlightIcon />
                <p className="flight-details-header-title">Departs</p>
              </div>                
              <div className="date-time-info">
                  <div className="date-icon-container"><DateIcon /></div>
                  <p>{formatDate(flight.departureDate)} - {formatTime(flight.departureTime)}</p></div>
            </div> 
            <div className="pilot-departure-arrival">
              <div className="flight-details-header">
                <ArrivingFlightIcon />  
                <p className="flight-details-header-title">Arrives</p>
              </div>
              <div className="date-time-info">
                <div className="date-icon-container"><DateIcon /></div>
                <p>{formatDate(flight.arrivalDate)} - {formatTime(flight.arrivalTime)}</p>
              </div> 
            </div> 
             
          </div> */}                   
        </div>              
      </div> 
      {editFlightModal && <EditFlightModal flight={flight} editFlightOpen={setEditFlightModal} refresh={props.refresh} />} 
    </>     
    )
}