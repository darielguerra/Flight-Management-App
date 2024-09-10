import { axios } from 'axios';
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
      await axios.delete(`${API}/airport/${airport._id}`);
    }
    catch (error) {
      console.log(error);
    }
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
                <button className="airport-exit-btn" onClick={() => props.modalOpen(false)}>X</button>
              </div>         
              <div className="airport-image-container">
              {/* <img className="airport-image" src="images/Airport2DarkWebp500px.webp" alt="Airport" />*/}
              < AirportIcon />
              </div>
              <div className="airport-modal-info">
                <div className="airport-modal-code"><p>{airport.code}</p></div>
                <div className="airport-modal-city-state"><p>{airport.city}, {airport.state}</p></div>
              </div>
              <div className="edit-airport-modal-btns">
                <button onClick={() => setUpdateAirport(true)} className="edit-airpot-btn">Edit</button>
                <button onClick={handleDelete} className="delete-flight-btn">Delete</button>
              </div>
            </>
          )}
          {showUpdateAirport && <UpdateAirport airport={airport} />}
        </div>
      </div>
    </div>
  )
}