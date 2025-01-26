import { useState } from "react";
import { EditPilotModal } from '../pilot-modals/EditPilotModal';
import '../../../global-styles/Airports+PilotsPages.css'


export const PilotCard = (props) => {

  const pilot = props.pilot;
  const [editPilotModal, setEditPilotModal] = useState(false);
  
  console.log(pilot);

  return (
    <div key={pilot._id} className="ap-card" onClick={() => setEditPilotModal(true)}>
      <div className="ap-pilot-info">
        <div className="ap-pilot-name-container">
          <img className="ap-pilot-image" src="images/1.jpg" alt="Pilot"/>
          <p className="ap-pilot-name">{pilot.firstName}{" "}{pilot.lastName}</p>         
        </div>  
        <div className="ap-pilot-location">Somewhere, Vermont</div>
        <div className="ap-pilot-date">Nov 22, 2024</div>       
      </div>
      {editPilotModal && <EditPilotModal pilot={pilot} modalOpen={setEditPilotModal} refresh={props.refresh} />}
    </div>
  )
}