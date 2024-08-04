import './DeleteModal.css'

export const DeleteModal = (props) => {
    return (
      <div className="modal">
        <div  onClick={() => props.closeModal(false)} className="overlay">
          <div onClick={(e) => e.stopPropagation()} className="modal-container">
              <div className="modal-title">
                  <p>Are you sure you want to delete <strong>Flight# {props.flightNumber}</strong>?</p>
              </div>
              <div className="modal-buttons">
                  <button onClick={() => props.delete(props.flightNumber)}className="button delete-btn">Delete</button>
                  <button onClick={() => props.closeModal(false)}className="button cancel-btn">Cancel</button>
              </div>
          </div>
        </div>
      </div>
    )
}