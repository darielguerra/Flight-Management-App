import './AirportCard.css'

export const AirportCard = (props) => {

  const airport = props.airport;
  console.log(props.airport);
  
  return (
    <div key={airport._id} className="airport-card">
      <div className="airport-info">
        <div className="code">{airport.code}</div>
        <div className="city-state">{airport.city}, {airport.state}</div>
      </div>
      <div className="airport-line"></div>
    </div>
  )

}