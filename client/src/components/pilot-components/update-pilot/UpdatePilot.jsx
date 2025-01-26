import axios from 'axios';
import { API } from "../../../App"
import { useRef } from "react";
import '../pilot-modals/PilotModals.css';

export const UpdatePilot = (props) => {

  const pilotId = props.pilotId;
  console.log(pilotId);
  const firstName = useRef();
  const lastName = useRef();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.put(`${API}/pilots/${pilotId}`, 
        {
          firstName:firstName.current.value,
          lastName:lastName.current.value,
 
        });
        } 
        catch (error) {
          console.log(error);
        }
        props.modalOpen(false);
        props.refresh();      
  }  
   
  return (
    <form className="pilot-modal-form" onSubmit={handleSubmit}>
      <div className="pilot-first-name">
        <label className="pilot-first-name-label">First Name:</label>
        <input className="pilot-first-name-input" type="text" ref={firstName} />
      </div>
      <div className="pilot-last-name">
        <label className="pilot-last-name-label">Last Name:</label>
        <input className="pilot-last-name-input" type="text" ref={lastName} />
      </div>
      <button type="submit" className="update-pilot-btn">Update</button>
    </form>
  )
}