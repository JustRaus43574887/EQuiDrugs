import { DrawerHeaderProps } from "@react-navigation/drawer";
import { Input, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity, View, StyleSheet, ImageProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppDispatch } from "~hooks/redux";
import Icons from "~icons/.";
import { clearState, searchMedicaments } from "~redux/slices/medicamentsSlice";

const Header: React.FC<DrawerHeaderProps> = ({ navigation }) => {
  const theme = useTheme();
  const backgroundColor = theme["color-basic-100"];
  const textColor = theme["text-basic-color"];
  const textHint = theme["text-hint-color"];

  const { top } = useSafeAreaInsets();

  const openDrawer = () => navigation.openDrawer();

  const onChangeCountry = () => navigation.navigate("CountryModal");

  const dispatch = useAppDispatch();
  const [query, setQuery] = React.useState<string>("");
  React.useEffect(() => {
    if (query.length)
      dispatch(searchMedicaments({ query, country_code: "RU" }));
  }, [query]);

  const clearQuery = React.useCallback(() => {
    setQuery("");
    dispatch(clearState());
  }, [setQuery]);

  const RenderClearAction: React.FC<Partial<ImageProps>> = React.useCallback(
    (props) => {
      return query.length ? (
        <TouchableOpacity onPress={clearQuery}>
          <Icons.Eva.CloseIcon {...props} />
        </TouchableOpacity>
      ) : (
        <></>
      );
    },
    [clearQuery, query]
  );

  return (
    <View
      style={{
        padding: 16,
        paddingTop: top + 16,
        backgroundColor,
      }}
    >
      <View style={styles.wrap}>
        <Icons.LogoIcon color={textColor} />
        <TouchableOpacity onPress={onChangeCountry}>
          <View style={styles.countries}>
            <Text style={{ marginRight: 5 }} appearance={"hint"}>
              Россия - Испания
            </Text>
            <Icons.Eva.ChevronDownIcon width={20} height={20} fill={textHint} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 5 }} onPress={openDrawer}>
          <Icons.Eva.MenuIcon width={30} height={30} fill={textColor} />
        </TouchableOpacity>
      </View>
      <Input
        value={query}
        onChangeText={setQuery}
        accessoryLeft={Icons.Eva.SearchIcon}
        accessoryRight={<RenderClearAction />}
        placeholder="Название лекарства в вашей стране"
        style={{ marginTop: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  countries: { flexDirection: "row", alignItems: "center" },
});

export default Header;
