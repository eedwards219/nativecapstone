import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView
} from "react-native";
import { Card, ListItem, Button, Icon, Header } from "react-native-elements";
import { Linking } from "expo";
import AuthStack from "./components/authStack";
import AppStack from "./components/appStack";
import { connect, Provider } from "react-redux";
import store from "./store/index";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpToggle from "./components/SignUpToggle";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import UpdateProfile from "./components/updateProfile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { fetchAllDrivers } from "./store/drivers/actions";
import { fetchAllPassengers } from "./store/passengers/actions";
import { fetchAllRides } from "./store/rides/actions";

let TheDecider = props => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  useEffect(() => {
    props.fetchAllRides();
    props.fetchAllDrivers();
    props.fetchAllPassengers();
  }, []);
  console.log("liu", props.loggedInUser);
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp/In"
          component={SignUpToggle}
          options={{
            title: "WELCOME",
            headerStyle: {
              backgroundColor: "#1f89dc"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "SIGN UP",
            headerStyle: {
              backgroundColor: "#1f89dc"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: "SIGN IN",
            headerStyle: {
              backgroundColor: "#1f89dc"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#1f89dc"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="AppStack"
          component={AppStack}
          options={{
            title: "HOME",
            headerStyle: {
              backgroundColor: "#1f89dc"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{
            title: "UpdateProfile",
            headerStyle: {
              backgroundColor: "#1f89dc"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//   let theStack = props.loggedInUser ? <AppStack /> : <AuthStack />;
//   if (props.loggedInUser) {
//     return <AppStack />;
//   } else {
//     return <AuthStack />;
//   }
//   return theStack;
// };

TheDecider = connect(mapStateToProps, {
  fetchAllRides,
  fetchAllDrivers,
  fetchAllPassengers
})(TheDecider);

const mapStateToProps = state => {
  return {
    loggedInUser: state.auth.loggedInUser
  };
};
const App = () => (
  <Provider store={store}>
    <TheDecider />
  </Provider>
);

// let App = createSwitchNavigator({
//   Auth: {
//     screen: AuthStack
//   },
//   App: {
//     screen: AppStack
//   }
// });
export default App; // App = createAppContainer(App);
// console.log("app", App);
// let ConnectedApp = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
// export default ConnectedApp();
