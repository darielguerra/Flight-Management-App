import axios from 'axios';
import { API } from "../../../App"
import { useState, useEffect } from "react";
import { EditIcon } from '../../../assets/svg-icons/EditIcon';
import { ArrowIcon } from '../../../assets/svg-icons/ArrowIcon';
import { FlightPlaneIcon } from '../../../assets/svg-icons/FlightPlaneIcon';
import { EditFlightModal } from '../flight-modals/edit-flight-modal/EditFlightModal';
import { UpdateFlightModal } from '../flight-modals/update-flight-modal/UpdateFlightModal';
import { DeleteModal } from '../../flight-components/flight-modals/delete-modal/DeleteModal';
import './FlightCard.css';

export const FlightCard = (props) => {
      
  const flight = props.flight;
  console.log(flight.flightNumber);

  useEffect(() => {
    console.log('Flight data:', flight);
  }, [flight]);

  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const [editFlightModal, setEditFlightModal] = useState(false);
  
  const handleDelete = async (flightNumber) => {
      try{
        await axios.delete(`${API}/flights/${flightNumber}`);
        props.refresh(); //calls FlightList's getFlights
      }
      catch (err) {
        console.log(err);
      }
  }

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
        
        <div className="flight-details">
          
          <div className="flight-info">                         
            <div className="flightnumber"><p>Flight# {flight.flightNumber}</p></div>
            <div className="flight-details">
              <div className="flight-card-airports">
                <div className="departure-airport">
                  <div className="departure-airport-name">             
                  {flight.departureAirport && flight.departureAirport.map(airport=>(
                    <div key={airport._id}>{airport.code}-{'>'}</div>                    
                  ))}{/*because returning array, had to map through it */}
                  </div>
                </div>
                <div className="arrival-airport-name">
                  {flight.arrivalAirport && flight.arrivalAirport.map(airport =>
                    <div key={airport._id}>{airport.code}</div>
                  )}{/*will not load without flight.arrivalAirport && first */}
                </div>
              </div>
              <div className="pilot-departure-arrival">
                <h2>Pilot</h2>
                {flight.pilot && flight.pilot.map(pilot =>
                    <div key={pilot._id}>{pilot.firstName} {pilot.lastName}</div>
                  )}
              </div>
              <div className="pilot-departure-arrival">
                <h2>Departs</h2>
                <p>{formatDate(flight.departureDate)}<br /> at {formatTime(flight.departureTime)}</p>
              </div> 
              <div className="pilot-departure-arrival">
                <h2>Arrives</h2>
                {formatDate(flight.arrivalDate)}<br /> at {formatTime(flight.arrivalTime)}
              </div>   
            </div>                   
          </div> 
        </div>  
        <div className="flight-border-line"></div>                
      </div> 

      {editFlightModal && <EditFlightModal flight={flight} editFlightOpen={setEditFlightModal} refresh={props.refresh} />} 
    </>     
    )
}