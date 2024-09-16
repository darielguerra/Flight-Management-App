import axios from 'axios';
import { API } from "../../../App";
import { useRef } from "react";

export const UpdateAirport = (props) => {
 
  const airportId = props.airport._id;
  const code = useRef();
  const city = useRef();
  const state = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${API}/airports/${airportId}`,
      { 
        code: code.current.value,
        city: city.current.value,
        state: state.current.value
      })
    }
    catch (error) {
      console.log(error)
    }
    props.refresh();
    props.modalOpen(false);

  }

  return(
    <form onSubmit={handleSubmit} className="airport-modal-form">
      <div className="airport-code">
        <label className="airport-code-label">          
          Airport Code: <a className="code-link" href="https://www.leonardsguide.com/us-airport-codes.shtml" target="_blank" rel="noreferrer">(List)</a>
        </label>        
        <input className="airport-code-input" type="text" ref={code} />
      </div>
      <div className="airport-city">
        <label className="airport-city-label">City:</label>
        <input className="airport-city-input" type="text" ref={city} />
      </div>
      <div className="airport-state">
        <label className="airport-state-label">State:</label>
        <input className="airport-state-input" type="text" ref={state} />
      </div>
      <div className="add-aiport-submit">
        {/* <button onClick={handleSubmit} className="add-airport-submit-btn">Add</button> */}
        <button type="submit" className="add-airport-submit-btn">Add</button> 
      </div>
    </form>
  )
}