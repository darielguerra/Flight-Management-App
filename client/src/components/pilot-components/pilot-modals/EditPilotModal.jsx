import axios from 'axios';
import { API } from "../../../App"
import { useRef, useState } from "react";
import { UpdatePilotModal } from './UpdatePilotModal';

export const EditPilotModal = (props) => {
  
  const pilot = props.pilot;
  const pilotId = props.pilot._id;

  const firstName = useRef();
  const lastName = useRef();
  const yearsOfService = useRef();

  const [showUpdatePilot, setShowUpdatePilot ] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.put(`${API}/pilots/${pilotId}`, 
        {
          firstName:firstName.current.value,
          lastName:lastName.current.value,
          yearsOfService:yearsOfService.current.value
        });
        } 
        catch (error) {
          console.log(error);
        }
        props.closeModal(false);
        props.refresh();
        

  }

  return (
    <div className="modal">
      <div onClick={() => props.closeModal(false)} className="overlay">
        <div onClick={(e) => e.stopPropagation()} className="edit-delete-pilot-modal">
          <button onClick={() => setShowUpdatePilot(true)} className="edit-pilot-button">
            Edit
          </button>
          {showUpdatePilot && 
          
          <form onSubmit={handleSubmit}>
            <div className="pilot-first-name">
              <label className="pilot-first-name-label">First Name:</label>
              <input className="pilot-first-name-input" type="text" ref={firstName} />
            </div>
            <div className="pilot-last-name">
              <label className="pilot-last-name-label">Last Name:</label>
              <input className="pilot-last-name-input" type="text" ref={lastName} />
            </div>
            <div className="years-of-service">
              <label className="years-of-service-label">Years of Service:</label>
              <input className="years-of-service-input" type="text" ref={yearsOfService} />
            </div>
            <button type="submit">Update</button>
          </form>
          
          
          }
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