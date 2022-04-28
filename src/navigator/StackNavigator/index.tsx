import React from "react";

//Nav
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackNavigator } from "./types";
import DrawerNavigator from "~navigator/DrawerNavigator";
import CountryModal from "~components/screens/stack/CountryModal";
import Greeting from "~components/screens/stack/Greeting";
import DrugInfo from "~components/screens/stack/DrugInfo";

//Components

const Stack = createNativeStackNavigator<RootStackNavigator>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={"Greeting"}>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Greeting"
        component={Greeting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrugInfo"
        component={DrugInfo}
        options={{ headerBackTitle: "Назад" }}
      />
      <Stack.Group
        screenOptions={{ presentation: "transparentModal", headerShown: false }}
      >
        <Stack.Screen name="CountryModal" component={CountryModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
