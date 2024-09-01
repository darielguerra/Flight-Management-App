import './DeleteModal.css'

export const DeleteModal = (props) => {
    return (
      <div className="modal">
        <div  onClick={() => props.closeModal(false)} className="overlay">
          <div onClick={(e) => e.stopPropagation()} className="delete-modal">
              <div className="delete-modal-title">
                  <p>Are you sure you want to delete <strong>Flight# {props.flightNumber}</strong>?</p>
              </div>
              <div className="delete-modal-buttons">
                  <button onClick={() => props.delete(props.flightNumber)}className="button delete-modal-btn">Delete</button>
                  <button onClick={() => props.closeModal(false)}className="button cancel-btn">Cancel</button>
              </div>
          </div>
        </div>
      </div>
    )
}