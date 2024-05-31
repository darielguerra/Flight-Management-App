import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './FlightList.css';
//import 'bootstrap/dist/css/bootstrap.min.css'; 

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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


   /**
    * Format date using the slice method
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

    
    /**
     * Format time
     */
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
        <div className="page" style={{ backgroundColor: theme.palette.secondary.main, 
            backgroundImage: "url(images/Gulfstream.webp)" }}>
            

                <Card className="pilots" variant="outlined" style={{ backgroundColor: theme.palette.primary.light }}>
                    <div><strong>Pilot:  </strong></div>
                </Card>

                <div className="flights">
                    {flights.map((flight, index) => {
                        return (
                            <Card key={flight._id} className="flight-card" variant="outlined" style={{ backgroundColor: theme.palette.primary.light }}>                               
                                
                                <div className="flightnumber"><strong>Flight#  </strong>{flight.flightNumber}</div>
                               
                                <div className="departure">
                                    <div><strong>Departure Date:  </strong>{formatDate(flight.departureDate)}</div>
                                    <div><strong>Departure Time: </strong>{formatTime(flight.departureTime)}</div> 
                                    <div><strong>Departure Airport:  </strong>{flight.departureAirport}</div> 
                                    <div><strong>Current Number Of Passengers:  </strong>{flight.currentNumberOfPassengers}</div>                       
                                </div>

                                <div className="arrival">
                                    <div><strong>Arrival Date:  </strong>{formatDate(flight.arrivalDate)}</div>
                                    <div><strong>Arrival Time:  </strong>{formatTime(flight.arrivalTime)}</div>
                                    <div><strong>Arrival Airport:  </strong>{flight.arrivalAirport}</div>
                                    <div><strong>Passenger Limit:  </strong>{flight.passengerLimit}</div>
                                </div>                                       
             
                                <div className="buttons">
                                    <Link to={"/updateaflight/"+flight.flightNumber} className="btn">Update</Link>
                                    <a href="http://localhost:3000/editaflight"><button onClick={() => handleDelete(flight.flightNumber)} className="btn">Delete</button></a>                        
                                </div>
                            </Card>
                    );
                    })}
                </div>
            
        </div>
    );
}


 