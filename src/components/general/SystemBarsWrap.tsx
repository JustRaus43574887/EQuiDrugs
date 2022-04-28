import React from "react";

//UI
import { ColorValue, Platform } from "react-native";
import { StatusBar, StatusBarStyle } from "expo-status-bar";
import * as NavBar from "expo-navigation-bar";
import { NavigationBarButtonStyle } from "expo-navigation-bar";

type Props = {
  children?: React.ReactNode;
  statusBarStyle?: StatusBarStyle;
  navigationBarButtonStyle?: NavigationBarButtonStyle;
  navBarBackgroundColor?: ColorValue;
  statusBarBackgroundColor?: string;
};

const SystemBarsWrap: React.FC<Props> = ({ children, ...props }) => {
  const {
    statusBarStyle = "dark",
    navigationBarButtonStyle = "dark",
    navBarBackgroundColor = "white",
    statusBarBackgroundColor,
  } = props;

  const isAndroid = Platform.OS === "android";

  React.useEffect(() => {
    if (isAndroid) {
      NavBar.setBackgroundColorAsync(navBarBackgroundColor);
      NavBar.setButtonStyleAsync(navigationBarButtonStyle);
    }
  }, [isAndroid, navBarBackgroundColor, navigationBarButtonStyle]);

  return (
    <React.Fragment>
      <StatusBar
        style={statusBarStyle}
        backgroundColor={statusBarBackgroundColor}
      />
      {children}
    </React.Fragment>
  );
};

export default React.memo(SystemBarsWrap);
