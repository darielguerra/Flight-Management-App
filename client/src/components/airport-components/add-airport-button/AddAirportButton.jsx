import { useState } from "react";
import { AddAirportModal } from "../airport-modals/AddAirportModal";
import './AddAirportButton.css';

export const AddAirportButton = (props) => {

  const [addAirportModal, setAddAirportModal] = useState(false);

  return (
    <>   
      <button onClick={() => setAddAirportModal(true)} className="add-airport-btn">
        <div className="add-airport">
          <div className="airport-plus-sign">+</div>
        </div>
      </button>
      {addAirportModal && 
        <AddAirportModal refresh={props.refresh} closeModal={setAddAirportModal} />}
    </> 
  )
}