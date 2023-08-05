import * as React from "react";
const SvgArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={47}
    fill="none"
    viewBox="0 0 30 77"
    {...props}
  >
    <path
      fill="#fff"
      d="M13.586 76.414a2 2 0 0 0 2.828 0l12.728-12.728a2 2 0 1 0-2.828-2.828L15 72.172 3.686 60.858a2 2 0 1 0-2.828 2.828l12.728 12.728ZM13 0v75h4V0h-4Z"
    />
  </svg>
);
export default SvgArrow;
