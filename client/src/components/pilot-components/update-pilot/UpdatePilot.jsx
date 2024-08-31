import axios from 'axios';
import { API } from "../../../App"
import { useRef } from "react";

export const UpdatePilot = (props) => {

  const pilotId = props.pilotId;
  console.log(pilotId);
  const firstName = useRef();
  const lastName = useRef();
  const yearsOfService = useRef();

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
  )
}