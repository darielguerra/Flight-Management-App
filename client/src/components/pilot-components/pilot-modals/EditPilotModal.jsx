import { useState } from "react";
import { UpdatePilot } from '../update-pilot/UpdatePilot';

export const EditPilotModal = (props) => {
  
  const pilot = props.pilot;
  const [showUpdatePilot, setShowUpdatePilot ] = useState(false);


  return (
    <div className="modal">
      <div onClick={() => props.closeModal(false)} className="overlay">
        <div onClick={(e) => e.stopPropagation()} className="edit-delete-pilot-modal">
        {!showUpdatePilot && (
          <button onClick={() => setShowUpdatePilot(true)} className="edit-pilot-button">
            Edit
          </button>
        )}
          {showUpdatePilot && <UpdatePilot pilotId={pilot._id} closeModal={props.closeModal} refresh={props.refresh} />}
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