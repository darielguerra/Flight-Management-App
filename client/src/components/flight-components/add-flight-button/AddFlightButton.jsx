import './AddFlightButton.css';
import { useNavigate } from 'react-router-dom';

export const AddFlightButton = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/createaflight');
  };
  
  return(
    <div className="flight-button-component">
      <div >
        <button 
          className="add-flight-button"
          onClick={handleButtonClick}>          
          <p className="flight-button-title">Add Flight</p>
        </button>
      </div>

    </div>
  )
}