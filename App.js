import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/home";
import Profile from "./components/profile";
import Resources from "./components/resources";
import { NavigationContainer } from "@react-navigation/native";

// export default function App() {
//   return <AppContainer />;
// }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Resources" component={Resources} />
      </Tab.Navigator>
    </NavigationContainer>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
