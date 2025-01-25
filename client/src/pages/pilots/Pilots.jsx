import axios from 'axios';
import { API } from "../../App"
import { useState, useEffect} from "react";
import { PilotCard} from '../../components/pilot-components/pilot-card/PilotCard';
import { AddPilotButton } from '../../components/pilot-components/add-pilot-button/AddPilotButton';
import '../../global-styles/Airports+PilotsPages.css'

 export const Pilots = () => { 

  const [pilots, setPilots] = useState([]);

  useEffect(() => {
        getPilots();
    }, []);

  const getPilots = () => {
    axios.get(`${API}/pilots`)
        .then(res => { 
        setPilots(res.data);
        console.log('Pilots fetched:',res.data)});
  } 

  return (
    <div className="ap-page">
      <div className="ap-select-item">Select a Pilot to edit.</div>
      <div className="ap-window">
        <div className="ap-titles">
          <p className="ap-title-name">Pilot</p>  
          <p className="ap-title-loaction">Base Location</p>  
          <p className="ap-title-date">Date Joined</p>  
        </div> 

        {pilots.map(pilot => {
          return (
            <PilotCard pilot={pilot} key={pilot._id} refresh={getPilots} />
          );
        })}
        <AddPilotButton refresh={getPilots}/>
      </div>
    </div>
)}