import { AirportIcon } from '../../../assets/svg-icons/AirportIcon';
import './AirportModals.css';


export const EditAirportModal = (props) => {

  
  const airport = props.airport;


  return(
    <div className="modal">
      <div onClick={() => props.modalOpen(false)} className="overlay">
        <div onClick={(e) => e.stopPropagation()}  className="airport-modal"> 
          <div className="airport-modal-title">
            <p>Airport</p>
            <button className="airport-exit-btn" onClick={() => props.modalOpen(false)}>X</button>
          </div>
       
          <div className="airport-modal-info">
            <div className="airport-modal-code"><p>{airport.code}</p></div>
            <div className="airport-modal-city-state"><p>{airport.city}, {airport.state}</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}