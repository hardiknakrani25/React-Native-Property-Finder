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
  constructor(props) {
    super(props);
    this.state = {
      searchString: "surat"
    };
  }

  _onSearchTextChanged = event => {
    console.log("_onSearchTextChanged");
    this.setState({ searchString: event.nativeEvent.text });
    console.log(
      "Current :" +
        this.state.searchString +
        ", Next: " +
        event.nativeEvent.text
    );
  };
  render() {
    console.log("SearchPage.render");

    return (
      <SafeAreaView style={styles.conatiner}>
        <Text style={styles.description}>Search house to buy!</Text>
        <Text style={styles.description}>Search by place-name or postcode</Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this._onSearchTextChanged}
            placeholder="Search via name or postcode"
          />
          <Button onPress={() => {}} color="#48BBEC" title="Go" />
        </View>
        <View style={{ alignSelf: "center" }}>
          <Image
            source={require("../Resources/house.png")}
            style={styles.image}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 217,
    height: 138
  },
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
    marginLeft: 10,
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
