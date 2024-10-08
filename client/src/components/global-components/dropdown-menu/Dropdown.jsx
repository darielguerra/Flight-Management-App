import { useState, useEffect, useRef } from 'react';
import { DropdownButton } from './dropdown-parts/DropdownButton';
import { DropdownContent } from './dropdown-parts/DropdownContent';
import "./Dropdown.css";

export const Dropdown = ({buttonText, content, list, selectAirport}) => {

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setOpen((open) => !open);
  }

  const handleSelect = (item) => {
    toggleDropdown();
    selectAirport(item);
  }

  /*this is use to close content when clicking outside*/
  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current &&
        !dropdownRef.current.contains(event.target)) {
          setOpen(false);
        }
      };  

      document.addEventListener("click", handler);

      return () => {
        document.removeEventListener("click", handler);
      };
    
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <DropdownButton open={open} toggle={toggleDropdown}>
        {buttonText}
      </DropdownButton>
 
      <div className={`dropdown-content
         ${open ? "dropdown-content-open" : null}`}>
 
         {list && list.map((item)=> 
           <div className="dropdown-item" key={item._id} onClick={() =>handleSelect(item)}>                                         
           {`${item.code} - ${item.city}, ${item.state}`}
       </div>)} 
    </div>
    </div>
   )

  /*
  return (
   <div className="dropdown" ref={dropdownRef}>
    <DropdownButton open={open} toggle={toggleDropdown}>
      {buttonText}
    </DropdownButton>
    <DropdownContent open={open} toggle={toggleDropdown}>
      {content}
    </DropdownContent>
   </div>
  )
   */
}
