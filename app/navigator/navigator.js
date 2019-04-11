// import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import index from "../component/index";

const AppNavigator = createStackNavigator(
  {
    index
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
