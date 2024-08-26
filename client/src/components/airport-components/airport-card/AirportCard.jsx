import './AirportCard.css'

export const AirportCard = (props) => {

  const airport = props.airport;
  console.log(props.airport);
  
  return (
    <div key={airport._id} className="airport-card">
      <button className="airport-btn">
        <div className="airport-info">
          <div className="code">{airport.code}</div>
          <div className="city-state">{airport.city}, {airport.state}</div>
          {/*<div className="airport-line-bottom"></div>*/}
        </div>
      </button>
      {/*<div className="airport-line-right"></div>*/}
    </div>
  )

}