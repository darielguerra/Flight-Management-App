import axios from 'axios';
import { API } from "../../App"
import { getAirports, getPilots } from "../../services/Services";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AirportsDropdown } from '../../components/global-components/dropdown-menus/AirportsDropdown';
import { PilotsDropdown } from '../../components/global-components/dropdown-menus/PilotsDropdown';
import { Footer } from '../../components/global-components/footers/Footer';
import '.././Create-UpdateAFlight.css';

export const CreateAFlight = () => {

    const [airports, setAirports] = useState([]);
    const [pilots, setPilots] = useState([]);

    const [departureAirport, setDepartureAirport] = useState({});
    const [arrivalAirport, setArrivalAirport] = useState({});
    const [pilot, setPilot] = useState({});

    const [flightNumber, setFlightNumber] = useState(0);
    const departureDateRef = useRef();
    const arrivalDateRef = useRef();
    const departureTimeRef = useRef();
    const arrivalTimeRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
      getLastFlight();
      fetchAirports();
      fetchPilots();
      console.log(airports);
      console.log(pilots)
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
     
     const fetchAirports = async () => {
      try {
        const airportsData = await getAirports();
        setAirports(airportsData);
        console.log(airportsData); 
      } catch (error) {
        console.error('Error fetching airports:', error);
      }
    };

    const fetchPilots = async () => {
      try {
        const pilotsData = await getPilots();
        setPilots(pilotsData);
        console.log(pilotsData); 
      } catch (error) {
        console.error('Error fetching pilots:', error);
      }
    };
 
    const selectDepartureAirport = (airport) => {
      setDepartureAirport(airport);
      console.log(airport.code);
    }

    const selectArrivalAirport = (airport) => {
      setArrivalAirport(airport);
      console.log(airport.code);
    }

    const selectPilot = (pilot) => {
      setPilot(pilot);
      console.log(`${pilot.firstName} ${pilot.lastName} `);
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
                departureAirport: departureAirport,
                arrivalAirport: arrivalAirport,
                pilot: pilot
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
                     {/* <label className="departureAirport-label">Departure Airport</label>
                      <input className="departureAirport-input" type="text" placeholder="Departure Airport" ref={departureAirportRef} />*/}
                                   
                     <AirportsDropdown 
                        buttonText={departureAirport && departureAirport.code ? departureAirport.code: "Departure Airport"}
                        list={airports}
                        selectAirport={selectDepartureAirport}
                      />

                   {/* orignally setDepartureAirport(airport), rerenderd too much
                      <Dropdown 
                        buttonText="Departure Airport"
                        content={
                        <>
                          {airports.map((airport)=> 
                            <DropdownItem key={airport._id} onClick={() => selectDepartureAirport(airport)}>                                         
                            {`${airport.code} - ${airport.city}, ${airport.state}`}
                            </DropdownItem>)} 
                        </>}
                      />
                      */}
                    
                    </div> 

                    <div className="item departure-date">
                       {/*<label className="departureDate-label">Departure Date</label>*/}
                      <input className="departureDate-input flight-input" type="Date" placeholder="Departure Date" ref={departureDateRef} />
                    </div>
                    <div className="item departure-time">
                       {/*<label className="departureTime-label">Departure Time</label>*/}
                      <input className="departureTime-input flight-input" type="time" placeholder="Departure Time" ref={departureTimeRef} />
                    </div>
                    
                  </div>     

                  {/*<div className="center-line"></div>*/}

                  <div className="info-column arrival">

                    <div className="item arrival-airport">
                     {/*<label className="arrivalAirport-label">Arrival Airport</label>
                      <input className="arrivalAirport" type="text" placeholder="Arrival Airport" ref={arrivalAirportRef} />*/}

                        <AirportsDropdown 
                          buttonText={arrivalAirport && arrivalAirport.code ? arrivalAirport.code: "Arrival Airport"}
                          /* if you want to display code, city, and state:
                          buttonText={arrivalAirport && arrivalAirport.code ? `${arrivalAirport.code} - ${arrivalAirport.city}, ${arrivalAirport.state}` : "Arrival Airport"}*/
                          list={airports}
                          selectAirport={selectArrivalAirport}
                        />

                     {/*  
                       <Dropdown 
                        buttonText="Arrival Airport"
                        content={
                        <>
                          {airports.map((airport)=> 
                            <DropdownItem key={airport._id} onClick={() => selectArrivalAirport(airport)}>
                            {`${airport.code} - ${airport.city}, ${airport.state}`}
                            </DropdownItem>)} 
                        </>}
                      />  
                      */}
                    </div>

                    <div className="item arrival-date">
                       {/*<label className="arrivalDate-label">Arrival Date</label>*/}
                      <input className="arrivalDate-input flight-input" type="Date" placeholder="Arrival Date" ref={arrivalDateRef} />
                    </div>
                    <div className="item arrival-Time">             
                     {/* <label className="arrivalTime-label">Arrival Time</label> */}
                      <input className="arrivalTime-input flight-input" 
                      type="time"  
                      /*onFocus={(e) => (e.target.type = "time")}
                      onBlur={(e) => (e.target.type = "text")}*/
                      ref={arrivalTimeRef} />
                    </div>

                  </div> 
              </div> 

              <div className="form-bottom">

              <div className="pilot-dropdown">
                <PilotsDropdown 
                  buttonText={pilot && pilot.firstName ? `${pilot.firstName} ${pilot.lastName}`: "Pilot"}
                  list={pilots}
                  selectPilot={selectPilot}
                />
              </div>
                <div className="add-flight">
                  <button className="add-flight-btn">ADD</button>
                </div> 
              </div>

            </form>
          </div>
          <Footer/>
        </div>
    );
}