import axios from 'axios';
import { API } from "../../App"
import { useState, useEffect } from "react";
import { Switch } from '../../components/switch/Switch';
import { FlightCard } from '../../components/flight-card/FlightCard';
import { PilotCard} from '../../components/pilot-card/PilotCard';
import { AirportCard } from '../../components/airport-card/AirportCard';
import { FooterHome } from '../../components/footers/FooterHome';
import './HomePage.css';

export const HomePage = () => {  

    const [showAirports, setShowAirports] = useState(false);
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
      <div className="homepage">

        <div className="page">
   
        <div className="swith-area"> 
          <div className="switch-labels">
            <p>Flights </p><Switch setShowAirports={setShowAirports} showAirports={showAirports} /><p>Airports</p>
          </div>
        </div>

      {/* Airports panel will be moved to new tab*/}

        
          {/*<div className="top-page"></div>*/}

     
        

        <div className="pilots-flights-area" >  

          <div className="pilot-panel">
            <div className="pilot-title"><p>Pilots</p></div>
            {pilots.map(pilot => {
              return (
                <PilotCard pilot={pilot} key={pilot._id} refresh={getPilots} />
              );
            })}
          </div>

        {!showAirports && (
          <div className="flights">
            {flights.map((flight, index) => {
              return (
                <FlightCard flight={flight} key={flight._id} refresh={getFlights}/>
              );
            })}
          </div>
        )}

          {showAirports && (
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
          )}          
              
        </div>
      </div>  
        < FooterHome />      
    </div>
    );
}


 