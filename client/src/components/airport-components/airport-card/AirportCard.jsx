import { useState } from "react";
import { EditAirportModal } from '../airport-modals/EditAirportModal';
import './AirportCard.css'

export const AirportCard = (props) => {
  
  const [editPilotModal, setEditPilotModal] = useState(false);
  const airport = props.airport;
  console.log(props.airport);
  
  return (
    <div key={airport._id} className="airport-card">
      <button onClick={()=> setEditPilotModal(true)} className="airport-btn">
        <div className="airport-info">
          <div className="code">{airport.code}</div>
          <div className="city-state">{airport.city}, {airport.state}</div>
        </div>
      </button>
      {editPilotModal && <EditAirportModal airport={airport} modalOpen={setEditPilotModal} refresh={props.refresh} />}
    </div>
  )

}