import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {LOGIN_SCREEN} from '../../navigation/RouteName';

const {width, height} = Dimensions.get('window');

export default function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => props.navigation.navigate(LOGIN_SCREEN), 2000);
  });

  return (
    <View style={styles.container}>
      {console.log('render Splash screen')}
      <Text>Splash</Text>
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
