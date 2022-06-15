//basic
import React from 'react';

//navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileStackNavigator, BoardStackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
    // initialRouteName=""
    >
      <Drawer.Screen
        name="BoardStack"
        component={BoardStackNavigator}
        options={{
          title: '게시판',
          drawerLabel: '게시판',
        }}
      />

      <Drawer.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{
          title: '내 프로필',
          drawerLabel: '내 프로필',
        }}
      />
    </Drawer.Navigator>
  );
};

export { MainDrawerNavigator };
