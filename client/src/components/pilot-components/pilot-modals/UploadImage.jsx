import { useState } from 'react';

export const UploadImageButton = (props) => {

  const [chooseFile, setChooseFile] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      //saves to a url created by the browser
      props.preview(previewUrl);
      props.file(file); 
      console.log(file);     
    }    
  }

  return(
    <div className="upload-image-area">
           <input className="file-input"
            type="file" 
            accept="image/*"
            name="pilot-image" /*required to pass to multer backend
                                 and the name used to append to formData*/
            onChange={handleUpload}
           />
    </div>
  )

}