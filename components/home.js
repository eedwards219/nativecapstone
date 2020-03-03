import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView
} from "react-native";
import { Header } from "react-native-elements";

export default function Home() {
  return (
    <ScrollView style={styles.view}>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "HOME", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <ImageBackground
        source={require("../assets/unnamed.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text>Home</Text>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  view: { flex: 1 }
});
