import "../Dropdown.css";

export const DropdownContent = ({children, open}) => {
  return (
    <div className={`dropdown-content
      ${open ? "dropdown-content-open" : null}`}>
      {children}
    </div>
)}
