import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Profile from "./profile";
import Resources from "./resources";
// import Auth from "./components/auth";
import { NavigationContainer } from "@react-navigation/native";
import { connect, Provider } from "react-redux";
import store from "../store/index";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import AuthStack from "./authStack";

const Tab = createBottomTabNavigator();
function getHeaderTitle(route) {
  // Access the tab navigator's state using `route.state`
  const routeName = route.state
    ? // Get the currently active route name in the tab navigator
      route.state.routes[route.state.index].name
    : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
      // In our case, it's "Feed" as that's the first screen inside the navigator
      route.params?.screen || "HOME";

  switch (routeName) {
    case "Home":
      return "HOME";
    case "Profile":
      return "PROFILE";
    case "Resources":
      return "RESOURCES";
  }
}

export default function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        // options={({ route }) => ({
        //   headerTitle: getHeaderTitle(route)
        // })}
        options={{
          title: "HOME",
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#808080" size={24} />
          ),
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "PROFILE",
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color="#808080" size={24} />
          )
        }}
      />
      <Tab.Screen
        options={{ title: "RESOURCES" }}
        name="Resources"
        component={Resources}
        options={{
          title: "RESOURCES",
          tabBarLabel: "Resources",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="book-open"
              color="#808080"
              size={24}
            />
          )
        }}
      />
      {/* <Tab.Screen
        name="AuthStack"
        tabBarVisible={false}
        component={AuthStack}
        options={{
          tabBarLabel: "AuthStack",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#808080" size={24} />
          )
        }}
      /> */}
    </Tab.Navigator>
  );
}
// const AppContainer = createAppContainer(AppNavigator);

// const AppNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: Home
//     },
//     Profile: {
//       screen: Profile
//     },
//     Resources: {
//       screen: Resources
//     }
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
