import React from "react";

//UI
import { View, StyleSheet } from "react-native";
import { Spinner, Text } from "@ui-kitten/components";

type Props = {
  loading?: boolean;
};

const ListEmpty: React.FC<Props> = ({ loading }) => {
  const RenderInfo: React.FC = () => {
    return (
      <React.Fragment>
        <Text category={"h6"} appearance={"hint"}>
          Пока ничего нет.
        </Text>
        <Text style={styles.mt10} appearance={"hint"}>
          Введите название лекарства в вашей стране.
        </Text>
      </React.Fragment>
    );
  };

  return (
    <View style={styles.empty}>
      {loading ? <Spinner status={"info"} /> : <RenderInfo />}
    </View>
  );
};

const styles = StyleSheet.create({
  empty: { flex: 0.8, alignItems: "center", justifyContent: "center" },
  mt10: { marginTop: 10 },
});

export default ListEmpty;
