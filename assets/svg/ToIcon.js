import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ToIcon(props) {
  return (
    <Svg
      width={28}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14 0l-2.38 2.38 9.417 9.433H.5v3.374h20.537l-9.416 9.434L14 27l13.5-13.5L14 0z"
        fill="#006564"
      />
    </Svg>
  );
}

export default ToIcon;