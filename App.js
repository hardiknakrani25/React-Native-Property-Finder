import React, { Component } from "react";

import { Platform, StyleSheet, Text, View, NavigatorIOS } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class SearchPage extends Component {
  render() {
    return <Text style={styles.description}>Search for houses to buy!</Text>;
  }
}

export default class App extends Component {
  render() {
    return <Text style={styles.description}>Search for houses to buy!</Text>;
  }

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: "Property Finder",
          component: SearchPage
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#656565",
    marginTop: 65
  },
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
