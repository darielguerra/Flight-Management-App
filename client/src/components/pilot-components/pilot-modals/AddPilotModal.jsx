import axios from "axios";
import { API } from "../../../App";
import { useRef } from "react";


export const AddPilotModal = (props) => {

  const name = useRef();
  const yearsOfService = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${API}/pilots`,
        {
          name: name.current.value,
          yearsOfService: yearsOfService.current.value
        });
    }
    catch (error) {
      console.log(error);
    }
    props.closeModal(false);
    props.refresh();
  }

  return(
    <div className="modal">
    <div  onClick={() => props.closeModal(false)} className="overlay">
    <div className="add-pilot-layout">
      <div onClick={(e) => e.stopPropagation()} className="add-pilot-modal">
     <form onSubmit={handleSubmit} >
        <div className="pilot-name">
          <label className="pilot-name-label">Name:</label>
          <input className="pilot-name-input" type="text" ref={name} />
        </div>
        <div className="years-of-service">
          <label className="years-of-service-label">Years of Service:</label>
          <input className="years-of-service-input" type="text" ref={yearsOfService} />
        </div>
        <div className="add-pilot-submit">
           {/* <button onClick={handleSubmit} className="add-airport-submit-btn">Add</button> */}
           <button type="submit" className="add-pilot-submit-btn">Add</button> 
        </div>

        </form>
      </div>
    </div>
  </div>

  </div>
  )
}