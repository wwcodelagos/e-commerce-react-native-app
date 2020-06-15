import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoWrapper}>
      <Text style={styles.logoText}>E-Shop</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: 'bold',
  },
});

export default Logo;
