import React, { useState } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Button,
  Icon,
  Badge,
  TabHeading,
  Text,
  Content,
} from "native-base";
import Home from "./tabs/Home";
import Cart from "./tabs/Cart";
import Profile from "./tabs/Profile";
import { StyleSheet } from "react-native";

const TabsScreen = () => {
  const [index, setIndex] = useState(0);
  const switchScreen = (indexNum) => {
    setIndex(indexNum);
  };
  const renderComponent = () => {
    if (index === 0) {
      return <Home />;
    } else if (index === 1) {
      return <Cart />;
    } else {
      return <Profile />;
    }
  };
  return (
    <Container>
      <Header style={styles.header}>
        <Left />
        <Body>
          <Title>E-commerce App</Title>
        </Body>
        <Right />
      </Header>
      <Content>{renderComponent()}</Content>

      <Footer>
        <FooterTab style={styles.header}>
          <Button
            vertical
            active={index === 0 ? true : false}
            onPress={() => switchScreen(0)}
          >
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button
            badge
            active={index === 1 ? true : false}
            vertical
            onPress={() => switchScreen(1)}
          >
            <Badge warning>
              <Text>5</Text>
            </Badge>
            <Icon active name="cart" />
            <Text>Cart</Text>
          </Button>
          <Button
            vertical
            active={index === 2 ? true : false}
            onPress={() => switchScreen(2)}
          >
            <Icon name="person" />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#009387",
  },
});
export default TabsScreen;
