import axios from 'axios';
import { API } from "../../../App";
import { useRef } from "react";

export const AddAirportModal = (props) => {

  const code = useRef();
  const city = useRef();
  const state = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault(); /*needed for form submittion*/
    try {
      await axios.post(`${API}/airports`, 
        {
          code: code.current.value,
          city: city.current.value,
          state: state.current.value
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
      <div className="add-airport-layout">
        <div onClick={(e) => e.stopPropagation()} className="add-airport-modal">
       <form onSubmit={handleSubmit} >
          <div className="airport-code">
            <label className="airport-code-label">Airport 3-Letter Code</label>
            <input className="airport-code-input" type="text" ref={code} />
          </div>
          <div className="airport-city">
            <label className="airport-city-label">City</label>
            <input className="airport-city-input" type="text" ref={city} />
          </div>
          <div className="airport-state">
            <label className="airport-state-label">State</label>
            <input className="airport-state-input" type="text" ref={state} />
          </div>
          <div className="add-aiport-submit">
             {/* <button onClick={handleSubmit} className="add-airport-submit-btn">Add</button> */}
             <button type="submit" className="add-airport-submit-btn">Add</button> 
          </div>

          </form>
        </div>
      </div>
    </div>

    </div>
  )

}
