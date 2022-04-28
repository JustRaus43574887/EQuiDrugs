import React from "react";

//UI
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, useTheme } from "@ui-kitten/components";

import Icons from "~icons/.";

type Props = {
  isGrid: boolean;
  setIsGrid: React.Dispatch<React.SetStateAction<boolean>>;
};

const ListHeader: React.FC<Props> = ({ isGrid, setIsGrid }) => {
  const theme = useTheme();

  const textHint = theme["text-hint-color"];
  const textBasic = theme["text-basic-color"];

  const handleSetGrid = (value: boolean) => () => setIsGrid(value);

  return (
    <View style={styles.header}>
      <Text appearance={"hint"}>Найдено: 123</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={handleSetGrid(true)}>
          <Icons.Eva.GridIcon
            width={25}
            height={25}
            fill={isGrid ? textBasic : textHint}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSetGrid(false)}>
          <Icons.Eva.ListIcon
            width={25}
            height={25}
            fill={isGrid ? textHint : textBasic}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default React.memo(ListHeader);
