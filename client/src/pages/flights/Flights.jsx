import axios from 'axios';
import { API } from "../../App"
import { useState, useEffect, useCallback } from "react";
import { Switch } from '../../components/home-components/switch/Switch';
import { FlightCard } from '../../components/flight-components/flight-card/FlightCard';
import { AddFlightButton } from '../../components/flight-components/add-flight-button/AddFlightButton';
import { AirportCard } from '../../components/airport-components/airport-card/AirportCard';
import { AddAirportButton } from '../../components/airport-components/add-airport-button/AddAirportButton';
import { FooterHome } from '../../components/global-components/footers/FooterHome';
import './Flights.css';

export const Flights = () => {  

    const [showAirports, setShowAirports] = useState(false);
    const [flights, setFlights] = useState([]);
    const [airports, setAirports] = useState([]);
  
    useEffect(() => {
        getFlights();
        getAirports();
    }, []);



    const getFlights = useCallback(() => {
      axios.get(`${API}/flights`)
          .then(res => {
            setFlights(res.data)
            console.log('FLights fetched:',res.data)})
    }, []);



    const getAirports = () => {
      axios.get(`${API}/airports`)
          .then(res => {
            setAirports(res.data);
            console.log(res.data);
            console.log(airports)});
    }

    return (
      <>
      <div className="homepage">

        <div className="page">
   
        <div className="switch-area"> 
          <div className="switch-labels">
            <p className="flights-switch-label">Flights</p>
            <Switch setShowAirports={setShowAirports} showAirports={showAirports} />
            <p className="airports-switch-label">Airports</p>
          </div>
        </div>
 
      

   

        {!showAirports && (
          <>
            <div className="flights">
              {flights.map((flight, index) => {
                return (
                  <FlightCard flight={flight} key={flight._id} refresh={getFlights}/>
                );
              })}
            </div>
                  
          </>
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
                < AddAirportButton refresh={getAirports} />
              </div>          
            </div>    
          )}          
              
   
        <div className="push"></div>
      </div>  
    </div>   
    < FooterHome />
    </>   
    );
}


 