import "../Dropdown.css";

export const DropdownItem = ({children, onClick}) => {
  return(
    <div 
      toggle={onClick}
      className="dropdown-item">
        {children}
    </div>
  )
}





