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
import { connect } from "react-redux";

import { Linking } from "expo";
// import { fetchAllDrivers } from "../store/drivers/actions";
// import { fetchAllPassengers } from "../store/passengers/actions";
// import { fetchAllRides } from "../store/rides/actions";

function Home(props) {
  //   useEffect(() => {
  //     props.fetchAllRides();
  //     props.fetchAllDrivers();
  //     props.fetchAllPassengers();
  //   }, []);

  return (
    <ScrollView style={styles.view}>
      {/* <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "HOME", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      /> */}
      <ImageBackground
        source={require("../assets/unnamed.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Card
          title="STEP ONE: CHECK VOTER REGISTRATION STATUS"
          image={require("../assets/vote678.jpeg")}
        >
          <Text style={{ marginBottom: 10 }}>
            See which American political parties, candidates, and ballot
            initiatives match your beliefs based on the 2020 issues that are
            most important to you.
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="CLICK HERE"
            onPress={() =>
              Linking.openURL("https://www.vote.org/am-i-registered-to-vote")
            }
          />
        </Card>
        <Card
          title="STEP TWO: CONFIRM YOUR PROFILE INFORMATION IS CORRECT"
          image={require("../assets/355-3554387_create-digital-profile-icon-blue-profile-icon-png.png")}
        >
          <Text style={{ marginBottom: 10 }}>
            See which American political parties, candidates, and ballot
            initiatives match your beliefs based on the 2020 issues that are
            most important to you.
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="CLICK HERE"
            onPress={() => props.navigation.navigate("Profile")}
          />
        </Card>
        <Card
          title="STEP THREE: CLICK THE COMPASS TO BE MATCHED WITH A DRIVER"
          //   image={require("../assets/960x0.jpg")}
        >
          <Icon
            raised
            name="compass"
            // color="#ffffff"
            type="font-awesome"
            size={150}
            color="#2089DC"
            onPress={() => console.log("hello")}
          />
          <Text style={{ marginBottom: 10 }}>
            See which American political parties, candidates, and ballot
            initiatives match your beliefs based on the 2020 issues that are
            most important to you.
          </Text>
        </Card>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  view: { flex: 1 }
});

{
  /* <Card
          title="Getting Started"
          image={require("../assets/355-3554387_create-digital-profile-icon-blue-profile-icon-png.png")}
        >
          {/* <Icon
            raised
            name="compass"
            size={150}
            type="font-awesome"
            color="#f50"
            onPress={() => console.log("hello")}
          />
          <Button
            // icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="STEP 1:
            CLICK HERE TO CHECK YOUR VOTER REGISTRATION STATUS"
            onPress={() =>
              Linking.openURL("https://www.vote.org/am-i-registered-to-vote")
            }
          />
          <Button
            // icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="STEP 1:
            CLICK HERE TO CHECK YOUR PROFILE INFO"
            onPress={() => navigation.navigate("Profile")}
          />
          {/* <Image source={{ uri: image }}></Image> 
          <Text style={{ marginBottom: 10 }}>
            When you are ready to get picked up, click the button below to be
            matched with a driver. onPress=
            {() => navigation.navigate("Profile")}
          </Text>
          <Icon
            raised
            name="compass"
            // color="#ffffff"
            type="font-awesome"
            size={150}
            color="#2089DC"
            onPress={() => console.log("hello")}
          />
        </Card> */
}
export default connect()(Home);
