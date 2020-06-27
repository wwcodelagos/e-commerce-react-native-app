import React from "react";
import { Text, View, StyleSheet, Image, TouchableHighlight, ScrollView } from "react-native";
import {
  Card,
  Button,
  Icon,
  ListItem,
  ListItemProps,
  ImageProps,
  ButtonGroup,
} from "react-native-elements";
import productsList from "./shared/productsList";

export default function Products() {
  return (
    <ScrollView style={styles.container}>
      {productsList.map((u, i) => {
        return (
          <Card containerStyle={{ padding: 0 }} key={u.id}>
            <Image
              style={styles.image}
              resizeMode={"cover"}
              source={{ uri: u.image }}
            />
            <View style={styles.details}>
              <View style={styles.labels}>
                <Text style={styles.name}>{u.name.toUpperCase()}</Text>
                <Text style={styles.price}>{u.price}</Text>
              </View>
              <View>
                <Button title="Add to cart" />
              </View>
            </View>
          </Card>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    minHeight: 150,
  },
  details: {
    padding: 10,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  name: {
    fontWeight: '900',
  },
  price: {
    color: 'green',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  cardStyle: {
    margin: 0,
  },
  name: {
    textAlign: "left",
  },
});
