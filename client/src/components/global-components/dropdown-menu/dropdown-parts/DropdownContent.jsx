import "../Dropdown.css";
import { DropdownItem} from "./DropdownItem";

export const DropdownContent = ({children, open, toggle, list}) => {
  return (
    <div className={`dropdown-content
      ${open ? "dropdown-content-open" : null}`}>
      {/*{children}*/}
      {list.map((item)=> 
        <DropdownItem key={item._id} onClick={toggle}>                                         
         {`${item.code} - ${item.city}, ${item.state}`}
        </DropdownItem>)} 
    </div>
)}



/*
export const DropdownContent = ({children, open}) => {
  return (
    <div className={`dropdown-content
      ${open ? "dropdown-content-open" : null}`}>
      {children}
    </div>
)}
*/
