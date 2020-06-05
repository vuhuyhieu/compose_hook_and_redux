import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      {console.log('render sign up screen')}
      <Text>SIGN UP SCREEN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
