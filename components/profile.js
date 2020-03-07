import { Header, Card } from "react-native-elements";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";
import { fetchAllDrivers } from "../store/drivers/actions";
import { fetchAllPassengers } from "../store/passengers/actions";
import { fetchAllRides } from "../store/rides/actions";

// onClickListener = viewId => {
//   Alert.alert("Alert", "Button pressed " + viewId);
// };

function Profile(props) {
  //   useEffect(() => {
  //     props.fetchAllRides();
  //     props.fetchAllDrivers();
  //     props.fetchAllPassengers();
  //   }, []);
  console.log("drivers", props.drivers);
  return (
    <ScrollView style={styles.view}>
      {/* <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "PROFILE", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      /> */}
      <ImageBackground
        source={require("../assets/unnamed.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
                }}
              />

              <Text style={styles.name}>{props.loggedInUser.name}</Text>
              <Text style={styles.userInfo}>{props.loggedInUser.email} </Text>
              <Text style={styles.userInfo}>
                {props.loggedInUser.phoneNumber}
              </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://png.icons8.com/home/win8/50/ffffff"
                  }}
                />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Home</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://png.icons8.com/settings/win8/50/ffffff"
                  }}
                />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Settings</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: "https://png.icons8.com/news/win8/50/ffffff"
                  }}
                />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>News</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image
                  style={styles.icon}
                  source={{
                    uri:
                      "https://png.icons8.com/shopping-basket/ios11/50/ffffff"
                  }}
                />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Shop</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1 },
  scrollContainer: {
    flex: 1
  },
  container: {
    padding: 20
  },
  box: {
    marginTop: 10,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2,
    paddingTop: 10
  },
  profileImage: {
    width: 300,
    height: 300,
    marginBottom: 20
  },
  name: {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#1E90FF"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20
  },

  button: {
    width: 60,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 30,
    margin: 10,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: -2
    },
    elevation: 4
  },
  buttonMessage: {
    backgroundColor: "#00BFFF"
  },
  buttonLike: {
    backgroundColor: "#228B22"
  },
  buttonLove: {
    backgroundColor: "#FF1493"
  },
  buttonCall: {
    backgroundColor: "#40E0D0"
  },
  icon: {
    width: 35,
    height: 35
  },
  header: {
    backgroundColor: "#DCDCDC"
  },
  headerContent: {
    padding: 30,
    alignItems: "center"
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600"
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600"
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: "center"
  },
  item: {
    flexDirection: "row"
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF"
  }
});
const mapStateToProps = state => {
  console.log("state", state.drivers.all);
  return {
    drivers: state.drivers.all.filter(driver => driver.id),
    loggedInUser: state.auth.loggedInUser,
    rides: state.rides.all
  };
};
export default connect(mapStateToProps)(Profile);