import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView
} from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Header,
  Image
} from "react-native-elements";
import SignIn from "./signIn";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./home";
import AppStack from "./appStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function SignUp(props) {
  console.log("liusignin", props.lo);
  return (
    <React.Fragment>
      {/* <Tab.Screen name="AppStack" component={AppStack} /> */}
      {/* <Tab.Screen name="SignUp" component={SignUp} /> */}
      <View style={styles.view}>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="I AM A DRIVER"
          onPress={() => props.navigation.navigate("AppStack")}
        />
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="I AM A PASSENGER"
          onPress={() => props.navigation.navigate("AppStack")}
        />
      </View>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  view: { flex: 1 }
});
