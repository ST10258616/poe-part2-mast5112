import React from "react";
import { createStackNavigator } from "@react-navigation/native-stack";
import AddBook from "../screens/AddBook";
import Library from "../screens/library";
import Settings from "../screens/setting";
import Home from "../screens/home";

const StackNavigator = createStackNavigator();

const Navigator = () => {
  return (
    <StackNavigator initialRouteName="Home">
      <StackNavigator.Screen name="Home" component={Home} />
      <StackNavigator.Screen name="AddBook" component={AddBook} />
      <StackNavigator.Screen name="Library" component={Library} />
      <StackNavigator.Screen name="Settings" component={Settings} />
    </StackNavigator>
  );
};

export default Navigator;
