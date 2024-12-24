import './AddFlightButton.css';
import { useNavigate } from 'react-router-dom';

export const AddFlightButton = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/createaflight');
  };
  
  return(
    <div className="flight-button-component">
      <div className="flight-button-title">
        <p>Flight</p>
        <button 
          onClick={handleButtonClick}
          className="add-flight-button">
          +
        </button>
      </div>

    </div>
  )
}