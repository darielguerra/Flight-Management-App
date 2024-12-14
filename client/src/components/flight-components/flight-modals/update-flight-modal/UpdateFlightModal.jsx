import axios from 'axios';
import { API } from "../../../../App"
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

export const UpdateFlightModal = (props) => {

    const flight = props.flight;
    const flightNumber = flight.flightNumber;
    console.log("updating flightNumber: " + flightNumber);    

    const departureDateRef = useRef();
    const arrivalDateRef = useRef();
    const departureTimeRef = useRef();
    const arrivalTimeRef = useRef();
    const departureAirportRef = useRef();
    const arrivalAirportRef = useRef();
    const navigate = useNavigate();

    //connects to the backend when submitted
    const handleSubmit = async (event) => {
        console.log(flightNumber);
        event.preventDefault();
        try {
            await axios.put(`${API}/flights/${flightNumber}`, 
            {
                flightNumber: flightNumber,
                departureDate: departureDateRef.current.value,
                arrivalDate: arrivalDateRef.current.value, 
                departureTime: departureTimeRef.current.value, 
                arrivalTime: arrivalTimeRef.current.value,
                departureAirport: departureAirportRef.current.value,
                arrivalAirport: arrivalAirportRef.current.value
            });
            navigate('../', {replace: true});            
            } catch (error) {
              console.log('Something Went Wrong');
              console.log(error);
            }
            props.updateFlightOpen(false);
            props.editFlightOpen(false);
            props.refresh();
    }

        return (   
          <div className="modal">
            {/*close modal when click overlay*/}
            <div onClick={() => props.closeModal(false)} className="overlay">
            
              <div className="page-layout">                
                
                <div onClick={(e) => e.stopPropagation()} className="flight-info-card-update">
                {/*stopPropagation is used to not close when clicking inside modal */}
                  
                  <form className="form" onSubmit={handleSubmit}>           
                
                    <div className="modal-title">
                      <label className="flightNumber-label">Flight# {flightNumber}</label>
                    </div>
        
                    <div className="flight-titles">
                      <div className="titles">
                        <h2>Departing from:</h2>
                      </div>
                      <div className="titles">
                        <h2>Arriving from:</h2>
                      </div>
                    </div>
        
                    <div className="flight-information">
        
                        <div className="info-column departure">  
        
                          <div className="item">
                            {/*<label className="departureAirport-label">Departure Airport</label>*/}
                            <input className="departureAirport-input flight-input" type="text" placeholder="Departure Airport" ref={departureAirportRef}/>           
                          </div>
                          <div className="item departure-date">
                            <input className="departureDate-input flight-input" type="Date" ref={departureDateRef} />
                          </div>
                          <div className="item departure-time">
                            <input className="departureTime-input flight-input" type="time" placeholder="Departure Time" ref={departureTimeRef} />
                          </div>                         
                        </div>     

                        <div className="info-column arrival">
        
                          <div className="item arrival-airport">
                            <input className="arrivalAirport flight-input" type="text" placeholder="Arrival Airport" ref={arrivalAirportRef} />
                          </div>
                          <div className="item arrival-date">
                            <input className="arrivalDate-input flight-input" type="Date" placeholder="Arrival Date" ref={arrivalDateRef} />
                          </div>
                          <div className="item arrival-Time">             
                            <input className="arrivalTime-input flight-input" type="time" placeholder="Arrival Time" ref={arrivalTimeRef} />
                          </div>
                        </div> 
                    </div> 
        
                    <div className="update-form-bottom">
                      <button type="submit" className="update-flight-btn">Update</button> 
                    </div>
        
                  </form>
                </div>
              </div>
          </div>
        </div>
        );
}