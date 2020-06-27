import React from "react";
import { Container, Text } from "native-base";
import Profile from '../../src/Screens/Profile';
import { Alert, View, ActivityIndicator } from "react-native";

const ProfileTab = () => {
  return (
    <Container >
      <Profile />
    </Container>
  );
};

export default ProfileTab;
