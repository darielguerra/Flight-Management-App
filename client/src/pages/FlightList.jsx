import axios from 'axios';
import { API } from "../App"
import { useState, useEffect } from "react";
import { FlightCard } from '../components/flight-card/FlightCard';
import './FlightList.css';

export const FlightList = () => {  

    const [flights, setFlights] = useState([]);
  
    useEffect(() => {
        getFlights();
    }, []);

    const getFlights = () => {
      axios.get(`${API}/flights`)
            .then(res => setFlights(res.data));
    }
 
    return (
      <div className="page" >        
        
        <div className="pilots">
          <div><strong>Pilot:  </strong></div>
        </div>

        <div className="flights">
          {flights.map((flight, index) => {
            return (
              <FlightCard flight={flight} key={flight._id} refresh={getFlights}/>
            );
          })}
        </div>
            
      </div>
    );
}


 