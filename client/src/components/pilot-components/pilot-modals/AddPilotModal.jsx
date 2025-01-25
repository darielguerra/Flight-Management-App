import axios from "axios";
import { API } from "../../../App";
import { useRef } from "react";
import { UploadImage } from "./UploadImage";
import '../pilot-modals/PilotModals.css';

export const AddPilotModal = (props) => {

  const firstName = useRef();
  const lastName = useRef();
  const yearsOfService = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${API}/pilots`,
        {
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          yearsOfService: yearsOfService.current.value
        });
    }
    catch (error) {
      console.log(error);
    }
    props.closeModal(false);
    props.refresh();
  }

  return(
    <div className="modal">
      <div  onClick={() => props.closeModal(false)} className="overlay">
      <div className="add-pilot-layout">
        <div onClick={(e) => e.stopPropagation()} className="pilot-modal">
          <div className="modal-title">
            <p className="add-pilot-title">New Pilot</p>
            <button className="modal-exit-btn" onClick={() => props.closeModal(false)}>X</button>
          </div>
          <form onSubmit={handleSubmit} className="pilot-modal-form" >
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
            <div className="add-pilot-submit">
              <button type="submit" className="add-pilot-submit-btn">Add</button> 
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
  )
}