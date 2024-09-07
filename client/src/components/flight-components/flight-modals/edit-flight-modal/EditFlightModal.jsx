import axios from 'axios';
import { API } from "../../../../App"
import { UpdateFlightModal } from '../update-flight-modal/UpdateFlightModal';
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
          <div className="edit-flight-info">
            <div className="edit-flight-airport-code">
            {flight.departureAirport} - {flight.arrivalAirport}
            </div>
          </div>
          <div className="edit-flight-modal-btns">
            <button onClick={handleDelete} className="edit-flight-btn">Delete</button>
            <button onClick={() => setUpdateFlightModal(true)} className="edit-flight-btn">Edit</button>
          </div>
        </div>
        {updateFlightModal && <UpdateFlightModal flight={flight} editFlightOpen={props.editFlightOpen} updateFlightOpen={setUpdateFlightModal} refresh={props.refresh} />}
      </div>
    </div>
  )
}