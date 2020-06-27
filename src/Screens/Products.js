import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
  Card,
  Button,
  Icon,
  ListItem,
  ListItemProps,
  ImageProps,
} from "react-native-elements";
import productsList from "./shared/productsList";

export default function Products() {
  return (
    <View style={styles.container}>
      {productsList.map((u, i) => {
        return (
          <Card containerStyle={{ padding: 0 }} key={u.id}>
            <Image
              style={styles.image}
              resizeMode={"cover"}
              source={{ uri: u.image }}
            />
            <Text style={styles.name}>{u.name}</Text>
          </Card>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    padding: 0,
  },
  cardStyle: {
    margin: 0,
  },
  name: {
    textAlign: "left",
  },
});
