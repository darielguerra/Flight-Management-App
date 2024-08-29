import { useState } from "react";
import { UpdatePilotModal } from './UpdatePilotModal';

export const EditDeletePilotModal = (props) => {
  
  const pilot = props.pilot;
  const [updatePilotModal, setUpdatePilotModal ] = useState(false);

  return (
    <div className="modal">
      <div onClick={() => props.closeModal(false)} className="overlay">
        <div onClick={(e) => e.stopPropagation()} className="edit-delete-pilot-modal">
          <button onClick={() => setUpdatePilotModal(true)} className="edit-pilot-button">
            Edit
          </button>
          {updatePilotModal && <UpdatePilotModal pilotId={pilot._id} closeModal={setUpdatePilotModal} refresh={props.refresh} />}
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