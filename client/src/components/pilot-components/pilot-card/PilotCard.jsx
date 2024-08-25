import './PilotCard.css'


export const PilotCard = (props) => {
  
  const pilot = props.pilot;
  console.log(pilot);

  return (
    <div key={pilot._id} className="pilot-card">
      <div className="pilot-info">
        <img className="pilot-image" src="images/Pilot1.png" alt="logo"></img>
        <div className="pilot-name"><p>{pilot.firstName}{" "}{pilot.lastName}</p></div>
        {/*<div className="years-of-service">Years of Service: {pilot.yearsOfService}</div>*/}
        <div className="line"></div>
      </div>
    </div>
  )
}