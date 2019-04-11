"use strict";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image
} from "react-native";

export default class SearchPage extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.conatiner}>
        <Text style={styles.description}>Search house to buy!</Text>
        <Text style={styles.description}>Search by place-name or postcode</Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search via name or postcode"
          />
          <Button onPress={() => {}} color="#48BBEC" title="Go" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#656565"
  },
  flowRight: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch"
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#48BBEC",
    borderRadius: 8,
    color: "#48BBEC"
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center"
  }
});
