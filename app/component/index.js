import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import SearchPage from "./SearchPage";
export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
