import { useState } from "react";
import { AddPilotModal } from "../pilot-modals/AddPilotModal";
import './AddPilotButton.css';

export const AddPilotButton = (props) => {

  const [addPilotModal, setAddPilotModal] = useState(false);

  return (
    <div className="add-pilot-btn-container">
      <button onClick={() => setAddPilotModal(true)} className="add-pilot-btn">
        <div className="pilot-add-sign">+</div>
      </button>
      {addPilotModal &&
        <AddPilotModal refresh={props.refresh} closeModal={setAddPilotModal}/>}
    </div>
  )
}