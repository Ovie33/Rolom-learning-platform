import * as React from "react";
const SvgIphone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={53}
    height={54}
    fill="none"
    viewBox="0 0 73 74"
    {...props}
  >
    <path fill="url(#iphone_svg__a)" d="M0 0h72.659v74H0z" />
    <defs>
      <pattern
        id="iphone_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#iphone_svg__b"
          transform="matrix(.01 0 0 .00982 0 .01)"
        />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="iphone_svg__b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default SvgIphone;