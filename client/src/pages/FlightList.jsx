import axios from 'axios';
import { useState, useEffect } from "react";
import { FlightCard } from '../components/flight-card/FlightCard';
import './FlightList.css';

export const FlightList = () => {  

    const [flights, setFlights] = useState([]);
  
    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, []);

    return (
      <div className="page" >        
      
      <div className="pilots">
        <div><strong>Pilot:  </strong></div>
      </div>

      <div className="flights">
        {flights.map((flight, index) => {
          return (
             <FlightCard flight={flight} key={flight._id}/>
          );
        })}
      </div>
            
        </div>
    );
}


 