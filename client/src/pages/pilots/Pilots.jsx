import axios from 'axios';
import { API } from "../../App"
import { useState, useEffect} from "react";
import { PilotCard} from '../../components/pilot-components/pilot-card/PilotCard';
import { AddPilotButton } from '../../components/pilot-components/add-pilot-button/AddPilotButton';
import './Pilots.css';

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
    <div className="pilots-flights-area" >  

      <div className="pilot-panel">
        <div className="pilot-title"><p>Pilots</p>
          <AddPilotButton refresh={getPilots}/>
        </div>
        {pilots.map(pilot => {
          return (
            <PilotCard pilot={pilot} key={pilot._id} refresh={getPilots} />
          );
        })}
        </div>
      </div>
)}