import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowRightIcon(props) {
  return (
    <Svg
      width={14}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 20.797L8.653 12 0 3.203 2.664.5 14 12 2.664 23.5 0 20.797z"
        fill="#888"
      />
    </Svg>
  );
}

export default ArrowRightIcon;