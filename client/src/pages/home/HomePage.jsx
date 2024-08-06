import axios from 'axios';
import { API } from "../../App"
import { useState, useEffect } from "react";
import { FlightCard } from '../../components/flight-card/FlightCard';
import { PilotCard} from '../../components/pilot-card/PilotCard';
import './HomePage.css';

export const HomePage = () => {  

    const [flights, setFlights] = useState([]);
    const [pilots, setPilots] = useState([]);
    const [airports, setAirports] = useState([]);
  
    useEffect(() => {
        getFlights();
        getPilots();
    }, []);

    const getFlights = () => {
      axios.get(`${API}/flights`)
          .then(res => setFlights(res.data));
    }

    const getPilots = () => {
      axios.get(`${API}/pilots`)
          .then(res => { 
          setPilots(res.data);
          console.log(res.data)});
    }
 
    return (
      <div className="page" >        
        
        <div className="pilot-panel">
          <div className="pilot-title"><p>Pilots</p></div>
          {pilots.map(pilot => {
            return (
              <PilotCard pilot={pilot} key={pilot._id} refresh={getPilots} />
            );
          })}
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


 