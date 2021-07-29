import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScreenView from "../screen/ScreenView";
import HeaderOwn from "../components/HeaderOwn";
import InviteFriends from "../components/InviteFriends";
import LogoPiece from "../components/LogoPiece";
import PromoCode from "../components/PromoCode";

const AddPromoCodePage = (props) => {
  return (
    <ScreenView>
      <View>
        <HeaderOwn headerTitle="Promo Code" />
        <InviteFriends />
        <LogoPiece />
        <PromoCode SubmitCode={() => {}} />
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

export default AddPromoCodePage;
