import axios from 'axios';
import { API } from "../../App"
import { useState, useEffect } from "react";
import { FlightCard } from '../../components/flight-card/FlightCard';
import { PilotCard} from '../../components/pilot-card/PilotCard';
import { AirportCard } from '../../components/airport-card/AirportCard';
import './HomePage.css';

export const HomePage = () => {  

    const [flights, setFlights] = useState([]);
    const [pilots, setPilots] = useState([]);
    const [airports, setAirports] = useState([]);
  
    useEffect(() => {
        getFlights();
        getPilots();
        getAirports();
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

    const getAirports = () => {
      axios.get(`${API}/airports`)
          .then(res => {
            setAirports(res.data);
            console.log(res.data);
            console.log(airports)});
    }

    return (
      <div className="page">

     {/* Airports panel will be moved to new tab


        <div className="top-page">
         <div className="airport-panel">
          <div className="airport-title"><p>Airports</p></div> 
          <div className="airport-card-container">
          {airports.map(airport => {
            return (
              <AirportCard airport={airport} key={airport._id} refresh={getAirports}/>
            )
          })} 
          </div>          
        </div>    
       </div>
       */}

      <div className="pilots-flights-area" >  

       
        
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

    </div>
    );
}


 