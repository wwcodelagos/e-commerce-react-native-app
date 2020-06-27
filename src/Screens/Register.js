import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import { Avatar } from "react-native-elements";
import Logo from '../Components/Logo';

const { width } = Dimensions.get('screen');

export default function Login() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Avatar
            size="medium"
            icon={{ name: 'user', type: 'font-awesome', color: '#298ee0' }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={styles.avatar}
          />
        </View>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.loginheaderText}>Sign Up</Text>
          <TextInput style={styles.input} placeholder='Username' />
          <TextInput style={styles.input} placeholder='Email' />
          <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  formContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    padding: 20,
  },
  loginheaderText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 30,
    textAlign: 'left',
  },
  input: {
    paddingHorizontal: 10,
    width: width - 60,
    height: 50,
    borderColor: '#dbe5e3',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    shadowColor: '#14588f',
    shadowRadius: 6.5,
    elevation: 12,
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 5,
    }
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#298ee0",
    padding: 10,
    width: width - 60,
    height: 60,
    borderRadius: 5,
    shadowColor: '#14588f',
    shadowRadius: 6.5,
    elevation: 12,
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 5,
    }
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#298ee0',
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  logoText: {
    color: '#298ee0',
    fontSize: 18,
    fontWeight: 'bold'
  },
});
