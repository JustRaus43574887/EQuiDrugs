import { List, useTheme } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import DrugItem from "~components/general/DrugItem";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackNavigator } from "~navigator/StackNavigator/types";
import ListEmpty from "./ListEmpty";
import ListHeader from "./ListHeader";
import SystemBarsWrap from "~components/general/SystemBarsWrap";
import { useAppSelector } from "~hooks/redux";
import { MedicamentName } from "~utils/api/routes/medicaments/types";

const Home: React.FC = () => {
  const { loading, medicaments } = useAppSelector((state) => state.medicaments);

  const navigation = useNavigation<NavigationProp<RootStackNavigator>>();

  const theme = useTheme();
  const backgroundColor = theme["color-primary-100"];
  const textHint = theme["text-hint-color"];

  const [isGrid, setIsGrid] = React.useState<boolean>(true);

  const onPress = () => navigation.navigate("DrugInfo");

  const numColumns = React.useMemo<number>(() => (isGrid ? 2 : 1), [isGrid]);

  const keyExtractor = (medicament: MedicamentName) => medicament.id;

  return (
    <SystemBarsWrap
      statusBarStyle="dark"
      navBarBackgroundColor={backgroundColor}
    >
      <List<MedicamentName>
        key={`grid-${isGrid}`}
        numColumns={numColumns}
        contentContainerStyle={styles.contentContainer}
        style={{ backgroundColor }}
        ListHeaderComponent={
          <ListHeader isGrid={isGrid} setIsGrid={setIsGrid} />
        }
        ListEmptyComponent={<ListEmpty loading={loading} />}
        keyExtractor={keyExtractor}
        data={medicaments}
        renderItem={(props) => (
          <DrugItem
            {...props}
            grid={isGrid}
            underlayColor={textHint}
            onPress={onPress}
          />
        )}
      />
    </SystemBarsWrap>
  );
};

const styles = StyleSheet.create({
  contentContainer: { flexGrow: 1, paddingHorizontal: 12 },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Home;
