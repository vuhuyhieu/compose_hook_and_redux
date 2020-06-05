import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BOTTOM_TAB,
  LOGIN_SCREEN,
  SIGN_UP_SCREEN,
  SPLASH_SCREEN,
} from './RouteName';
import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={SIGN_UP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name={BOTTOM_TAB} component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
