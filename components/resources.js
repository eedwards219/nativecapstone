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

export default function Resources() {
  return (
    <ScrollView style={styles.view}>
      {/* <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "RESOURCES", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      /> */}
      <ImageBackground
        source={require("../assets/unnamed.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Card title="Registered?" image={require("../assets/p07snhjs.jpg")}>
          <Text style={{ marginBottom: 10 }}>
            If you're unsure if you're registered to vote, use this link to
            check:
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="CHECK REGISTRATION"
            onPress={() =>
              Linking.openURL("https://www.vote.org/am-i-registered-to-vote")
            }
          />
        </Card>
        <Card
          title="Are you an undecided voter?"
          image={require("../assets/960x0.jpg")}
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
            title="TAKE QUIZ"
            onPress={() => Linking.openURL("https://www.isidewith.com/")}
          />
        </Card>
        <Card title="Registered?" image={require("../assets/unnamed.jpg")}>
          <Text style={{ marginBottom: 10 }}>
            If you're unsure if you're registered to vote, use this link to
            check:
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="Check registration on vote.org"
            onPress={() =>
              Linking.openURL("https://www.vote.org/am-i-registered-to-vote")
            }
          />
        </Card>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  view: { flex: 1 }
});
