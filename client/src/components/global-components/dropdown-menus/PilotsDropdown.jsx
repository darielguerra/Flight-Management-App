import { useState, useEffect, useRef } from 'react';
import { DropdownButton } from './dropdown-button/DropdownButton';
import "./Dropdowns.css";

export const PilotsDropdown = ({ buttonText, list, selectPilot }) => {

  const [open, setOpen] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);

  const dropdownRef = useRef();
  const buttonRef = useRef(); /*for dynamic position when to low*/
  const contentRef = useRef(); /*for dynamic position when to low*/

  const toggleDropdown = () => {
    if(!open) {
      const spaceRemaining = 
        window.innerHeight -
        buttonRef.current.getBoundingClientRect().bottom;
        /*subtracting height of veiwport by
          bottom value position of button
          to get remaining space below it */
      const contentHeight = contentRef.current.clientHeight;
         /*height of content */

      const topPosition = spaceRemaining > contentHeight ?
        null : spaceRemaining - contentHeight;
      setDropdownTop(topPosition);

        /* if spaceRemaining is greater then contentHeight then
           there's more then enought space so we don't have to
           do anything to button's height, but if less it has to
           move up and because it's absolutely position negative 
           moves it up, subtracting content height is how much it
           needs to move up by */
    }
    
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
         ${open ? "dropdown-content-open" : null}`}
         ref={contentRef}
         style={{ top: dropdownTop ? `${dropdownTop}px` : "50%"}} /*was 100%*/
      >
         {list && list.map((item)=> 
           <div className="dropdown-item" key={item._id} onClick={() =>handleSelect(item)}>                                         
           {`${item.firstName} ${item.lastName}`}
           </div>)} 
      </div>
    </div>
   )
}
