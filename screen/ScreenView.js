import React from "react";
import { View, StyleSheet } from "react-native";

const ScreenView = (props) => {
  return (
    <View style={{ ...styles.screen, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#000080",
    paddingTop: 30,
    height: "100%",
    width: "100%",
  },
});

export default ScreenView;
