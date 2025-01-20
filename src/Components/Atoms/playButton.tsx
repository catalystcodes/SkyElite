import { SVGProps } from "react";
const PlayButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M5.76 3.689.222 6.886V.492L5.76 3.689Z" />
  </svg>
);
export default PlayButton;
