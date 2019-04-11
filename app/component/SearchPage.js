import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class SearchPage extends React.Component {
  render() {
    return <Text style={styles.description}>Search house to buy!</Text>;
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#656565",
    marginTop: 65
  }
});
