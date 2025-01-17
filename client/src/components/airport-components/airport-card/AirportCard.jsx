import { useState } from "react";
import { EditAirportModal } from '../airport-modals/EditAirportModal';
import '../../../global-styles/Airports+PilotsPages.css'

export const AirportCard = (props) => {
  
  const [editAirportModal, setEditAirportModal] = useState(false);
  const airport = props.airport;
  console.log(props.airport);
  
  return (
    <div key={airport._id} className="ap-card">
      <button onClick={()=> setEditAirportModal(true)} className="ap-edit-modal-btn">
        <div className="ap-info">
          <div className="ap-name">{airport.code}</div>
          <div className="ap-location">{airport.city}, {airport.state}</div>
          <div className="ap-date">Nov 22, 2024</div>
        </div>
      </button>
      {editAirportModal && <EditAirportModal airport={airport} modalOpen={setEditAirportModal} refresh={props.refresh} />}
    </div>
  )

}