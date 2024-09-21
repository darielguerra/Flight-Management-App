import axios from 'axios';
import { API } from "../../../../App"
import { UpdateFlightModal } from '../update-flight-modal/UpdateFlightModal';
import { PlaneIcon } from '../../../../assets/svg-icons/PlaneIcon';
import { useState } from 'react';
import './EditFlightModal.css'

export const EditFlightModal = (props) => {

  const flight = props.flight;
  const [updateFlightModal, setUpdateFlightModal] = useState(false);

  const handleDelete = async () => {
    try { 
      await axios.delete(`${API}/flights/${flight.flightNumber}`);
      props.refresh();
    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="modal">
      <div onClick={() => props.editFlightOpen(false)} className="overlay">
        <div onClick={(e) => e.stopPropagation()} className="edit-flight-modal">
          <div className="modal-title edit-flight-modal-title">
            <p className="edit-flight-title">Flight# {flight.flightNumber}</p>
            <button className="modal-exit-btn" onClick={() => props.editFlightOpen(false)}>X</button>
          </div>   
          <div className="edit-flight-info-container">
            <div className="edit-flight-info">
              <div className="edit-flight-airport-code">
              {flight.departureAirport} -{'>'} {flight.arrivalAirport}
              </div>              
            </div>
            <div className="edit-plane-img-container">
              <PlaneIcon />
              {/*<img className="edit-plane-img" src="images/EditPlane.png" alt="Plane" />*/}
            </div>
          </div> 
          <div className="modal-bottom-btns">
            <button onClick={() => setUpdateFlightModal(true)} className="edit-btn flight-edit-btn">Edit</button>
            <button onClick={handleDelete} className="delete-btn flight-delete-btn">Delete</button>
          </div>
        </div>
        {updateFlightModal && <UpdateFlightModal flight={flight} editFlightOpen={props.editFlightOpen} updateFlightOpen={setUpdateFlightModal} refresh={props.refresh} />}
      </div>
    </div>
  )
}