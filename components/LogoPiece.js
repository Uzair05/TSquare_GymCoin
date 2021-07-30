import React from "react";
import { View, StyleSheet, Image } from "react-native";

var MyLogo = require("../assets/CustomPlaceholderLogo.png");

const LogoPiece = (props) => {
  return (
    <View style={{ ...styles.logoPiece, ...props.logoPieceStyle }}>
      <Image style={styles.images} source={MyLogo} resizeMode="center" />
    </View>
  );
};

const styles = StyleSheet.create({
  logoPiece: {
    width: "100%",
    height: "30%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    width: "40%",
  },
});
export default LogoPiece;
