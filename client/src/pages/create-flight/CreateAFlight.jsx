import axios from 'axios';
import { API } from "../../App"
import { useRef, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '.././Create-UpdateAFlight.css';

export const CreateAFlight = () => {
    
    const [flightNumber, setFlightNumber] = useState(0);
    const departureDateRef = useRef();
    const arrivalDateRef = useRef();
    const departureTimeRef = useRef();
    const arrivalTimeRef = useRef();
    const departureAirportRef = useRef();
    const arrivalAirportRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
      getLastFlight();
    }, []);    

    const getLastFlight = async () => {
      const res = await axios.get(`${API}/flights/last`);
       if (res.data.length === 0) { //if empty because there are no records
        setFlightNumber(101); 
      }
      else {
        setFlightNumber(JSON.parse(res.data) + 1); //increment by 1
      }
     }

    const handleSubmit = async (event) => {
      console.log(flightNumber);
        event.preventDefault();
        try {
            await axios.post(`${API}/flights`, 
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
        }
    }

    return (   
      <div className="page-layout">
        
        <div className="flight-info-card-create">

          <form className="form" onSubmit={handleSubmit} >           
        
            <div className="flight-number">
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

                  <div className="item departure-airport">
                    <label className="departureAirport-label">Departure Airport</label>
                    <input className="departureAirport-input" type="text" placeholder="Departure Airport" ref={departureAirportRef} />
                  </div>
                  <div className="item departure-date">
                    <label className="departureDate-label">Departure Date</label>
                    <input className="departureDate-input" type="Date" placeholder="Departure Date" ref={departureDateRef} />
                  </div>
                  <div className="item departure-time">
                     <label className="departureTime-label">Departure Time</label>
                     <input className="departureTime-input" type="time" placeholder="Departure Time" ref={departureTimeRef} />
                  </div>
                  
                </div>     

                <div className="center-line"></div>

                <div className="info-column arrival">

                  <div className="item arrival-airport">
                    <label className="arrivalAirport-label">Arrival Airport</label>
                    <input className="arrivalAirport" type="text" placeholder="Arrival Airport" ref={arrivalAirportRef} />
                  </div>
                  <div className="item arrival-date">
                    <label className="arrivalDate-label">Arrival Date</label>
                    <input className="arrivalDate-input" type="Date" placeholder="Arrival Date" ref={arrivalDateRef} />
                  </div>
                  <div className="item arrival-Time">             
                    <label className="arrivalTime-label">Arrival Time</label>
                    <input className="arrivalTime-input" type="time" placeholder="Arrival Time" ref={arrivalTimeRef} />
                  </div>
                </div> 
            </div> 

            <div className="form-bottom">
              <button className="add-flight">ADD</button>   
            </div>

          </form>
        </div>
      </div>
   
    );
}