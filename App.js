import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/home";
import Profile from "./components/profile";
import Resources from "./components/resources";
import { NavigationContainer } from "@react-navigation/native";
import { connect, Provider } from "react-redux";
import store from "./store/index";
import { MaterialCommunityIcons } from "react-native-vector-icons";

// export default function App() {
//   return <AppContainer />;
// }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: () => (
                <MaterialCommunityIcons name="home" color="#808080" size={24} />
              )
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="account"
                  color="#808080"
                  size={24}
                />
              )
            }}
          />
          <Tab.Screen
            name="Resources"
            component={Resources}
            options={{
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
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
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
