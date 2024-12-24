import axios from 'axios';
import { API } from "../../App"
import { useState, useEffect} from "react";
import { AirportCard } from '../../components/airport-components/airport-card/AirportCard';
import { AddAirportButton } from '../../components/airport-components/add-airport-button/AddAirportButton';
import './Airports.css'

export const Airports = () => {

  const [airports, setAirports] = useState([]);

  useEffect(() => {
    getAirports();
  }, []);

const getAirports = () => {
  axios.get(`${API}/airports`)
      .then(res => {
        setAirports(res.data);
        console.log(res.data);
        console.log(airports)});
}

  return (
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