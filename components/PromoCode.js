import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

const PromoCode = (props) => {
  return (
    <View style={styles.promoholder}>
      <Text style={styles.promotext}>
        Enter Your Promo Code to Earn Rewards
      </Text>
      <TextInput style={styles.promoinput}></TextInput>
      <View style={styles.promoconfirm}>
        <Button
          title="Confirm Code"
          color="skyblue"
          onPress={() => props.SubmitCode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  promotext: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  promoholder: {
    padding: 10,
    width: "100%",
    alignContent: "center",
  },
  promoinput: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomColor: "black",
    borderRadius: 30,
    width: "80%",
    alignSelf: "center",
    marginVertical: 10,
  },
  promoconfirm: {
    width: "50%",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
export default PromoCode;
