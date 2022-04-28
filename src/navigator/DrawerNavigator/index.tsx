import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootDrawerNavigator } from "./types";
import { useWindowDimensions } from "react-native";
import DrawerHeader from "~components/navigation/drawer/DrawerHeader";
import Home from "~components/screens/drawer/Home";
import DrawerContent from "~components/navigation/drawer/DrawerContent";

const Drawer = createDrawerNavigator<RootDrawerNavigator>();

export default function DrawerNavigator() {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: { width },
        header: DrawerHeader,
        drawerPosition: "right",
      }}
      drawerContent={DrawerContent}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
