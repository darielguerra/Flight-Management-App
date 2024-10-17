import React from 'react';
import { forwardRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../Dropdowns.css";

export const DropdownButton = React.forwardRef((props, ref ) => {
 
  /*fowardRef is a way of passing a ref to a component*/

  const { children, open, toggle } = props;
 
  return( 
    <div 
      onClick={toggle} 
      className={`dropdown-btn ${open ?
      "dropdown-btn-open" : null}`}
      ref={ref}
    >
      {children}
      <span className="dropdown-toggle-icon">
        {open ? <FaChevronUp /> : <FaChevronDown />}        
      </span>
    </div>
)})
