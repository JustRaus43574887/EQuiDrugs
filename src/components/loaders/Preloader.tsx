import React from "react";
import { StyleSheet } from "react-native";

import { Layout, Spinner } from "@ui-kitten/components";

const Preloader: React.FC = () => {
  return (
    <Layout style={styles.wrap}>
      <Spinner />
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Preloader;
