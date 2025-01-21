import axios from 'axios';
import { API } from "../../App"
import { useState, useEffect, useCallback } from "react";
import { FlightCard } from '../../components/flight-components/flight-card/FlightCard';
import { AddFlightButton } from '../../components/flight-components/add-flight-button/AddFlightButton';
import { FooterHome } from '../../components/global-components/footers/FooterHome';
import './Flights.css';

export const Flights = () => {  

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        getFlights();
    }, []);



    const getFlights = useCallback(() => {
      axios.get(`${API}/flights`)
          .then(res => {
            setFlights(res.data)
            console.log('FLights fetched:',res.data)})
    }, []);


    return (
      <>
      <div className="flights-page">
        <div className="page"> 
          
          <div className="flights">
            {flights.map((flight, index) => {
              return (
                <FlightCard flight={flight} key={flight._id} refresh={getFlights}/>
              );
            })}
          </div>
          
          <div className="add-flight-area">
                  <AddFlightButton />
          </div>
      </div> 
    </div>   
    < FooterHome />
    </>   
    );
}


 