import * as React from "react";
const SvgCloud = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={54}
    height={54}
    fill="none"
    viewBox="0 0 74 74"
    {...props}
  >
    <path fill="url(#cloud_svg__a)" d="M.819 0h72.659v74H.819z" />
    <defs>
      <pattern
        id="cloud_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#cloud_svg__b"
          transform="matrix(.01 0 0 .00982 0 .01)"
        />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEAUlEQVR4nO2aSWgUQRSGI+jVk8sxXUlUcEMQNxQXEBREzwp696CgCSiomJvLxQWnXhxNICqKGDExHsQYlxzUg7t4MMHEDVRcoqmayUySkZJqEHXMhJ52xlf2/D/8l2l4/eb/uraZLiuDIAiCIAiCIAiCICgCqiA9XUhdLUgdEqTjsI77WUhdXRnT0/4liAke6VZB2sA6dwZSX7RZFR2GIN0NEDrQw+hJ/bzqsBpfNCAYGTrMrNBcvDUD05QJk0FR1hRBugZAdLh1M6a3Fh6IVAcBRIcC4pE6UHAgnlQxANHhgEgVAxByZ1sOIMQPAUCIP3gAIf6wAYT4AwYQ4g8VQIg/SAAh/vAAxIHABIDwhyQAhD8YASD8YQgHjJ9OiB8CgBB/8ABC/GEDCPEHDCDEHyqAEH+QAEL84ZUkkPmNCbOlPWV2dqTNupakqawLX2vF2aTZfiPle+XZZOg6VXXa78X2tLU9ZeadSJQGkG3XU+bF12/mjfrp9pdDZk5jfgFUHdWm4fHgb3Wsjz8a9K/lU2tuY8Lv4dc6tsea9lS0gdgn8HVWgD98uXvQVORRa/+d9LB1rPfdSQeuY+95pedPsNa217UtyegCae78/SnM9upz/YHqTI5r09WbyVmnszdjJgUcJWua+kfs6ULnUHSBPHiXO0TrTW3BpohFp5Ij1rFeeDLYk725LTViHdtzZIFcz5qns72+NdgImVmfMK/6ctex12bUB1uTNlwaeYTYtSWyQHZ15J73n3zImKnHgi/s55/lhtv0LHiI9p5PP+YeuTtupqMLxM7rLcOsI91fvvkLvsij1oITCXN/mCnw3vuMv63Op5a9t+0hu1Zz11Dgtei/BGJtt6TV11I+mKsvhszRBwNm6elwO5lZDQmz93ba36FZ77mV9j8LU2vZmaSJPxzwe7KbD3tOynf7/F8CKUV7AKLZIQAI8QcPIMQfNoAQf8AAQvyhAgjxBwkgxB8egDgQmAAQ/pAEgPAHIwCEPwzhgPHTCfFDABDiDx5AiD9sACH+gAGE+EMFEOIPEkCIPzwAcSAwASAlB+QIXnIgp4DsBhByyssBhBwZHaQ7l9Sa0QBCDsCQatCLqcUFh4EX5XQYIF8qZN+qosAoNBBP6q+CdG/kLNVbIfVtj1Tt5LgaVzQYBQayr8yYUUVtthT010CkypRLtZH7e0RGfwVEqqSQfau5v0OkFBqI1J8r6tRC7v4jp5BAejzqm8LdeySVLxBPqrviuJ7I3XdklQ8Qj9TVqsOfxnL3HGkFBiJV4+y4GcPdb+QVEAjOGE4AwRnDISA4YzgEBGcMp4DgjOEKEJwxHAKCM4ZLQHDGcEflscQs/I8BQRAEQRAEQRAEQVBZSek70b1M9BzWEhsAAAAASUVORK5CYII="
        id="cloud_svg__b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default SvgCloud;
