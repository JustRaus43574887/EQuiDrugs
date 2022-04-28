import React from "react";
import { Text } from "@ui-kitten/components";
import {
  ListRenderItemInfo,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import Icons from "~icons/.";
import { MedicamentName } from "~utils/api/routes/medicaments/types";

interface Props extends ListRenderItemInfo<MedicamentName> {
  grid: boolean;
  underlayColor: string;
  onPress?: () => void;
}

const DrugItem: React.FC<Props> = ({
  item,
  grid,
  underlayColor,
  onPress = () => {},
}) => {
  return (
    <TouchableHighlight
      style={{
        ...styles.wrap,
        flexDirection: grid ? "column" : "row",
      }}
      underlayColor={underlayColor}
      onPress={onPress}
    >
      <>
        <View
          style={[
            styles.imageWrap,
            grid
              ? { borderTopRightRadius: 10 }
              : { borderBottomLeftRadius: 10 },
          ]}
        >
          <Icons.LogoIcon width="47" height="47" color="#E6EBF3" />
        </View>
        <View style={{ padding: grid ? 10 : 24, flex: 1 }}>
          <Text>{item.name}</Text>
        </View>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 0.5,
    marginHorizontal: 4,
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: "white",
  },
  imageWrap: {
    minWidth: 164,
    height: 164,
    backgroundColor: "#F7F9FC",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 10,
  },
});

export default DrugItem;
