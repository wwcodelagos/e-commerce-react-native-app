/* jshint esversion: 6 */

import React from 'react';
import { 
  StyleSheet, 
  View,
  Text, 
  Platform,
  TextInput,
  CheckBox,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';


export default function App() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
      <View style={styles.container}>

      <View style={styles.bodyContainer}>
      
        <View style={styles.formContainer}>

            <Text style={styles.formHeader}> Enter your payment details </Text>
    
            <View>
              <Text style={styles.inputTitle}> Card number </Text>
                <TextInput style={styles.input} placeholder='  Enter card no' />
            </View>
            <View>
              <Text style={styles.inputTitle}> Expiration Date </Text>
              <TextInput style={styles.input} placeholder='  Enter card no' />
            </View>
            <View>
              <Text style={styles.inputTitle}> Name on card </Text>
              <TextInput style={styles.input} placeholder=''/>
            </View>
            <View>
              <Text style={styles.plainText}> My billing address is the same as my shipping address: </Text>
            </View>

        </View>  

            <View style={{ paddingBottom: 5, marginTop: 0}}>
              <Text style={styles.text}> Redeem a gift card </Text>
            </View>   

            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                  <Text style={styles.checkoutText}> Continue </Text>
                </TouchableOpacity>
            </View> 

      </View>  

      </View>
    </KeyboardAvoidingView>
  );
}  


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    bodyContainer: {
      flex: 1,      
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingBottom: 100,
      padding: 30,
    },

  formContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 200,
    marginBottom: 300,
  },

    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 0
    },

    formHeader: {
      color: '#000',
      paddingTop: 100,
      paddingBottom: 20,
      fontWeight: 'bold',
      fontSize: 15,
    },

    inputTitle: {
      padding: 5,
    },

    input: {
      width: 350,
      height: 50,
      borderColor: '#dbe5e3',
      backgroundColor: '#ffffff',
      borderWidth: 2,
      marginBottom: 20,
      borderRadius: 5,
    },

    plainText: {
      marginBottom: 0,
    },

    text: {
      width: 350,
      height: 50,
      fontWeight: 'bold', 
      color: 'lightblue',
      borderColor: '#dbe5e3',
      backgroundColor: '#ffffff',
      borderWidth: 1,
      marginTop: 30,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 12
    },

    button: {
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: 'lightblue',
      width: 350,
      height: 50,
      borderRadius: 8,
    },

    checkoutText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
});