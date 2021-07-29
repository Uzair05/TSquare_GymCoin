import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScreenView from "./screen/ScreenView";
import HeaderOwn from "./components/HeaderOwn";
import InviteFriends from "./components/InviteFriends";
import LogoPiece from "./components/LogoPiece";
import PromoCode from "./components/PromoCode";

import * as Font from "expo-font";
import { AppLoading } from "expo";

export default function App() {
  return (
    <ScreenView>
      <View>
        <HeaderOwn headerTitle="Promo Code" />
        <InviteFriends />
        <LogoPiece />
        <PromoCode SubmitCode={console.log("EnterPromoCodeSubmission")} />
      </View>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
