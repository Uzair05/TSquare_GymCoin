import React from "react";
import { View, StyleSheet, Image } from "react-native";

var MyLogo = require("../assets/CustomPlaceholderLogo.png");

const LogoPiece = (props) => {
  return (
    <View style={styles.logoPiece}>
      <Image style={styles.images} source={MyLogo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  logoPiece: {
    width: "100%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    width: "50%",
  },
});
export default LogoPiece;
