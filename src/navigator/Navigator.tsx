import React from "react";

import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

//Nav
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

//Components
import Preloader from "~components/loaders/Preloader";

const Navigator: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        <NavigationContainer fallback={<Preloader />}>
          <StackNavigator />
        </NavigationContainer>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Navigator;
