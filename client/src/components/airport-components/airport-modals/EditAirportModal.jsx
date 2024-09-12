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
    }
    catch (error) {
      console.log(error);
    }
    props.refresh();
    props.modalOpen(false);
  }

  return(
    <div className="modal">
      <div onClick={() => props.modalOpen(false)} className="overlay">
        <div onClick={(e) => e.stopPropagation()}  className="airport-modal"> 
          {!showUpdateAirport && (
            <>
              <div className="airport-modal-title">
                <p>Airport</p>
                <button className="modal-exit-btn" onClick={() => props.modalOpen(false)}>X</button>
              </div>         
              <div className="airport-image-container">
              {/* <img className="airport-image" src="images/Airport2DarkWebp500px.webp" alt="Airport" />*/}
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
            <div className="update-airport-modal-title">
              <p>Update Airport</p>
              <button className="modal-exit-btn" onClick={() => props.modalOpen(false)}>X</button>
            </div> 
            <UpdateAirport airport={airport} refresh={props.refresh} modalOpen={props.modalOpen} />
          </>)}
        </div>
      </div>
    </div>
  )
}