import React, { Component } from "react";

import { SafeAreaView, Button } from "react-native";

export default class App extends Component {
  handleClick = () => {
    console.log("button click");

    this.props.navigation.navigate("index");
  };
  render() {
    return (
      <SafeAreaView>
        <Button onPress={this.handleClick} title="clcik me" />
      </SafeAreaView>
    );
  }
}
