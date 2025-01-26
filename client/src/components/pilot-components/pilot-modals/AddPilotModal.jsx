import axios from "axios";
import { API } from "../../../App";
import { useRef, useState } from "react";
import { UploadImageButton } from "./UploadImage";
import { ImagePreview } from "./ImagePreview";
import '../pilot-modals/PilotModals.css';

export const AddPilotModal = (props) => {

  const firstName = useRef();
  const lastName = useRef();
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName.current.value);
    formData.append("lastName", firstName.current.value);
    formData.append("imagePath", image);
    
    if (image) {
    try {
      await axios.post(`${API}/pilots`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }

    /*try {
      await axios.post(`${API}/pilots`,
        {
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          imagePath: image
        });
    }
    */
    catch (error) {
      console.log(error);
    }
    props.closeModal(false);
    props.refresh();
  }
  }

  return(
    <div className="modal">
      <div  onClick={() => props.closeModal(false)} className="overlay">
      <div className="add-pilot-layout">
        <div onClick={(e) => e.stopPropagation()} className="pilot-modal">
          <div className="modal-title">
            <p className="add-pilot-title">New Pilot</p>
            <button className="modal-exit-btn" onClick={() => props.closeModal(false)}>X</button>
          </div>
          <form onSubmit={handleSubmit} className="pilot-modal-form" >
            <div className="pilot-first-name">
              <label className="pilot-first-name-label">First Name:</label>
              <input className="pilot-first-name-input" type="text" ref={firstName} />
            </div>
            <div className="pilot-last-name">
              <label className="pilot-last-name-label">Last Name:</label>
              <input className="pilot-last-name-input" type="text" ref={lastName} />
            </div>
            <div className="upload-image-header">
              <label className="profile-picture-label">Profile Picture</label>
              <UploadImageButton preview={setPreview} file={setImage}  />
            </div>
            <div className="image-preview-area">
              <ImagePreview preview={preview} />
            </div>
            <div className="add-pilot-submit">
              <button type="submit" className="add-pilot-submit-btn">Add</button> 
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
  )
}