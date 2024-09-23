import { useState } from 'react';
import { DropdownButton } from './dropdown-parts/DropdownButton';
import { DropdownContent } from './dropdown-parts/DropdownContent';
import "./Dropdown.css";

export const Dropdown = ({buttonText, content}) => {

  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((open) => !open);
  }

  return (
   <div className="dropdown">
    <DropdownButton open={open} toggle={toggleDropdown}>
      {buttonText}
    </DropdownButton>
    <DropdownContent open={open}>
      {content}
    </DropdownContent>
   </div>
  )
}
