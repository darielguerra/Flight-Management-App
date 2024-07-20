import axios from 'axios';
import { API } from "../../App"
import { Link } from 'react-router-dom';
import { EditIcon } from '../../assets/svg-icons/EditIcon';
import { ArrowIcon } from '../../assets/svg-icons/ArrowIcon';
import '../../pages/FlightList.css';

export const FlightCard = (props) => {
    
    //const { flightNumber } = props.flight.flightNumber;
    console.log(props.flight.flightNumber);
    //const { flightNumber } = this.props.flightNumber;

    const handleDelete = (key) => {
      axios.delete(`${API}/flights/${key}`)
      .then (res => {
          if ( res.status === "201") {
              alert("deleted");
              this.loadData();
          } else {               
          }
      });
  }

    // Format date using the slice method, original format: yyyy-mm-dd
    // slice syntax: slice(indexStart) or slice(indexStart, indexEnd) */    
    const formatDate = (date) => {
        //         month                  day               year: slicing from 0 up to but not including 4
        date = date.slice(5, 7) + '/' + date.slice(8) + '/' + date.slice(0, 4);
        return date;
    }

    // Format time     
    const formatTime = (time) => {

        // Splitting the time into hours and minutes
        const [hours, minutes] = time.split(':');
        
        // Formatting the time with AM/PM
        let formattedTime = '';
        if (hours < 12) {
            formattedTime = hours + ':' + minutes + ' AM';
        } else {
            formattedTime = (hours - 12) + ':' + minutes + ' PM';
        }
        
        return formattedTime;
    }

    return (
        <div key={props.flight._id} className="flight-card">    
          <div className="flight-info">                         
            <div className="flightnumber"><p>Flight# {props.flight.flightNumber}</p></div>
            {/*<div className="flightnumber"><p><strong>Flight# </strong>{flight.flightNumber}</p></div>*/}
            <div className="flight-details">
              <div className="airports">{props.flight.departureAirport}<ArrowIcon /><br />
                {props.flight.arrivalAirport}
              </div>
              <div className="pilot-departure-arrival">
                <h2>Pilot</h2>
                Ron Perlman
              </div>
              <div className="pilot-departure-arrival">
                <h2>Departs</h2>
                <p>{formatDate(props.flight.departureDate)}<br /> at {formatTime(props.flight.departureTime)}</p>
                {/*<div><strong>Current Number Of Passengers:  </strong>{flight.currentNumberOfPassengers}</div>*/}                  
              </div> 
              <div className="pilot-departure-arrival">
                <h2>Arrives</h2>
                {formatDate(props.flight.arrivalDate)}<br /> at {formatTime(props.flight.arrivalTime)}
                {/*<div><strong>Passenger Limit:  </strong>{flight.passengerLimit}</div>*/}
              </div>   
            </div>                   
          </div>      
          <div className="flight-buttons">
             {/*Alt way of passing flightNumber through props:*/}
             {/*<button className="btn edit"><Link to={"/updateaflight/"+props.flight.flightNumber} className="update-text"><EditIcon /></Link></button>*/}
             <button className="btn edit"><Link to={`/updateaflight/${props.flight.flightNumber}`} state={props.flight.flightNumber}  className="update-text"><EditIcon /></Link></button>
             <button onClick={() => handleDelete(props.flight.flightNumber)} className="btn delete">X</button>                    
          </div>                       
        </div>
      )
}