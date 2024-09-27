import { useState, useEffect, useRef } from 'react';
import { DropdownButton } from './dropdown-parts/DropdownButton';
import { DropdownContent } from './dropdown-parts/DropdownContent';
import "./Dropdown.css";

export const Dropdown = ({buttonText, content}) => {

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setOpen((open) => !open);
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
    <DropdownContent open={open}>
      {content}
    </DropdownContent>
   </div>
  )
}
