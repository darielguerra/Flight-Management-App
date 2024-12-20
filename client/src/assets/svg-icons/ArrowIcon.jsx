import "../../pages/flights/Flights.css";

export const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="arrow-icon"
    >
      <rect x="0" fill="none" width="20" height="20" />

      <g>
        <path d="M2 11V9h12l-4-4 1-2 7 7-7 7-1-2 4-4H2z" />
      </g>
    </svg>
  );
};
