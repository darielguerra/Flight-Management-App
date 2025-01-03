import axios from 'axios';
import { API } from '../../../App';
import { useState } from "react";
import { UpdatePilot } from '../update-pilot/UpdatePilot';
import { EditPilotIcon } from '../../../assets/svg-icons/EditPilotIcon';
import './PilotModals.css';

export const EditPilotModal = (props) => {
  
  const pilot = props.pilot;
  const [showUpdatePilot, setShowUpdatePilot ] = useState(false);

  const handleDelete = async () => {
    try{
      await axios.delete(`${API}/pilots/${pilot._id}`);
      props.refresh();
      props.modalOpen(false);
      console.log("deleteing pilot");
    }
    catch (error){
      console.log(error);
    }
     //without async, does not refresh the first time
  }

  return (
    <div className="modal">
      <div onClick={() => props.modalOpen(false)} className="overlay">
        <div onClick={(e) => e.stopPropagation()} className="pilot-modal">
         
        {!showUpdatePilot && (
          <>
            <div className="modal-title">
              <p className="edit-pilot-title" >Pilot</p>
              <button className="modal-exit-btn" onClick={() => props.modalOpen(false)}>X</button>
            </div>
            <EditPilotIcon className="edit-pilot-icon"/>
            <div className="edit-pilot-modal-info">
              <div className="edit-pilot-name"><p>{pilot.firstName}{" "}{pilot.lastName}</p></div>
              <div className="edit-pilot-yearsOfService"><p>Years of Service: {pilot.yearsOfService}</p></div>
            </div>
            <div className="modal-bottom-btns">
              <button onClick={() => setShowUpdatePilot(true)} className="edit-btn pilot-edit-btn">
                Edit
              </button>
              <button onClick={handleDelete} className="delete-btn pilot-delete-btn">Delete</button>
            </div>
          </>
        )}
          {showUpdatePilot && (
          <>
            <div className="modal-title">
              <p className="update-pilot-title">Update Pilot</p>
              <button className="modal-exit-btn" onClick={() => props.modalOpen(false)}>X</button>
            </div>
            <UpdatePilot pilotId={pilot._id} modalOpen={props.modalOpen} refresh={props.refresh} />
          </>
        )}
        </div>          
      </div> 
    </div> 

  )
}
