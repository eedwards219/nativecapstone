import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import {
  Card,
  ListItem,
  Button,
  Icon,
  Header,
  Image
} from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./signIn";
import SignUp from "./signUp";
import SignUpToggle from "./SignUpToggle";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppStack from "./appStack";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AuthStack(props) {
  console.log("props", props);

  return (
    <React.Fragment>
      {/* <Stack.Navigator>
        <Stack.Screen name="SignUp/In" component={SignUpToggle} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator> */}
      {/* <View>
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
            () => props.navigation.navigate("AuthStack", { screen: "SignIn" })
            // props.navigation.navigate("SignUp")
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
      </View> */}
    </React.Fragment>
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
