import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MapIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.333 0l-.213.04L16 2.8 8 0 .48 2.533a.672.672 0 00-.48.64v20.16A.66.66 0 00.667 24l.213-.04L8 21.2l8 2.8 7.52-2.533a.672.672 0 00.48-.64V.667A.66.66 0 0023.333 0zM16 21.333L8 18.52V2.667l8 2.813v15.853z"
        fill={props.color}
      />
    </Svg>
  );
}

export default MapIcon;