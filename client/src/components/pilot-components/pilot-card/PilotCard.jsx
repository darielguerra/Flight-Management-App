import { useState } from "react";
import { EditDeletePilotModal } from '../pilot-modals/EditDeletePilotModal';
import { PilotIcon } from '../../../assets/svg-icons/PilotIcon';
import './PilotCard.css'


export const PilotCard = (props) => {

  const pilot = props.pilot;
  const [editDeleteModal, setEditDeleteModal] = useState(false);
  
  console.log(pilot);

  return (
    <div key={pilot._id} className="pilot-card">
      <div className="pilot-info">
        <button onClick={() => setEditDeleteModal(true)} className="pilot-btn">
        {/*<img className="pilot-image" src="images/Pilot1.png" alt="logo"></img>*/}
        <PilotIcon />
        <div className="pilot-name"><p>{pilot.firstName}{" "}{pilot.lastName}</p></div>
        </button>
        <div className="line"></div>
      </div>
      {editDeleteModal && <EditDeletePilotModal pilot={pilot} closeModal={setEditDeleteModal} refresh={props.refresh} />}
    </div>
  )
}