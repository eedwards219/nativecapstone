import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView
} from "react-native";
import { Card, ListItem, Button, Icon, Header } from "react-native-elements";
import { Linking } from "expo";
import SignUp from "./signUp";
import SignIn from "./signIn";

export default function SignUpToggle(props) {
  return (
    <View style={styles.view}>
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        }}
        title="SIGN UP"
        onPress={
          () => props.navigation.navigate("SignUp")

          // props.navigation.navigate("AuthStack", { screen: "SignUp" })
        }
      />
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        }}
        title="SIGN IN"
        onPress={() => props.navigation.navigate("SignIn")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  view: { flex: 1 },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 20
  }
  // button: { flex: 1, padding: 10, margin: 10 }
});
