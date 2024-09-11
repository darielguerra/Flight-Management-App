import { useState } from "react";
import { UpdatePilot } from '../update-pilot/UpdatePilot';
import { EditPilotIcon } from '../../../assets/svg-icons/EditPilotIcon';
import './PilotModals.css';

export const EditPilotModal = (props) => {
  
  const pilot = props.pilot;
  const [showUpdatePilot, setShowUpdatePilot ] = useState(false);


  return (
    <div className="modal">
      <div onClick={() => props.modalOpen(false)} className="overlay">
        <div onClick={(e) => e.stopPropagation()} className="pilot-modal">
         
        {!showUpdatePilot && (
          <>
            <div className="pilot-modal-title">
              <p>Pilot</p>
              <button className="modal-exit-btn" onClick={() => props.modalOpen(false)}>X</button>
            </div>
            <EditPilotIcon className="edit-pilot-icon"/>
            {/*<div className="edit-pilot-image-container">
              <img className="edit-pilot-image" src="images/Pilot1DarkStraightenedWebp.webp" alt="Pilot" />
            </div>*/}
            <div className="edit-pilot-modal-info">
              <div className="edit-pilot-name"><p>{pilot.firstName}{" "}{pilot.lastName}</p></div>
              <div className="edit-pilot-yearsOfService"><p>Years of Service: {pilot.yearsOfService}</p></div>
            </div>

            <button onClick={() => setShowUpdatePilot(true)} className="edit-pilot-btn">
              Edit
            </button>
          </>
        )}
          {showUpdatePilot && (
          <>
            <div className="pilot-modal-title">
              <p>Update {pilot.firstName}{" "}{pilot.lastName}</p>
              <button className="pilot-exit-btn" onClick={() => props.modalOpen(false)}>X</button>
            </div>
            <UpdatePilot pilotId={pilot._id} modalOpen={props.modalOpen} refresh={props.refresh} />
          </>
        )}
        </div>          
      </div> 
    </div> 

  )
}
/*

  return (
    <div className="modal">
      <div onClick={() => props.closeModal(false)} className="overlay">
        <div onClick={(e) => e.stopPropagation()} className="edit-delete-pilot-modal">
          <button onClick={() => {
            setUpdatePilotModal(true);
            updatePilotModal && <UpdatePilotModal pilotId={pilot._id} closeModal={setUpdatePilotModal} refresh={props.refresh} />
            props.closeModal(false);
            }} 
            className="edit-pilot-button">Edit</button>          
        </div>          
      </div> 
    </div> 

  )
}*/