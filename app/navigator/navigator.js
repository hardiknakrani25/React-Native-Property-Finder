// import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import index from "../component/index";
import SearchResults from "../component/SearchResults";
import SearchPage from "../component/SearchPage";
import Demo from "../../App";
import PropertyDetails from "../component/propertyDetails";
const AppNavigator = createStackNavigator(
  {
    SearchPage,
    SearchResults,
    PropertyDetails
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
