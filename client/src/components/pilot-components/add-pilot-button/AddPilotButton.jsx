import { useState } from "react";
import { AddPilotModal } from "../pilot-modals/AddPilotModal";
import '../../../global-styles/Airports+PilotsPages.css'

export const AddPilotButton = (props) => {

  const [addPilotModal, setAddPilotModal] = useState(false);

  return (
    <div className="ap-btn-container"> {/*container allows for window to be clicked out of*/}
      <button onClick={() => setAddPilotModal(true)} className="ap-add-btn">
        <p className="ap-add-btn-text">Add New Pilot</p>
      </button>
      {addPilotModal &&
        <AddPilotModal refresh={props.refresh} closeModal={setAddPilotModal}/>}
    </div>
  )
}