import React from "react";
import { Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

const HeaderOwn = (props) => {
  return (
    <Header
      style={styles.Header}
      leftComponent={{ icon: "arrow-left", color: "white" }}
      centerComponent={
        <Text style={styles.headerTitle}>{props.headerTitle}</Text>
      }
      rightComponent={{ icon: "home", color: "white" }}
    />
  );
};

const styles = StyleSheet.create({
  Header: {
    alignContent: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
  },
});
export default HeaderOwn;
