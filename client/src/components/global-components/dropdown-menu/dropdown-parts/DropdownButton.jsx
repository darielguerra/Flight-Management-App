import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../Dropdown.css";

export const DropdownButton = ({ children, open, toggle }) => {
  return( 
    <div 
      onClick={toggle} 
      className={`dropdown-btn ${open ?
      "dropdown-btn-open" : null}`}
    >
      {children}
      <span className="dropdown-toggle-icon">
        {open ? <FaChevronUp /> : <FaChevronDown />}        
      </span>
    </div>
)}
