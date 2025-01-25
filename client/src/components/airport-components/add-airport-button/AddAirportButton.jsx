import { useState } from "react";
import { AddAirportModal } from "../airport-modals/AddAirportModal";
import '../../../global-styles/Airports+PilotsPages.css'

export const AddAirportButton = (props) => {

  const [addAirportModal, setAddAirportModal] = useState(false);

  return (
    <div className="airport-btn-container">   
      <button onClick={() => setAddAirportModal(true)} className="ap-add-btn">
        <p className="ap-add-btn-text">Add Airport</p>
      </button>
      {addAirportModal && 
        <AddAirportModal refresh={props.refresh} modalOpen={setAddAirportModal} />}
    </div> 
  )
}