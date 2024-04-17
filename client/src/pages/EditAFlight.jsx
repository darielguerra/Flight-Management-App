import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './EditAFlight.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const EditAFlight = () => {  

    const [flights, setFlights] = useState([]);

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


   /**
    * funtion for formating date using slice method
    * 
    * original format: yyyy-mm-dd
    * indexes:         0123456789  
    * 
    * slice syntax:
    * slice(indexStart)
    * slice(indexStart, indexEnd)
    */
    const formatDate = (date) => {
        //         month                  day               year: slicing fro 0 up to but not including 4
        date = date.slice(5, 7) + '/' + date.slice(8) + '/' + date.slice(0, 4);
        return date;
    }

    // format time
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
        <div className="dark">
        <div className="grid">
            {flights.map((flight, index) => {
                return (
                    <div key={flight._id} className="tile">
                        <div className="flightnumber"><strong>Flight#  </strong>{flight.flightNumber}</div>
                        <div><strong>Departure Date:  </strong>{formatDate(flight.departureDate)}</div>
                        <div><strong>Arrival Date:  </strong>{formatDate(flight.arrivalDate)}</div>
                        <div><strong>Departure Time: </strong>{formatTime(flight.departureTime)}</div>                        
                        <div><strong>Arrival Time:  </strong>{formatTime(flight.arrivalTime)}</div>
                        <div><strong>Departure Airport:  </strong>{flight.departureAirport}</div>
                        <div><strong>Arrival Airport:  </strong>{flight.arrivalAirport}</div>
                        <div><strong>Current Number Of Passengers:  </strong>{flight.currentNumberOfPassengers}</div>
                        <div><strong>Passenger Limit:  </strong>{flight.passengerLimit}</div>

                        <div className="buttons">
                            <Link to={"/updateaflight/"+flight.flightNumber} className="link btn">Update</Link>
                            <a href="http://localhost:3000/editaflight"><button onClick={() => handleDelete(flight.flightNumber)} className="btn">Delete</button>
                            </a>                        
                        </div>
                        </div>
            );
            })}
        </div>
        </div>
    );
}


 