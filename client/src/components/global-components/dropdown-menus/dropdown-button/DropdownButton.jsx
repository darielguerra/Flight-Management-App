import React from 'react';
import { forwardRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../Dropdowns.css";

import { ArrowIcon } from "../../../../assets/svg-icons/ArrowIcon";

export const DropdownButton = React.forwardRef((props, ref ) => {
 
  /*fowardRef is a way of passing a ref to a component*/

  const { children, open, toggle } = props;
   
  return( 
    <>
      <div 
        onClick={toggle} 
        className={`dropdown-btn ${open ?
        "dropdown-btn-open" : null}`}
        ref={ref}
      >
        {children}
        <span className="dropdown-toggle-icon">
          {open ? <FaChevronUp />
                  : <FaChevronDown />}       
        </span>
      </div>
      <div onClick={toggle} className="toggle-icon-click-open"></div>
      {/*onClick toggle not working on icons so place this div over it */}
    </>
)})

