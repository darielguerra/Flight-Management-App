import axios from 'axios';
import { API } from '../../../App';
import { useState } from "react";
import { UpdateAirport} from '../update-airport/UpdateAirport';
import { AirportIcon } from '../../../assets/svg-icons/AirportIcon';
import './AirportModals.css';


export const EditAirportModal = (props) => {

  const airport = props.airport;
  const [showUpdateAirport, setUpdateAirport] = useState(false);
  
  const handleDelete = async () => {
    try {
      await axios.delete(`${API}/airports/${airport._id}`);
      props.refresh();
      props.modalOpen(false);
    }
    catch (error) {
      console.log(error);
    }
  }

  return(
    <div className="modal">
      <div onClick={() => props.modalOpen(false)} className="overlay">
        <div onClick={(e) => e.stopPropagation()}  className="airport-modal"> 
          {!showUpdateAirport && (
            <>
              <div className="modal-title">
                <p className="edit-airport-title">Airport</p>
                <button className="modal-exit-btn" onClick={() => props.modalOpen(false)}>X</button>
              </div>         
              <div className="airport-image-container">
              < AirportIcon />
              </div>
              <div className="airport-modal-info">
                <div className="airport-modal-code"><p>{airport.code}</p></div>
                <div className="airport-modal-city-state"><p>{airport.city}, {airport.state}</p></div>
              </div>
              <div className="modal-bottom-btns">
                <button onClick={() => setUpdateAirport(true)} className="edit-btn airport-edit-btn">Edit</button>
                <button onClick={handleDelete} className="delete-btn airport-delete-btn">Delete</button>
              </div>
            </>
          )}
          {showUpdateAirport && (
          <>
            <div className="modal-title">
              <p className="update-airport-title">Update Airport</p>
              <button className="modal-exit-btn" onClick={() => props.modalOpen(false)}>X</button>
            </div> 
            <UpdateAirport airport={airport} refresh={props.refresh} modalOpen={props.modalOpen} />
          </>)}
        </div>
      </div>
    </div>
  )
}