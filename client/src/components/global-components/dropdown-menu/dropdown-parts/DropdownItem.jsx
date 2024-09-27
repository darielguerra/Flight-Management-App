import "../Dropdown.css";

export const DropdownItem = ({children, onClick}) => {

  return(
    <div 
      onClick={onClick}
      className="dropdown-item">
        {children}
    </div>
  )
}





