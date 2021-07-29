import React from "react";
import { View, StyleSheet, Button } from "react-native";

const InviteFriends = (props) => {
  return (
    <View style={styles.buttonHolder}>
      <Button
        style={styles.button1}
        title="Invite a Friend"
        onPress={() => {}}
        color="#87CEEB"
      />
      <Button
        style={styles.button2}
        title="Enter a Code"
        onPress={() => {}}
        color="#5E90A4"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonHolder: {
    flexDirection: "row",
    padding: 10,
    alignContent: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  button1: {
    width: 20,
    maxWidth: "30%",
  },
  button2: {
    width: 20,
    maxWidth: "30%",
  },
});
export default InviteFriends;
