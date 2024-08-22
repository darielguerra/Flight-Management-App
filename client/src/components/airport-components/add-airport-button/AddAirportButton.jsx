import { useState } from "react";
import { AddAirportModal } from "../airport-modals/AddAirportModal";


export const AddAirportButton = () => {

  const [addAirportModal, setAddAirportModal] = useState(false);

  return (
    <>   
      <button onClick={() => setAddAirportModal(true)} className="add-airport-btn">
        <div className="add-airport">
          <div className="airport-plus-sign">+</div>
        </div>
      </button>
      {addAirportModal && <AddAirportModal closeModal={setAddAirportModal} />}
    </> 
  )
}