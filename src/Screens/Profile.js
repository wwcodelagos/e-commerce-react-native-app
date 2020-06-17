import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
  TextInput
} from 'react-native';
import { Avatar } from "react-native-elements";

const { width } = Dimensions.get('screen');

export default function Profile() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
      <View style={styles.container}>
      <Text style={styles.headerText}>My Profile</Text>
      <Text style={styles.subHeaderText}>Please complete your profile.</Text>
        <View style={styles.avatarContainer}>
          <Avatar
          rounded
            size="xlarge"
            icon={{ name: 'user', type: 'font-awesome', color: '#298ee0' }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={styles.avatar}
            showAccessory
            source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              }}
          />
        </View>
        <View style={{flex: 3}}>
        <Text style={styles.subHeaderText}>Name</Text>
          <TextInput style={styles.input} placeholder='Name'></TextInput>
        <Text style={styles.subHeaderText}>Phone Number</Text>
          <TextInput style={styles.input} placeholder='Phone'></TextInput>
        <Text style={styles.subHeaderText}>Email</Text>
          <TextInput style={styles.input} placeholder='Email'></TextInput>
          <Text style={styles.subHeaderText}>Delivery Address</Text>
          <TextInput style={styles.input} placeholder='Address' />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e9f3',
    padding: 15,
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  avatar: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  headerText: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: 30,
    textAlign: 'left',
  },
  subHeaderText: {
    color: '#a3a4a3',
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  input: {
    paddingHorizontal: 10,
    width: width - 60,
    height: 50,
    borderColor: '#dbe5e3',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 25,
    shadowColor: '#14588f',
    shadowRadius: 6.5,
    elevation: 12,
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 5,
    }
  },
});
