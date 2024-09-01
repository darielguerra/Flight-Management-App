import { useState } from "react";
import { EditPilotModal } from '../pilot-modals/EditPilotModal';
import { PilotCardIcon } from '../../../assets/svg-icons/PilotCardIcon';
import './PilotCard.css'


export const PilotCard = (props) => {

  const pilot = props.pilot;
  const [editPilotModal, setEditPilotModal] = useState(false);
  
  console.log(pilot);

  return (
    <div key={pilot._id} className="pilot-card">
      <div className="pilot-info">
        <button onClick={() => setEditPilotModal(true)} className="pilot-btn">
        {/*<img className="pilot-image" src="images/Pilot1.png" alt="logo"></img>*/}
        <PilotCardIcon />
        <div className="pilot-name"><p>{pilot.firstName}{" "}{pilot.lastName}</p></div>
        </button>
        <div className="line"></div>
      </div>
      {editPilotModal && <EditPilotModal pilot={pilot} closeModal={setEditPilotModal} refresh={props.refresh} />}
    </div>
  )
}