import axios from 'axios';
import { API } from "../App"
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './UpdateAFlight.css';

import { useLocation } from "react-router-dom";

export const UpdateAFlight = () => {

    //alt way of passing flightNumber would be to recieve 
    //flightNumber props sent from the commentend out flightCard link
    //that update work but when console logged show a blank flightNumber obect

    const location = useLocation();
    const flightNumber = location.state;
    console.log("updating flightNumber: " + flightNumber);    

    const flightNumberRef = useRef(); 
    const departureDateRef = useRef();
    const arrivalDateRef = useRef();
    const departureTimeRef = useRef();
    const arrivalTimeRef = useRef();
    const departureAirportRef = useRef();
    const arrivalAirportRef = useRef();
    const currentNumberOfPassengerRef = useRef();
    const passengerLimitRef = useRef();
    const navigate = useNavigate();

    //connects to the backend when submitted
    const handleSubmit = async (event) => {
        console.log(flightNumber);
        event.preventDefault();
        try {
            await axios.put(`${API}/flights/${flightNumber}`, 
            {
                flightNumber: flightNumberRef.current.value,
                departureDate: departureDateRef.current.value,
                arrivalDate: arrivalDateRef.current.value, 
                departureTime: departureTimeRef.current.value, 
                arrivalTime: arrivalTimeRef.current.value,
                departureAirport: departureAirportRef.current.value,
                arrivalAirport: arrivalAirportRef.current.value, 
                currentNumberOfPassenger: currentNumberOfPassengerRef.current.value,
                passengerLimit: passengerLimitRef.current.value 
            });
        navigate('../', {replace: true});            
        //console.log(`flight number with id ${flightNumber} updated`);
        //alert("Flight updated");        
        } catch (error) {
                console.log('Something Went Wrong');
            }
        }

    return (
        <>
        <div className="title"><h1>Update A Flight</h1></div>

        <form className="Form" onSubmit={handleSubmit} >
            <div className="grid-container">
            
                <div className="items">
                    <label className="flightnumber-label" htmlFor="flightnumber">Flight Number</label>
                    <input id="flightnumber" type="text" placeholder="Flight Number" ref={flightNumberRef} />
                </div>

                <div className="items">
                    <label className="departuredate-label" htmlFor="departureDate">Departure Date</label>
                    <input id="departureDate" type="Date" placeholder="Departure Date" ref={departureDateRef} />
                </div>
             
                <div className="items">
                <div className ="col-lg-2">
                    <label htmlFor="arrivalDate">Arrival Date</label>
                    <input id="arrivalDate" type="Date" placeholder="Arrival Date" ref={arrivalDateRef} />
                </div>
                </div>
                
                <div className="items">
                <div className ="col-lg-4">
                    <label htmlFor="departureTime">Departure Time</label>
                    <input id="departureTime" type="time" placeholder="Departure Time" ref={departureTimeRef} />
                </div> 
                </div>
                
                <div className="items">             
                <div className ="col-lg-4">
                    <label htmlFor="arrivalTime">Arrival Time</label>
                    <input id="arrivalTime" type="time" placeholder="Arrival Time" ref={arrivalTimeRef} />
                </div>
                </div>
                             
                <div className="items">
                <div className ="col-lg-3">
                    <label htmlFor="departureAirport">Departure Airport</label>
                    <input id="departureAirport" type="text" placeholder="Departure Airport" ref={departureAirportRef} />
                </div>
                </div>

                <div className="items">
                <div className ="col-lg-3">
                    <label htmlFor="arrivalAirport">Arrival Airport</label>
                    <input id="arrivalAirport" type="text" placeholder="Arrival Airport" ref={arrivalAirportRef} />
                </div>
                </div>

                <div className="items"> 
                <div className ="col-lg-3">
                <label htmlFor="currentNumberOfPassenger">Current Number Of Passengers</label>
                <input id="currentNumberOfPassenger" type="number" placeholder="Current Number Of Passengers" ref={currentNumberOfPassengerRef} />
                </div>
                </div>

                <div className="items">
                <div className ="col-lg-3">
                    <label htmlFor="passengerLimit">Passenger Limit</label>
                    <input id="passengerLimit" type="number" placeholder="Passenger Limit" ref={passengerLimitRef} />
                </div>
                </div>

                <input className="add" type="submit" value="UPDATE" />
               
                </div>
            </form>
        </>
    );
}