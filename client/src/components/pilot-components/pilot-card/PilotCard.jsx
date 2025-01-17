import { useState } from "react";
import { EditPilotModal } from '../pilot-modals/EditPilotModal';
import { PilotCardIcon } from '../../../assets/svg-icons/PilotCardIcon';
import '../../../global-styles/Airports+PilotsPages.css'


export const PilotCard = (props) => {

  const pilot = props.pilot;
  const [editPilotModal, setEditPilotModal] = useState(false);
  
  console.log(pilot);

  return (
    <div key={pilot._id} className="ap-card">
      <button onClick={() => setEditPilotModal(true)} className="pilot-btn">
        <div className="pilot-info">
          <div className="pilot-name">
            <img className="ap-pilot-image" src="images/1.jpg" alt="Pilot"/>
            <p className="ap-pilot-name">{pilot.firstName}{" "}{pilot.lastName}</p>
            <div className="ap-date">Nov 22, 2024</div>
          </div>          
        </div>
      </button>
      {editPilotModal && <EditPilotModal pilot={pilot} modalOpen={setEditPilotModal} refresh={props.refresh} />}
    </div>
  )
}