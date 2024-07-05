import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { EditIcon } from '../components/icons/EditIcon';
import { ArrowIcon } from '../components/icons/ArrowIcon';
import './FlightList.css';

import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';

export const FlightList = () => {  

    const [flights, setFlights] = useState([]);
    const theme = useTheme();

    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, []);

    const handleDelete = (key) => {
        axios.delete(`http://localhost:8085/flights/${key}`)
        .then (res => {
            if ( res.status === "201") {
                alert("deleted");
                this.loadData();
            } else {               
            }
        });
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
      <div className="page" >        
      
      <div className="pilots">
        <div><strong>Pilot:  </strong></div>
      </div>

      <div className="flights">
        {flights.map((flight, index) => {
          return (
            <div key={flight._id} className="flight-card">            
              <div className="flight-info">                         
                <div className="flightnumber"><p>Flight# {flight.flightNumber}</p></div>
                {/*<div className="flightnumber"><p><strong>Flight# </strong>{flight.flightNumber}</p></div>*/}
                <div className="flight-details">
                  <div className="airports">{flight.departureAirport}<ArrowIcon /><br />
                    {flight.arrivalAirport}
                  </div>
                  <div className="pilot-departure-arrival">
                    <h2>Pilot</h2>
                    Ron Perlman
                  </div>
                  <div className="pilot-departure-arrival">
                    <h2>Departs</h2>
                    <p>{formatDate(flight.departureDate)}<br /> at {formatTime(flight.departureTime)}</p>
                    {/*<div><strong>Current Number Of Passengers:  </strong>{flight.currentNumberOfPassengers}</div>*/}                  
                  </div> 
                  <div className="pilot-departure-arrival">
                    <h2>Arrives</h2>
                    {formatDate(flight.arrivalDate)}<br /> at {formatTime(flight.arrivalTime)}
                    {/*<div><strong>Passenger Limit:  </strong>{flight.passengerLimit}</div>*/}
                  </div>   
                </div>                   
              </div>      
              <div className="flight-buttons">
                <button className="btn edit"><Link to={"/updateaflight/"+flight.flightNumber } className="update-text"><EditIcon /></Link></button>
                <button onClick={() => handleDelete(flight.flightNumber)} className="btn delete">X</button>                    
              </div>                       
            </div>
          );
        })}
      </div>
            
        </div>
    );
}


 