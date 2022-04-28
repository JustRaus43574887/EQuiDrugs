import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color?: string;
  width?: number | string;
  height?: number | string;
};

const LogoIcon: React.FC<Props> = ({
  color = "#F7F9FC",
  width = "32",
  height = "32",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M2.94494 14.8086L14.8086 2.94494C18.752 -0.981647 25.1117 -0.981647 29.0551 2.94494C32.9816 6.87153 32.9816 13.248 29.0551 17.1914L17.1914 29.0551C13.248 32.9816 6.87153 32.9816 2.94494 29.0551C-0.981647 25.1117 -0.981647 18.752 2.94494 14.8086ZM5.32774 17.1914C3.56581 18.9365 2.9785 21.4368 3.58259 23.6686L13.634 13.634L20.7488 20.7488L26.6723 14.8086C29.3068 12.1909 29.3068 7.94546 26.6723 5.32774C24.0545 2.69324 19.8091 2.69324 17.1914 5.32774L5.32774 17.1914Z"
        fill={color}
      />
    </Svg>
  );
};

export default LogoIcon;
