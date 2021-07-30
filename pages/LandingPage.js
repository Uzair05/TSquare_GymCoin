import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ScreenView from "../screen/ScreenView";
import HeaderOwn from "../components/HeaderOwn";
import LogoPiece from "../components/LogoPiece";

const LandingPage = (props) => {
  return (
    <ScreenView>
      <HeaderOwn headerTitle="Home Page" />
      <LogoPiece />
      <View>
        <Text style={styles.promptText}>Select The Page To Go To:</Text>
        <View style={styles.buttonHolder}>
          <Button
            title="Login/Signup"
            style={styles.navbutton}
            onPress={() => {
              props.navigation.navigate("LoginCreateAccountPageScreen");
            }}
          />
        </View>
        <View style={styles.buttonHolder}>
          <Button
            title="Invite Friends"
            style={styles.navbutton}
            onPress={() => {
              props.navigation.navigate("InviteFriendScreen");
            }}
          />
        </View>
        <View style={styles.buttonHolder}>
          <Button
            title="Add Promo Code"
            style={styles.navbutton}
            color="orange"
            onPress={() => {
              props.navigation.navigate("AddPromoCodeScreen");
            }}
          />
        </View>
        <View style={styles.buttonHolder}>
          <Button
            title="Start Exercise"
            style={styles.navbutton}
            color="orangered"
            onPress={() => {
              props.navigation.navigate("StartExcerciseScreen");
            }}
          />
        </View>
      </View>
    </ScreenView>
  );
};
const styles = StyleSheet.create({
  promptText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
  },
  navbutton: {},
  buttonHolder: {
    padding: 7,
    margin: 3,
    width: 200,
    maxWidth: "80%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default LandingPage;
