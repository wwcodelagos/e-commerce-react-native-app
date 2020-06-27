import React from "react";
import { Container, Text } from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import Login from './src/Screens/Login'
import Register from './src/Screens/Register';
import Profile from './src/Screens/Profile';
import Products from "./src/Screens/Products";
import TabScreen from "./screen/TabScreen";

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        <Products />
      </Container>
    );
  }
}