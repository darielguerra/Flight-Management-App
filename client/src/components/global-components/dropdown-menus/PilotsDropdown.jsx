import { useState, useEffect, useRef } from 'react';
import { DropdownButton } from './dropdown-button/DropdownButton';
import "./Dropdowns.css";

export const PilotsDropdown = ({ buttonText, list, selectPilot }) => {

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();
  const buttonRef = useRef(); /*for dynamic position when to low*/
  const conentRef = useRef(); /*for dynamic position when to low*/

  const toggleDropdown = () => {
    setOpen((open) => !open);
  }

  const handleSelect = (item) => {
    toggleDropdown();
    selectPilot(item);
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
      <DropdownButton ref={buttonRef} open={open} toggle={toggleDropdown}>
        {buttonText}
      </DropdownButton>
 
      <div className={`dropdown-content
         ${open ? "dropdown-content-open" : null}`}>
 
         {list && list.map((item)=> 
           <div className="dropdown-item" key={item._id} onClick={() =>handleSelect(item)}>                                         
           {`${item.firstName}, ${item.lastName}`}
       </div>)} 
    </div>
    </div>
   )
}
