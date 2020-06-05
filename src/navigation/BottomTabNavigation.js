import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ACCOUNT_SCREEN, HISTORY_SCREEN, HOME_SCREEN} from './RouteName';
import HomeScreen from '../screens/home/HomeScreen';
import HistoryScreen from '../screens/history/HistoryScreen';
import AccountScreen from '../screens/account/AccountScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const _getIcon = (route, focused) => {
    let iconName = '';
    switch (route.name) {
      case HOME_SCREEN:
        iconName = 'home';
        break;
      case HISTORY_SCREEN:
        iconName = 'history';
        break;
      case ACCOUNT_SCREEN:
        iconName = 'account-circle';
        break;
    }
    return focused ? (
      <Icon name={iconName} size={20} color={'tomato'} />
    ) : (
      <Icon name={iconName} size={20} />
    );
  };

  return (
    <Tab.Navigator
      headerMode={'none'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => _getIcon(route, focused),
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{tabBarLabel: 'Trang chủ'}}
      />
      <Tab.Screen
        name={HISTORY_SCREEN}
        component={HistoryScreen}
        options={{tabBarLabel: 'Lịch sử'}}
      />
      <Tab.Screen
        name={ACCOUNT_SCREEN}
        component={AccountScreen}
        options={{tabBarLabel: 'Tài khoản'}}
      />
    </Tab.Navigator>
  );
}
