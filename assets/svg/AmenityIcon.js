import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AmenityIcon(props) {
  return (
    <Svg
      width={30}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24 18h-3v-1.5H9V18H6v-1.5H0V24h30v-7.5h-6V18zM27 6h-4.5V3c0-1.65-1.35-3-3-3h-9c-1.65 0-3 1.35-3 3v3H3C1.35 6 0 7.35 0 9v6h6v-3h3v3h12v-3h3v3h6V9c0-1.65-1.35-3-3-3zm-7.5 0h-9V3h9v3z"
        fill={props.color}
      />
    </Svg>
  );
}

export default AmenityIcon;