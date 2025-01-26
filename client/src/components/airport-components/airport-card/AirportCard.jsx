import { useState } from "react";
import { EditAirportModal } from '../airport-modals/EditAirportModal';
import '../../../global-styles/Airports+PilotsPages.css'

export const AirportCard = (props) => {
  
  const [editAirportModal, setEditAirportModal] = useState(false);
  const airport = props.airport;
  console.log(props.airport);
  
  return (
    <div key={airport._id} className="ap-card" onClick={()=> setEditAirportModal(true)}>
      <div className="ap-airport-info">
        <div className="ap-airport-name">{airport.code}</div>
        <div className="ap-airport-location">{airport.city}, {airport.state}</div>
        <div className="ap-airport-date">{airport.timeStamp}</div>
      </div>      
      {editAirportModal && <EditAirportModal airport={airport} modalOpen={setEditAirportModal} refresh={props.refresh} />}
    </div>
  )

}