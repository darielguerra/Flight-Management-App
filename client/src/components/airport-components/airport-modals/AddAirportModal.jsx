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
      props.modalOpen(false);
      props.refresh();
  }

  return(
    <div className="modal">
      <div  onClick={() => props.modalOpen(false)} className="overlay">
        <div className="add-airport-layout">
          <div onClick={(e) => e.stopPropagation()} className="airport-modal">
            <div className="modal-title">
                <p className="add-airport-title">Add Airport</p>
                <button className="modal-exit-btn" onClick={() => props.modalOpen(false)}>X</button>
            </div>  
            <form onSubmit={handleSubmit} className="airport-modal-form" >
              <div className="airport-code">
                {/*<label className="airport-code-label">Airport Code: </label>*/}           
                <input className="airport-code-input" type="text" placeholder="Airport Code" ref={code} />  
                <a className="code-link" href="https://www.leonardsguide.com/us-airport-codes.shtml" target="_blank" rel="noreferrer">List of Codes</a>       
              </div>
              <div className="airport-city">
                {/*<label className="airport-city-label">City:</label>*/}
                <input className="airport-city-input airport-input" placeholder="City" type="text" ref={city} />
              </div>
              <div className="airport-state">
                {/*<label className="airport-state-label">State:</label>*/}
                <input className="airport-state-input airport-input" type="text" placeholder="State" ref={state} />
              </div>
              <div className="add-airport-submit">
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
