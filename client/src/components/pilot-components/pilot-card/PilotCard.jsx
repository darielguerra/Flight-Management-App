import { PilotIcon } from '../../../assets/svg-icons/PilotIcon';
import './PilotCard.css'


export const PilotCard = (props) => {
  
  const pilot = props.pilot;
  console.log(pilot);

  return (
    <div key={pilot._id} className="pilot-card">
      <div className="pilot-info">
        <button className="pilot-btn">
        {/*<img className="pilot-image" src="images/Pilot1.png" alt="logo"></img>*/}
        <PilotIcon />
        <div className="pilot-name"><p>{pilot.firstName}{" "}{pilot.lastName}</p></div>
        </button>
        <div className="line"></div>
      </div>
    </div>
  )
}