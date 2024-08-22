import './Switch.css';

export const Switch = (props) => {

  return(
       <label className="switch"> {/*have to use label instead of
                                     div or switch wont toggle
                                     left and right */}
        <input type="checkbox" className="switch-checkbox" 
           onChange={() => props.setShowAirports(!props.showAirports)} />
        <div className="switch-background">
          <div className="switch-circle"></div>
        </div>
      </label>
  )
}