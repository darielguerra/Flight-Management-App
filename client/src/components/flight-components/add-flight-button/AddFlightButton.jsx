import './AddFlightButton.css';

export const AddFlightButton = () => {

  return(
    <div className="flight-button-component">
      <div className="flight-button-title">
        <p>New Flight</p>
      </div>
      <button className="add-flight-button">
        +
      </button>
    </div>
  )
}