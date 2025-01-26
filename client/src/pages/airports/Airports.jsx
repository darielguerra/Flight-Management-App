import axios from 'axios';
import { API } from "../../App"
import { useState, useEffect} from "react";
import { AirportCard } from '../../components/airport-components/airport-card/AirportCard';
import { AddAirportButton } from '../../components/airport-components/add-airport-button/AddAirportButton';
import '../../global-styles/Airports+PilotsPages.css'

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
    <div className="ap-page">
      <div className="ap-select-item">Select an Airport to edit.</div>
      <div className="ap-window">
        <div className="ap-airport-titles">
          <p className="ap-airport-title-name">Airport Code</p>  
          <p className="ap-airport-title-loaction">Location</p>  
          <p className="ap-airport-title-date">Date Added</p>  
        </div> 

          {airports.map(airport => {
            return (
              <AirportCard airport={airport} key={airport._id} refresh={getAirports}/>
            )
          })} 
          
          <AddAirportButton refresh={getAirports} />    
      </div>    
    </div>    
)}