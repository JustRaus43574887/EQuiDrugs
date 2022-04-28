import {
  Layout,
  useTheme,
  Text,
  Input,
  Button,
  Autocomplete,
  AutocompleteItem,
} from "@ui-kitten/components";
import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { RootStackNavigator } from "~navigator/StackNavigator/types";
import SystemBarsWrap from "~components/general/SystemBarsWrap";
import { useAppDispatch, useAppSelector } from "~hooks/redux";
import { getCountriesList } from "~redux/slices/countriesSlice";
import { Country } from "~utils/api/routes/countries/types";

const Greeting: React.FC = () => {
  const isAndroid = Platform.OS === "android";

  const navigation =
    useNavigation<NavigationProp<RootStackNavigator, "Greeting">>();

  const theme = useTheme();
  const primary = theme["color-primary-default"];
  const background = theme["color-basic-100"];

  const { bottom } = useSafeAreaInsets();

  const navToHome = () => navigation.dispatch(StackActions.replace("Drawer"));

  const [myCountry, setMyCountry] = React.useState<string>("");

  const { countriesList, loading } = useAppSelector((state) => state.countries);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getCountriesList({ lang: "RU" }));
  }, []);

  const onSelect = (index: number) => {
    setMyCountry(countriesList[index].name);
  };

  const renderOption = (item: Country, index: number) => (
    <AutocompleteItem key={index} title={item.name} />
  );

  const ref = React.useRef<Autocomplete>(null);

  return (
    <SystemBarsWrap
      statusBarStyle="light"
      statusBarBackgroundColor={primary}
      navBarBackgroundColor={background}
    >
      <KeyboardAvoidingView
        behavior={isAndroid ? undefined : "padding"}
        style={{
          ...styles.wrap,
          backgroundColor: primary,
        }}
      >
        <View style={styles.intro}>
          <Text category={"h2"} appearance={"alternative"}>
            Здравствуйте, я EQuiDrugs &#128521;
          </Text>
          <Text
            style={styles.description}
            appearance={"alternative"}
            category={"s1"}
          >
            Помощник в поиске аналоговых лекарств в любой точке мира. Заполните
            поля, это поможет мне найти то, что вы ищите.
          </Text>
        </View>
        <Layout
          style={{
            ...styles.form,
            paddingBottom: isAndroid ? 10 : bottom,
          }}
        >
          <Text style={styles.mt24}>Из какой вы страны?</Text>
          <Autocomplete
            ref={ref}
            value={myCountry}
            onChangeText={setMyCountry}
            onSelect={onSelect}
            style={styles.mt10}
          >
            {countriesList.map(renderOption)}
          </Autocomplete>
          <Text style={styles.mt24}>В какой стране вы путешествуете?</Text>
          <Autocomplete
            value={myCountry}
            onChangeText={setMyCountry}
            onSelect={onSelect}
            style={styles.mt10}
          >
            {countriesList.map(renderOption)}
          </Autocomplete>
          <Button style={styles.mt90} disabled={loading}>
            Далее
          </Button>
          <Button style={styles.mt20} appearance={"ghost"} onPress={navToHome}>
            Сделать это позже
          </Button>
        </Layout>
      </KeyboardAvoidingView>
    </SystemBarsWrap>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "flex-end",
  },
  intro: { padding: 16 },
  description: { marginVertical: 24 },
  form: { padding: 16, borderTopLeftRadius: 30, borderTopRightRadius: 30 },
  mt24: { marginTop: 24 },
  mt10: { marginTop: 10 },
  mt90: { marginTop: 90 },
  mt20: { marginTop: 20 },
});

export default Greeting;
