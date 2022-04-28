import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackNavigator } from "~navigator/StackNavigator/types";

const CountryModal: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackNavigator>>();
  const { bottom } = useSafeAreaInsets();

  const goBack = () => navigation.goBack();

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={styles.wrap}>
        <TouchableWithoutFeedback onPress={goBack}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
        <Layout
          style={{
            ...styles.layout,
            paddingBottom: bottom,
          }}
        >
          <Text style={styles.mt24} category={"s1"}>
            Из какой вы страны?
          </Text>
          <Input style={styles.mt10} placeholder="Выберите страну..." />
          <Text style={styles.mt24} category={"s1"}>
            В какой стране вы путешествуете?
          </Text>
          <Input style={styles.mt10} placeholder="Выберите страну..." />
          <Button style={styles.mt150} onPress={goBack}>
            Применить
          </Button>
        </Layout>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.51)",
    justifyContent: "flex-end",
  },
  layout: {
    padding: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  mt24: { marginTop: 24 },
  mt10: { marginTop: 10 },
  mt150: { marginTop: 150 },
});

export default CountryModal;
